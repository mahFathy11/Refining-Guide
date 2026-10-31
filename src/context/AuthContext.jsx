import { createContext, useContext, useState, useEffect, useCallback } from "react";

const AuthContext = createContext(null);

const TOKEN_STORAGE_KEY = "chem_auth_token";
const USER_STORAGE_KEY = "chem_auth_user";
const GUEST_MODE_KEY = "chem_guest_mode";
const FALLBACK_USERS_KEY = "chem_secure_vault_v2";

// دالة تشفير احتياطية باستخدام Web Crypto API (SHA-256 + Salt)
// تُستخدم فقط في حال تشغيل المشروع كملفات ثابتة بدون خادم، لضمان عدم حفظ كلمة المرور نهائياً كنص عادي
async function hashClientPassword(password, salt) {
  const enc = new TextEncoder();
  const data = enc.encode(`${salt}:${password}:chem_secret_salt_2026`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function AuthProvider({ children }) {
  // 1. استرجاع بيانات المستخدم الآمنة (بدون أي كلمات سر)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const raw = localStorage.getItem(USER_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      // تأكيد استبعاد أي حقل لكلمة المرور إذا وُجد
      if (parsed && typeof parsed === "object") {
        delete parsed.password;
        delete parsed.hash;
        delete parsed.salt;
        return parsed;
      }
      return null;
    } catch {
      return null;
    }
  });

  // 2. توكن الجلسة المشفر
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem(TOKEN_STORAGE_KEY) || null;
    } catch {
      return null;
    }
  });

  // 3. وضع الزائر
  const [isGuest, setIsGuest] = useState(() => {
    try {
      return localStorage.getItem(GUEST_MODE_KEY) === "true";
    } catch {
      return false;
    }
  });

  // تنظيف أي بيانات قديمة لكلمات المرور كانت محفوظة في الإصدارات السابقة
  useEffect(() => {
    try {
      const oldKeys = ["chem_users_v1", "chem_user_password", "chem_passwords"];
      oldKeys.forEach((k) => localStorage.removeItem(k));
    } catch {}
  }, []);

  // التحقق من صحة التوكن مع الباك إند عند فتح الموقع
  useEffect(() => {
    if (!token) return;

    let isMounted = true;
    fetch("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data && data.success && data.user) {
          setCurrentUser(data.user);
          localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
        }
      })
      .catch(() => {
        // إذا كان السيرفر غير متاح مؤقتاً، نحتفظ ببيانات الجلسة الحالية
      });

    return () => {
      isMounted = false;
    };
  }, [token]);

  // حفظ وضع الزائر
  useEffect(() => {
    try {
      if (isGuest) {
        localStorage.setItem(GUEST_MODE_KEY, "true");
      } else {
        localStorage.removeItem(GUEST_MODE_KEY);
      }
    } catch {}
  }, [isGuest]);

  // حفظ بيانات المستخدم الآمنة (الاسم والمعرف فقط)
  useEffect(() => {
    try {
      if (currentUser) {
        const safeData = {
          id: currentUser.id,
          username: currentUser.username || currentUser.name,
          name: currentUser.name || currentUser.username,
          role: currentUser.role || "مهندس كيميائي",
          targetTrack: currentUser.targetTrack || "design",
          avatar: currentUser.avatar || "👨‍🔬",
        };
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(safeData));
        localStorage.setItem("chem_current_user_id", safeData.id);
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
        localStorage.removeItem("chem_current_user_id");
      }
    } catch {}
  }, [currentUser]);

  // تسجيل الدخول بالاسم وكلمة المرور
  const login = useCallback(async ({ username, password }) => {
    const cleanUser = String(username || "").trim();
    const cleanPass = String(password || "");

    if (!cleanUser || !cleanPass) {
      return { success: false, error: "يرجى كتابة اسم المستخدم وكلمة المرور." };
    }

    try {
      // محاولة تسجيل الدخول عبر الباك إند
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: cleanUser, password: cleanPass }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setCurrentUser(data.user);
        setToken(data.token);
        setIsGuest(false);
        try {
          localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
          localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
          localStorage.setItem("chem_current_user_id", data.user.id);
          localStorage.removeItem(GUEST_MODE_KEY);
        } catch {}
        return { success: true, user: data.user };
      } else {
        return { success: false, error: data.error || "اسم المستخدم أو كلمة المرور غير صحيحة." };
      }
    } catch (networkError) {
      // في حال تعذر الوصول للباك إند، استخدام الفحص المشفر محلياً بدون تخزين كلمة السر
      console.warn("Backend API not reachable, using encrypted fallback vault.");
      try {
        const rawVault = localStorage.getItem(FALLBACK_USERS_KEY);
        const vault = rawVault ? JSON.parse(rawVault) : [];
        const found = vault.find((u) => u.username.toLowerCase() === cleanUser.toLowerCase());

        if (!found) {
          return { success: false, error: "اسم المستخدم أو كلمة المرور غير صحيحة." };
        }

        const computedHash = await hashClientPassword(cleanPass, found.salt);
        if (computedHash !== found.hash) {
          return { success: false, error: "اسم المستخدم أو كلمة المرور غير صحيحة." };
        }

        const safeUser = {
          id: found.id,
          username: found.username,
          name: found.username,
          role: found.role || "مهندس كيميائي",
          targetTrack: found.targetTrack || "design",
          avatar: found.avatar || "👨‍🔬",
        };

        setCurrentUser(safeUser);
        setIsGuest(false);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(safeUser));
        localStorage.setItem("chem_current_user_id", safeUser.id);
        localStorage.removeItem(GUEST_MODE_KEY);
        return { success: true, user: safeUser };
      } catch {
        return { success: false, error: "حدث خطأ أثناء تسجيل الدخول." };
      }
    }
  }, []);

  // إنشاء حساب جديد بالاسم وكلمة المرور
  const register = useCallback(async ({ username, password }) => {
    const cleanUser = String(username || "").trim();
    const cleanPass = String(password || "");

    if (!cleanUser) {
      return { success: false, error: "يرجى كتابة اسم المستخدم." };
    }

    if (!cleanPass || cleanPass.length < 4) {
      return { success: false, error: "كلمة المرور يجب ألا تقل عن 4 خانات." };
    }

    try {
      // إنشاء الحساب عبر الباك إند
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: cleanUser, password: cleanPass }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setCurrentUser(data.user);
        setToken(data.token);
        setIsGuest(false);
        try {
          localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
          localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
          localStorage.setItem("chem_current_user_id", data.user.id);
          localStorage.removeItem(GUEST_MODE_KEY);
        } catch {}
        return { success: true, user: data.user };
      } else {
        return {
          success: false,
          error: data.error || "حدث خطأ أثناء إنشاء الحساب.",
        };
      }
    } catch (networkError) {
      // التشفير الاحتياطي في حال تعذر الوصول للباك إند
      console.warn("Backend API not reachable, saving to encrypted fallback vault.");
      try {
        const rawVault = localStorage.getItem(FALLBACK_USERS_KEY);
        const vault = rawVault ? JSON.parse(rawVault) : [];
        const exists = vault.find((u) => u.username.toLowerCase() === cleanUser.toLowerCase());

        if (exists) {
          return { success: false, error: "اسم المستخدم مسجل بالفعل. يرجى اختيار اسم آخر." };
        }

        const salt = Math.random().toString(36).substring(2) + Date.now().toString(36);
        const hash = await hashClientPassword(cleanPass, salt);
        const newId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;

        const newUserRecord = {
          id: newId,
          username: cleanUser,
          salt: salt,
          hash: hash, // الهاش فقط، كلمة المرور الأصلية لا تخزن نهائياً
          role: "مهندس كيميائي",
          targetTrack: "design",
          avatar: "👨‍🔬",
        };

        vault.push(newUserRecord);
        localStorage.setItem(FALLBACK_USERS_KEY, JSON.stringify(vault));

        const safeUser = {
          id: newId,
          username: cleanUser,
          name: cleanUser,
          role: "مهندس كيميائي",
          targetTrack: "design",
          avatar: "👨‍🔬",
        };

        setCurrentUser(safeUser);
        setIsGuest(false);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(safeUser));
        localStorage.setItem("chem_current_user_id", safeUser.id);
        localStorage.removeItem(GUEST_MODE_KEY);
        return { success: true, user: safeUser };
      } catch {
        return { success: false, error: "حدث خطأ أثناء إنشاء الحساب." };
      }
    }
  }, []);

  // الدخول المباشر كزائر
  const loginAsGuest = useCallback(() => {
    try {
      localStorage.setItem(GUEST_MODE_KEY, "true");
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(USER_STORAGE_KEY);
      localStorage.removeItem("chem_current_user_id");
    } catch {}
    setIsGuest(true);
    setCurrentUser(null);
    setToken(null);
  }, []);

  // تسجيل الخروج
  const logout = useCallback(() => {
    try {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(USER_STORAGE_KEY);
      localStorage.removeItem(GUEST_MODE_KEY);
      localStorage.removeItem("chem_current_user_id");
    } catch {}
    setCurrentUser(null);
    setToken(null);
    setIsGuest(false);
  }, []);

  // تحديث بيانات الملف الشخصي (المسار، الدور، الشعار)
  const updateProfile = useCallback(
    async (updates) => {
      if (!currentUser) return;
      const updatedUser = { ...currentUser, ...updates };
      setCurrentUser(updatedUser);

      try {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
      } catch {}

      if (token) {
        try {
          await fetch("/api/auth/profile", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updates),
          });
        } catch {}
      }
    },
    [currentUser, token]
  );

  // دوال التوافق مع الكود السابق
  const saveProfile = useCallback(
    ({ name }) => {
      if (!currentUser) return { success: false, error: "يرجى تسجيل الدخول أولاً." };
      return updateProfile({ name });
    },
    [currentUser, updateProfile]
  );

  const selectProfile = useCallback(() => {
    return { success: false, error: "يرجى تسجيل الدخول بكلمة المرور." };
  }, []);

  const value = {
    currentUser,
    currentUserId: currentUser?.id || null,
    isAuthenticated: !!currentUser,
    isGuest,
    login,
    register,
    loginAsGuest,
    logout,
    updateProfile,
    saveProfile,
    selectProfile,
    users: currentUser ? [currentUser] : [],
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
