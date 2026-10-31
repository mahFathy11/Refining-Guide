import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import useSEO from "../hooks/useSEO.js";
import "../styles/auth.css";

export default function LoginPage() {
  useSEO({
    title: "تسجيل الدخول",
    description: "تسجيل الدخول أو الدخول كزائر لمنصة مسارات مهندس التكرير والبتروكيماويات لحفظ تقدمك والمصادر المفضلة.",
  });

  const { login, register, loginAsGuest } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState("login"); // "login" | "register"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const destination = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const cleanUser = username.trim();
    if (!cleanUser) {
      setErrorMsg("يرجى كتابة اسم المستخدم.");
      return;
    }

    if (!password) {
      setErrorMsg("يرجى كتابة كلمة المرور.");
      return;
    }

    if (mode === "register") {
      if (password.length < 4) {
        setErrorMsg("كلمة المرور يجب أن لا تقل عن 4 خانات.");
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg("كلمتا المرور غير متطابقتين.");
        return;
      }
    }

    setLoading(true);

    try {
      if (mode === "login") {
        const res = await login({ username: cleanUser, password });
        if (res.success) {
          navigate(destination, { replace: true });
        } else {
          setErrorMsg(res.error || "اسم المستخدم أو كلمة المرور غير صحيحة.");
        }
      } else {
        const res = await register({ username: cleanUser, password });
        if (res.success) {
          setSuccessMsg("تم إنشاء الحساب بنجاح! جاري الدخول...");
          setTimeout(() => {
            navigate(destination, { replace: true });
          }, 600);
        } else {
          setErrorMsg(res.error || "حدث خطأ أثناء إنشاء الحساب.");
        }
      }
    } catch {
      setErrorMsg("تعذر الاتصال بخادم تسجيل الدخول. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate(destination, { replace: true });
  };

  return (
    <div className="login-page-wrap">
      <div className="login-simple-card">
        {/* رأس البطاقة والشعار */}
        <div className="login-card-header">
          <div className="login-brand-icon">⚗️</div>
          <h2>مسارات الهندسة الكيميائية</h2>
          <p className="login-card-desc">
            {mode === "login"
              ? "سجّل دخولك لمتابعة خطتك التعليمية وحفظ تقدمك"
              : "أنشئ حساباً جديداً للوصول لكافة المسارات والمصادر"}
          </p>
        </div>

        {/* التبديل بين تسجيل الدخول وإنشاء حساب */}
        <div className="auth-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "login"}
            className={`auth-tab-btn ${mode === "login" ? "active" : ""}`}
            onClick={() => {
              setMode("login");
              setErrorMsg("");
              setSuccessMsg("");
            }}
          >
            <span>🔑</span>
            <span>تسجيل الدخول</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "register"}
            className={`auth-tab-btn ${mode === "register" ? "active" : ""}`}
            onClick={() => {
              setMode("register");
              setErrorMsg("");
              setSuccessMsg("");
            }}
          >
            <span>👤</span>
            <span>حساب جديد</span>
          </button>
        </div>

        {/* رسائل التنبيه والخطأ */}
        {errorMsg && (
          <div className="auth-alert-error" role="alert">
            <span>⚠️</span>
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div
            className="auth-alert-error"
            style={{
              background: "rgba(16, 185, 129, 0.12)",
              borderColor: "rgba(16, 185, 129, 0.3)",
              color: "#059669",
            }}
            role="status"
          >
            <span>✓</span>
            <span>{successMsg}</span>
          </div>
        )}

        {/* الفورم البسيطة */}
        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          {/* اسم المستخدم */}
          <div className="form-field">
            <label htmlFor="login-username">اسم المستخدم</label>
            <div className="input-with-icon">
              <span className="field-icon">👤</span>
              <input
                id="login-username"
                type="text"
                className="form-input"
                placeholder="اكتب اسم المستخدم هنا"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
                required
              />
            </div>
          </div>

          {/* كلمة المرور */}
          <div className="form-field">
            <label htmlFor="login-password">كلمة المرور</label>
            <div className="input-with-icon">
              <span className="field-icon">🔒</span>
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                className="form-input"
                placeholder="اكتب كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword((prev) => !prev)}
                title={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                aria-label="إظهار أو إخفاء كلمة المرور"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          {/* تأكيد كلمة المرور في وضع إنشاء حساب */}
          {mode === "register" && (
            <div className="form-field">
              <label htmlFor="login-confirm-password">تأكيد كلمة المرور</label>
              <div className="input-with-icon">
                <span className="field-icon">🔐</span>
                <input
                  id="login-confirm-password"
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="أعد كتابة كلمة المرور"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>
          )}

          {/* زر التأكيد */}
          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
            style={{ width: "100%", marginTop: "8px" }}
          >
            {loading ? (
              <span>جاري التحقق...</span>
            ) : mode === "login" ? (
              <span>تسجيل الدخول ←</span>
            ) : (
              <span>إنشاء الحساب ودخول المنصة ←</span>
            )}
          </button>
        </form>

        {/* فاصل */}
        <div className="auth-divider">
          <span>أو</span>
        </div>

        {/* زر التصفح كزائر */}
        <button
          type="button"
          className="guest-btn"
          style={{ width: "100%", padding: "11px", fontWeight: "bold" }}
          onClick={handleGuestLogin}
        >
          <span>تصفح المنصة مباشرة كزائر</span>
          <span>👤</span>
        </button>

        {/* تنبيه الأمان والتشفير */}
        <div className="login-security-notice">
          <span>🔒</span>
          <span>كلمة المرور مشفرة أمنياً عبر خادم خاص (PBKDF2) ولا يتم حفظها على متصفحك إطلاقاً.</span>
        </div>
      </div>
    </div>
  );
}
