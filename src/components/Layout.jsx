import { useState, lazy, Suspense, useRef, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import GlobalSearch from "./GlobalSearch.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";
import Footer from "./Footer.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import useProgress, { trackCount } from "../hooks/useProgress.js";
import useBookmarks from "../hooks/useBookmarks.js";
import { tracks } from "../data/tracks.js";

// Lazy load heavy floating widgets to free initial main thread
const UserProfileModal = lazy(() => import("./UserProfileModal.jsx"));
const AiChatWidget = lazy(() => import("./AiChatWidget.jsx"));

const links = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/tracks", label: "المسارات" },
  { to: "/tips", label: "الخلاصة والنصائح" },
  { to: "/companies", label: "الشركات" },
  { to: "/scholarships", label: "المنح الدراسية" },
  { to: "/curriculum", label: "مواد الكلية" },
  { to: "/channels", label: "قنوات يوتيوب" },
];

export default function Layout() {
  const { currentUser } = useAuth();
  const { done } = useProgress();
  const { count: bookmarkCount } = useBookmarks();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const targetTrackId = currentUser?.targetTrack || "design";
  const targetPct = currentUser && Array.isArray(tracks)
    ? trackCount(tracks.find((t) => t.id === targetTrackId) || tracks[0], done)?.pct || 0
    : 0;

  // تمرير التبويب النشط في المنتصف تلقائياً في شاشات الموبايل
  useEffect(() => {
    if (navRef.current) {
      const activeTab = navRef.current.querySelector(".nav-link.on");
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [location.pathname]);

  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <div className="header-top-bar">
            {/* الهوية والمستخدم */}
            <div className="header-brand-group">
              <NavLink to="/" className="brand">
                مسارات الهندسة الكيميائية
              </NavLink>

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

            {/* أدوات البحث والمظهر والمحفوظات */}
            <div className="header-tools-group">
              <GlobalSearch />
              <div className="header-actions">
                <ThemeSwitcher />
                <button
                  type="button"
                  className="header-bookmark-btn"
                  onClick={() => setIsProfileOpen(true)}
                  title={bookmarkCount > 0 ? `محفوظاتي (${bookmarkCount})` : "المحفوظات والمفضلة"}
                >
                  <span>⭐️</span>
                  <span className="bookmark-label">محفوظاتي</span>
                  {bookmarkCount > 0 && (
                    <span className="bookmark-count-badge">{bookmarkCount}</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* شريط الأقسام والتبويبات: شريط أفقي مخصص للشاشات الصغيرة والكبيرة دون خروج عن الشاشة */}
          <nav className="site-nav" ref={navRef} aria-label="أقسام الموقع">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? "nav-link on" : "nav-link")}
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

      {isProfileOpen && (
        <Suspense fallback={null}>
          <UserProfileModal
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
          />
        </Suspense>
      )}

      {/* زر العودة لأعلى الصفحة */}
      <ScrollToTopButton />

      {/* المستشار الهندسي الذكي العائم */}
      <Suspense fallback={null}>
        <AiChatWidget />
      </Suspense>
    </>
  );
}
