import { Link } from "react-router-dom";
import { TRACK_ICONS } from "../data/tracks.js";

export default function TrackCard({ track, progress }) {
  const pct = progress.total ? Math.round((progress.done / progress.total) * 100) : 0;
  const icon = (track && TRACK_ICONS[track.id]) || "📘";
  const stageCount = track.stages ? track.stages.length : 0;

  return (
    <Link to={`/tracks/${track.id}`} className="track-card">
      <div className="track-card-top">
        <div className="track-card-icon-wrap">
          <span className="track-card-icon">{icon}</span>
        </div>
        <div className="track-card-stats-pill">
          {track.underDevelopment && (
            <>
              <span className="track-dev-pill-tag">قيد التطوير 🚧</span>
              <span className="dot-sep">•</span>
            </>
          )}
          <span>{stageCount} مراحل</span>
          <span className="dot-sep">•</span>
          <span>{progress.total} {track.underDevelopment ? "موضوع" : "مصدر"}</span>
        </div>
      </div>

      <div className="track-card-body">
        <h3 className="track-card-title">{track.title}</h3>
        <p className="track-card-desc">{track.desc}</p>
        {track.underDevelopment && (
          <div className="track-card-dev-note">
            <span className="dev-note-icon">ℹ️</span>
            <span>المسار قيد التطوير: يوضح المفاهيم والمعايير المطلوبة (بدون روابط مباشرة حالياً)</span>
          </div>
        )}
      </div>

      <div className="track-card-footer">
        <div className="track-progress-info">
          <div className="track-progress-labels">
            <span className="track-progress-text">
              {pct > 0 ? `${pct}% منجز (${progress.done}/${progress.total})` : "لم يبدأ بعد"}
            </span>
            <span className="track-action-link">
              دخول المسار <span className="arrow-icon">←</span>
            </span>
          </div>
          <div className="track-meter-bar">
            <div className="track-meter-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </Link>
  );
}
