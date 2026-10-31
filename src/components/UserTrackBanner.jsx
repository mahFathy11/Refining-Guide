import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import useProgress, { trackCount } from "../hooks/useProgress.js";
import { tracks } from "../data/tracks.js";
import UserProfileModal from "./UserProfileModal.jsx";

export default function UserTrackBanner() {
  const { currentUser, isGuest } = useAuth();
  const { done } = useProgress();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!currentUser && !isGuest) return null;

  if (isGuest) {
    return (
      <div
        className="user-track-banner"
        style={{
          background: "color-mix(in srgb, var(--warn) 10%, var(--card))",
          borderColor: "color-mix(in srgb, var(--warn) 35%, transparent)",
        }}
      >
        <div className="banner-top-row">
          <div className="banner-user-profile">
            <span className="banner-user-avatar">👀</span>
            <div>
              <h3 className="banner-user-greeting">أنت تتصفح المنصة كزائر</h3>
              <p className="banner-user-role">
                سجل حساباً مجانياً باسمك لاختيار مسارك الهندسي المفضل وحفظ تقدمك لحظة بلحظة حتى عند إغلاق المتصفح.
              </p>
            </div>
          </div>
          <Link
            to="/login"
            className="btn-resume-track"
            style={{ background: "var(--ac)" }}
          >
            <span>تسجيل حساب مجاني 🚀</span>
          </Link>
        </div>
      </div>
    );
  }

  const targetTrackId = currentUser.targetTrack || "design";
  const targetTrack = tracks.find((t) => t.id === targetTrackId) || tracks[0];
  const stats = trackCount(targetTrack, done);

  return (
    <>
      <div className="user-track-banner">
        <div className="banner-top-row">
          <div className="banner-user-profile">
            <span className="banner-user-avatar">{currentUser.avatar || "👨‍🔬"}</span>
            <div>
              <h3 className="banner-user-greeting">
                أهلاً بك يا بشمهندس {currentUser.name}! 👋
              </h3>
              <p className="banner-user-role">
                {currentUser.role || "مهندس كيميائي"} • خطتك الدراسية الشخصية
              </p>
            </div>
          </div>

          <div className="banner-badges">
            <span className="target-track-badge">
              🎯 المسار المستهدف: {targetTrack.title}
            </span>
            <span className="progress-pct-badge">{stats.pct}% مكتمل</span>
          </div>
        </div>

        <div className="banner-progress-box">
          <div className="progress-labels-row">
            <span>
              إنجازك في مسار <strong>{targetTrack.title}</strong>:
            </span>
            <span>
              <strong>{stats.done}</strong> من <strong>{stats.total}</strong> كورس
              ومرجع ({stats.pct}%)
            </span>
          </div>
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${Math.max(stats.pct, 3)}%` }}
            />
          </div>
        </div>

        <div className="banner-actions-row">
          <Link to={`/tracks/${targetTrack.id}`} className="btn-resume-track">
            <span>متابعة مسار {targetTrack.title} مباشرة ←</span>
          </Link>
          <button
            type="button"
            className="btn-profile-stats"
            onClick={() => setIsModalOpen(true)}
          >
            ⚙️ إدارة المسار والملف الشخصي
          </button>
        </div>
      </div>

      <UserProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
