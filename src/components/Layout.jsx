import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import GlobalSearch from "./GlobalSearch.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import UserProfileModal from "./UserProfileModal.jsx";
import AiChatWidget from "./AiChatWidget.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";
import Footer from "./Footer.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import useProgress, { trackCount } from "../hooks/useProgress.js";
import useBookmarks from "../hooks/useBookmarks.js";
import { tracks } from "../data/tracks.js";

const links = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/curriculum", label: "مواد الكلية" },
  { to: "/tracks", label: "المسارات" },
  { to: "/companies", label: "الشركات" },
  { to: "/tips", label: "الخلاصة والنصائح" },
  { to: "/channels", label: "قنوات يوتيوب" },
  { to: "/scholarships", label: "المنح الدراسية" },
];

export default function Layout() {
  const { currentUser } = useAuth();
  const { done } = useProgress();
  const { count: bookmarkCount } = useBookmarks();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const targetTrackId = currentUser?.targetTrack || "design";
  const targetTrackObj = Array.isArray(tracks)
    ? tracks.find((t) => t.id === targetTrackId) || tracks[0]
    : null;
  const targetPct = targetTrackObj
    ? trackCount(targetTrackObj, done)?.pct || 0
    : 0;

  return (
    <>
      <header className="site-header">
        <div className="wrap bar-row">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <NavLink to="/" className="brand">
              مسارات الهندسة الكيميائية
            </NavLink>

            {/* شريحة المستخدم النشط أو رابط تسجيل الدخول */}
            {currentUser ? (
              <button
                className="user-nav-chip"
                onClick={() => setIsProfileOpen(true)}
                title="الملف الشخصي وإحصائيات المسار"
              >
                <span className="user-chip-avatar">{currentUser.avatar || "👨‍🔬"}</span>
                <span className="user-chip-name">{currentUser.name}</span>
                <span className="user-chip-pct">{targetPct}%</span>
              </button>
            ) : (
              <NavLink
                to="/login"
                className="header-login-link"
                title="سجل حسابك لحفظ تقدمك بشكل دائم"
              >
                <span>تسجيل حساب ↗</span>
              </NavLink>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <GlobalSearch />
            <ThemeSwitcher />

            {/* زر المحفوظات السريع */}
            <button
              type="button"
              className="card-bookmark-btn"
              onClick={() => setIsProfileOpen(true)}
              title={bookmarkCount > 0 ? `محفوظاتي (${bookmarkCount})` : "المحفوظات والمفضلة"}
              style={{
                width: "auto",
                padding: "6px 12px",
                gap: "6px",
                borderRadius: "99px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: bookmarkCount > 0 ? "#d97706" : "var(--mut)",
                background: bookmarkCount > 0 ? "rgba(245, 158, 11, 0.12)" : "color-mix(in srgb, var(--line) 30%, transparent)",
                borderColor: bookmarkCount > 0 ? "rgba(245, 158, 11, 0.3)" : "var(--line)",
              }}
            >
              <span>⭐️</span>
              <span style={{ fontSize: "0.82rem" }}>محفوظاتي</span>
              {bookmarkCount > 0 && (
                <span
                  style={{
                    background: "#d97706",
                    color: "#fff",
                    borderRadius: "99px",
                    padding: "1px 6px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {bookmarkCount}
                </span>
              )}
            </button>
          </div>

          <nav>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? "on" : "")}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap">
        <Outlet />
      </main>

      <Footer />

      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* زر العودة لأعلى الصفحة */}
      <ScrollToTopButton />

      {/* المستشار الهندسي الذكي العائم */}
      <AiChatWidget />
    </>
  );
}
