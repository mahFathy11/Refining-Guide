import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import useProgress, { trackCount, overallCount } from "../hooks/useProgress.js";
import useBookmarks from "../hooks/useBookmarks.js";
import { tracks } from "../data/tracks.js";

const AVATARS = ["👨‍🔬", "👩‍🔬", "⚙️", "⚗️", "🛢️", "⚛️", "🛡️", "💻"];

const ROLES = [
  "طالب هندسة كيميائية",
  "خريج جديد (Fresh Graduate)",
  "مهندس عمليات (Process Engineer)",
  "مهندس تصميم (Design Engineer)",
  "مهندس تشغيل (Operations Engineer)",
  "مهندس سلامة صناعية (HSE / PSM)",
  "باحث / دراسات عليا",
];

export default function UserProfileModal({ isOpen, onClose }) {
  const { currentUser, updateProfile, logout } = useAuth();
  const { done } = useProgress();
  const { bookmarks, removeBookmark, clearBookmarks } = useBookmarks();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("profile"); // "profile" | "bookmarks"
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [targetTrack, setTargetTrack] = useState("design");
  const [avatar, setAvatar] = useState("👨‍🔬");
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setRole(currentUser.role || ROLES[0]);
      setTargetTrack(currentUser.targetTrack || "design");
      setAvatar(currentUser.avatar || "👨‍🔬");
    }
  }, [currentUser]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentTrackObj = tracks.find((t) => t.id === targetTrack) || tracks[0];
  const targetStats = trackCount(currentTrackObj, done);
  const totalStats = overallCount(tracks, done);

  const handleSave = (e) => {
    e.preventDefault();
    if (!currentUser) return;
    updateProfile({
      name: name.trim() || currentUser.name,
      role,
      targetTrack,
      avatar,
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleLogout = () => {
    onClose();
    logout();
    navigate("/login");
  };

  const handleSelectTrackInModal = (trackId) => {
    onClose();
    navigate(`/tracks/${trackId}`);
  };

  return (
    <div
      className="profile-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="profile-modal-card">
        <header className="profile-modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <h3 className="profile-modal-title">
              <span>{activeTab === "profile" ? "👤" : "⭐️"}</span>
              <span>{activeTab === "profile" ? "الملف ومستوى التقدم" : "محفوظاتي والمفضلة"}</span>
            </h3>
          </div>
          <button
            className="modal-icon-btn modal-close-btn"
            onClick={onClose}
            aria-label="إغلاق"
            title="إغلاق"
          >
            ✕
          </button>
        </header>

        {/* شريط التبويبات العلوي */}
        <div className="profile-modal-tabs">
          <button
            type="button"
            className={`profile-tab-btn ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            <span>📊 الملف ومستوى التقدم</span>
          </button>
          <button
            type="button"
            className={`profile-tab-btn ${activeTab === "bookmarks" ? "active" : ""}`}
            onClick={() => setActiveTab("bookmarks")}
          >
            <span>⭐️ محفوظاتي</span>
            {bookmarks.length > 0 && (
              <span className="profile-tab-count">{bookmarks.length}</span>
            )}
          </button>
        </div>

        {activeTab === "bookmarks" ? (
          /* تبويب المحفوظات */
          <div className="profile-bookmarks-view">
            <div className="bookmarks-header-row">
              <span style={{ fontSize: "0.85rem", color: "var(--mut)", fontWeight: 600 }}>
                {bookmarks.length > 0
                  ? `لديك ${bookmarks.length} عنصر محفوظ للمراجعة السريعة:`
                  : "قائمة المفضلة خالية حالياً"}
              </span>
              {bookmarks.length > 0 && (
                <button
                  type="button"
                  className="btn-clear-bookmarks"
                  onClick={clearBookmarks}
                  title="مسح جميع المحفوظات"
                >
                  مسح الكل
                </button>
              )}
            </div>

            {bookmarks.length === 0 ? (
              <div className="empty-bookmarks-state">
                <span className="empty-bookmarks-icon">⭐️</span>
                <h4>لا توجد كورسات أو مراجع أو شركات محفوظة بعد</h4>
                <p>
                  اضغط على أيقونة النجمة (⭐️) الموجودة بجانب الكورسات في المسارات، أو على كروت الشركات، مراجع الزتونة، والمنح لحفظها والرجوع إليها بضغطة زر!
                </p>
                <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginTop: "12px" }}>
                  <button
                    type="button"
                    className="btn-jump-action"
                    onClick={() => {
                      onClose();
                      navigate("/tracks");
                    }}
                  >
                    استعراض المسارات والكورسات ↗
                  </button>
                  <button
                    type="button"
                    className="btn-jump-action secondary"
                    onClick={() => {
                      onClose();
                      navigate("/tips");
                    }}
                  >
                    مراجع الخلاصة ↗
                  </button>
                  <button
                    type="button"
                    className="btn-jump-action secondary"
                    onClick={() => {
                      onClose();
                      navigate("/companies");
                    }}
                  >
                    دليل الشركات ↗
                  </button>
                </div>
              </div>
            ) : (
              <div className="bookmarks-list">
                {bookmarks.map((b) => (
                  <div key={b.id} className="bookmark-item-card">
                    <div className="bookmark-item-main">
                      <div className="bookmark-badge-row">
                        <span className="bookmark-type-badge">
                          {b.badge || (b.type === "company" ? "🏢 شركة" : b.type === "scholarship" ? "🎓 منحة" : "📘 مرجع")}
                        </span>
                        {b.subtitle && (
                          <span className="bookmark-sub-info">{b.subtitle}</span>
                        )}
                      </div>
                      <h4 className="bookmark-item-title">{b.title}</h4>
                    </div>

                    <div className="bookmark-item-actions">
                      {b.link && (
                        b.link.startsWith("http") ? (
                          <a
                            href={b.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-open-bookmark"
                          >
                            <span>فتح ↗</span>
                          </a>
                        ) : (
                          <Link
                            to={b.link}
                            onClick={onClose}
                            className="btn-open-bookmark"
                          >
                            <span>فتح ↗</span>
                          </Link>
                        )
                      )}
                      <button
                        type="button"
                        className="btn-remove-bookmark"
                        onClick={() => removeBookmark(b.id)}
                        title="إزالة من المحفوظات"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* تبويب الملف الشخصي والتقدم */
          <form onSubmit={handleSave} className="profile-modal-body">
            {/* بطل الملف الشخصي */}
            <div className="profile-user-hero">
              <div className="profile-avatar-large">{currentUser ? avatar : "👨‍🔬"}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <strong style={{ fontSize: "1.1rem" }}>{currentUser ? (name || currentUser.name) : "مهندس زائر"}</strong>
                  {currentUser && (
                    <span className="target-track-badge">{currentTrackObj.title}</span>
                  )}
                </div>
                <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "var(--mut)" }}>
                  {currentUser ? `${currentUser.email} • ${role}` : "تتصفح المنصة كزائر. يمكنك حفظ تقدمك بتسجيل حساب."}
                </p>
                {!currentUser && (
                  <Link
                    to="/login"
                    onClick={onClose}
                    style={{
                      display: "inline-block",
                      marginTop: "6px",
                      fontSize: "0.82rem",
                      color: "var(--ac)",
                      fontWeight: 700,
                      textDecoration: "underline",
                    }}
                  >
                    تسجيل حساب دائم ↗
                  </Link>
                )}
              </div>
            </div>

            {/* الإحصائيات العامة */}
            <div className="profile-stats-grid">
              <div className="profile-stat-box">
                <span className="profile-stat-val">{targetStats.pct}%</span>
                <span className="profile-stat-lbl">إنجاز المسار المستهدف</span>
                <small style={{ display: "block", color: "var(--mut)", fontSize: "0.72rem" }}>
                  ({targetStats.done} من {targetStats.total} كورس)
                </small>
              </div>
              <div className="profile-stat-box">
                <span className="profile-stat-val">{totalStats.done}</span>
                <span className="profile-stat-lbl">إجمالي الكورسات المنجزة</span>
                <small style={{ display: "block", color: "var(--mut)", fontSize: "0.72rem" }}>
                  من أصل {totalStats.total} مصدر
                </small>
              </div>
              <div className="profile-stat-box">
                <span className="profile-stat-val">{totalStats.pct}%</span>
                <span className="profile-stat-lbl">التقدم الكلي في المنصة</span>
                <small style={{ display: "block", color: "var(--mut)", fontSize: "0.72rem" }}>
                  عبر كافة الـ {tracks.length} مسارات
                </small>
              </div>
            </div>

            {currentUser && (
              <>
                {/* تعديل المسار المستهدف والاسم */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div className="form-field">
                    <label>اسم المهندس:</label>
                    <input
                      type="text"
                      className="form-input"
                      style={{ paddingInlineStart: "12px" }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>المسمى / المستوى:</label>
                    <select
                      className="form-select"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label>🎯 مسارك المستهدف الأساسي:</label>
                  <select
                    className="form-select"
                    value={targetTrack}
                    onChange={(e) => setTargetTrack(e.target.value)}
                  >
                    {tracks.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} ({t.desc.split(".")[0]})
                      </option>
                    ))}
                  </select>
                </div>

                {/* اختيار الأيقونة الرمزية */}
                <div>
                  <span className="avatar-picker-label">تغيير الأيقونة الرمزية:</span>
                  <div className="avatar-grid">
                    {AVATARS.map((av) => (
                      <button
                        type="button"
                        key={av}
                        className={`avatar-opt-btn ${avatar === av ? "selected" : ""}`}
                        onClick={() => setAvatar(av)}
                      >
                        {av}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* تقدمك في كافة المسارات */}
            <div>
              <strong style={{ fontSize: "0.85rem", color: "var(--ink)", display: "block", marginBottom: "8px" }}>
                📊 تفصيل تقدمك في جميع المسارات:
              </strong>
              <div className="tracks-breakdown-list">
                {tracks.map((t) => {
                  const stats = trackCount(t, done);
                  const isTarget = t.id === targetTrack;
                  return (
                    <div
                      key={t.id}
                      className="track-progress-row"
                      onClick={() => handleSelectTrackInModal(t.id)}
                      style={{
                        cursor: "pointer",
                        borderColor: isTarget ? "var(--ac)" : undefined,
                      }}
                      title="اضغط للانتقال لهذا المسار"
                    >
                      <div className="track-row-header">
                        <span>
                          {isTarget ? "⭐ " : ""}
                          {t.title}
                        </span>
                        <span>
                          {stats.done} من {stats.total} ({stats.pct}%)
                        </span>
                      </div>
                      <div className="progress-bar-track">
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: `${stats.pct}%`,
                            background: isTarget
                              ? "linear-gradient(90deg, var(--ac), var(--ok))"
                              : "var(--ac)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="profile-modal-footer">
              {currentUser ? (
                <button type="button" className="btn-logout" onClick={handleLogout}>
                  🚪 تسجيل الخروج
                </button>
              ) : (
                <Link to="/login" onClick={onClose} className="btn-logout" style={{ textDecoration: "none" }}>
                  🔑 تسجيل الدخول
                </Link>
              )}
              {currentUser && (
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {savedSuccess && (
                    <span style={{ fontSize: "0.82rem", color: "var(--ok)", fontWeight: 700 }}>
                      ✓ تم الحفظ بنجاح!
                    </span>
                  )}
                  <button type="submit" className="btn-save-profile">
                    حفظ التعديلات
                  </button>
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
