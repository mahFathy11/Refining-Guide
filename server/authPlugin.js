import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, ".data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

// التأكد من وجود مجلد وقاعدة بيانات المستخدمين المحمية على السيرفر
function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2), "utf8");
    }
  } catch (err) {
    console.error("[Auth Server] Error ensuring data directory:", err);
  }
}

// قراءة المستخدمين من قاعدة بيانات السيرفر
function loadUsers() {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(USERS_FILE, "utf8");
    return JSON.parse(raw || "[]");
  } catch (err) {
    console.error("[Auth Server] Error loading users:", err);
    return [];
  }
}

// حفظ المستخدمين مع التشفير في قاعدة بيانات السيرفر
function saveUsers(users) {
  ensureDataFile();
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf8");
  } catch (err) {
    console.error("[Auth Server] Error saving users:", err);
  }
}

// تشفير كلمة المرور بواسطة PBKDF2 و SHA-512 مع Salt عشوائي غير قابل للعكس
function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
}

function generateSalt() {
  return crypto.randomBytes(16).toString("hex");
}

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

// معالج طلبات الـ JSON
function parseRequestBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
  });
}

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.end(JSON.stringify(data));
}

// الميدلوير الرئيسي للباك إند
export function handleAuthRequest(req, res, next) {
  const parsedUrl = new URL(req.url, "http://localhost");
  const pathname = parsedUrl.pathname;

  if (req.method === "OPTIONS") {
    sendJson(res, 204, {});
    return;
  }

  // 1. تسجيل مستخدم جديد (POST /api/auth/register)
  if (req.method === "POST" && pathname === "/api/auth/register") {
    parseRequestBody(req).then((body) => {
      const username = String(body.username || "").trim();
      const password = String(body.password || "");

      if (!username) {
        return sendJson(res, 400, { success: false, error: "يرجى كتابة اسم المستخدم." });
      }

      if (!password || password.length < 4) {
        return sendJson(res, 400, {
          success: false,
          error: "كلمة المرور يجب أن لا تقل عن 4 خانات.",
        });
      }

      const users = loadUsers();
      const exists = users.find(
        (u) => u.username && u.username.toLowerCase() === username.toLowerCase()
      );

      if (exists) {
        return sendJson(res, 400, {
          success: false,
          error: "اسم المستخدم مسجل بالفعل. يرجى اختيار اسم آخر أو تسجيل الدخول.",
        });
      }

      const salt = generateSalt();
      const passwordHash = hashPassword(password, salt);
      const token = generateToken();
      const userId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

      const newUser = {
        id: userId,
        username: username,
        role: "مهندس كيميائي",
        targetTrack: "design",
        avatar: "👨‍🔬",
        salt: salt,
        hash: passwordHash, // كلمة المرور لا تحفظ كـ plaintext أبدًا، يتم حفظ الهاش فقط
        token: token,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
      };

      users.push(newUser);
      saveUsers(users);

      // الرد على الواجهة الأمامية بدون أي بيانات تشفير أو كلمات سر
      return sendJson(res, 200, {
        success: true,
        user: {
          id: newUser.id,
          username: newUser.username,
          name: newUser.username,
          role: newUser.role,
          targetTrack: newUser.targetTrack,
          avatar: newUser.avatar,
        },
        token: newUser.token,
      });
    });
    return;
  }

  // 2. تسجيل الدخول (POST /api/auth/login)
  if (req.method === "POST" && pathname === "/api/auth/login") {
    parseRequestBody(req).then((body) => {
      const username = String(body.username || "").trim();
      const password = String(body.password || "");

      if (!username || !password) {
        return sendJson(res, 400, {
          success: false,
          error: "يرجى كتابة اسم المستخدم وكلمة المرور.",
        });
      }

      const users = loadUsers();
      const user = users.find(
        (u) => u.username && u.username.toLowerCase() === username.toLowerCase()
      );

      if (!user) {
        return sendJson(res, 401, {
          success: false,
          error: "اسم المستخدم أو كلمة المرور غير صحيحة.",
        });
      }

      const inputHash = hashPassword(password, user.salt);
      if (inputHash !== user.hash) {
        return sendJson(res, 401, {
          success: false,
          error: "اسم المستخدم أو كلمة المرور غير صحيحة.",
        });
      }

      // تجديد توكن الجلسة
      user.token = generateToken();
      user.lastActive = new Date().toISOString();
      saveUsers(users);

      return sendJson(res, 200, {
        success: true,
        user: {
          id: user.id,
          username: user.username,
          name: user.username,
          role: user.role || "مهندس كيميائي",
          targetTrack: user.targetTrack || "design",
          avatar: user.avatar || "👨‍🔬",
        },
        token: user.token,
      });
    });
    return;
  }

  // 3. التحقق من التوكن واسترجاع بيانات المستخدم (GET /api/auth/me)
  if (req.method === "GET" && pathname === "/api/auth/me") {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();

    if (!token) {
      return sendJson(res, 401, { success: false, error: "غير مصرح." });
    }

    const users = loadUsers();
    const user = users.find((u) => u.token === token);

    if (!user) {
      return sendJson(res, 401, { success: false, error: "الجلسة منتهية أو غير صالحة." });
    }

    return sendJson(res, 200, {
      success: true,
      user: {
        id: user.id,
        username: user.username,
        name: user.username,
        role: user.role || "مهندس كيميائي",
        targetTrack: user.targetTrack || "design",
        avatar: user.avatar || "👨‍🔬",
      },
      token: user.token,
    });
  }

  // 4. تحديث الملف الشخصي للمستخدم (POST /api/auth/profile)
  if (req.method === "POST" && pathname === "/api/auth/profile") {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();

    if (!token) {
      return sendJson(res, 401, { success: false, error: "غير مصرح." });
    }

    parseRequestBody(req).then((body) => {
      const users = loadUsers();
      const user = users.find((u) => u.token === token);

      if (!user) {
        return sendJson(res, 401, { success: false, error: "المستخدم غير موجود." });
      }

      if (body.targetTrack) user.targetTrack = body.targetTrack;
      if (body.role) user.role = body.role;
      if (body.avatar) user.avatar = body.avatar;
      user.lastActive = new Date().toISOString();

      saveUsers(users);

      return sendJson(res, 200, {
        success: true,
        user: {
          id: user.id,
          username: user.username,
          name: user.username,
          role: user.role,
          targetTrack: user.targetTrack,
          avatar: user.avatar,
        },
      });
    });
    return;
  }

  if (next) {
    next();
  } else {
    sendJson(res, 404, { success: false, error: "API Route not found" });
  }
}

// بلجن لـ Vite لدمج الباك إند تلقائيًا في خادم التطوير
export function authApiPlugin() {
  return {
    name: "vite-plugin-chem-auth",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith("/api/auth")) {
          handleAuthRequest(req, res, next);
        } else {
          next();
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith("/api/auth")) {
          handleAuthRequest(req, res, next);
        } else {
          next();
        }
      });
    },
  };
}
