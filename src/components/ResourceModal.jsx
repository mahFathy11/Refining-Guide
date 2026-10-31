import { useEffect, useState } from "react";
import { LEVELS } from "../data/tracks.js";
import useBookmarks from "../hooks/useBookmarks.js";

export default function ResourceModal({ resource, trackId, trackTitle, stageName, checked, onToggle, onClose }) {
  const [isMaximized, setIsMaximized] = useState(false);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!resource) return null;

  const { title, type, level, links, details } = resource;
  const bookmarkId = trackId ? `course:${trackId}:${title}` : `course:${title}`;
  const isMarked = isBookmarked(bookmarkId);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const mainNote = details
    ? (details.bookNote || details.summary || details.explanation)
    : `أحد المصادر والمراجع المعتمدة لإتقان مهارات ${stageName} في مسار ${trackTitle}، ويغطي الجوانب الفنية والتطبيقية لموضوع ${title}.`;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className={`modal-content ${isMaximized ? "is-maximized" : ""}`}>
        <header className="modal-header">
          <div className="modal-header-info">
            <span className="modal-breadcrumb">
              {trackTitle} &lrm;← {stageName}
            </span>
            <h2 className="modal-title">{title}</h2>
            <div className="modal-tags">
              <span className="tag">{type}</span>
              <span className={`tag ${level === "a" ? "warn" : ""}`}>{LEVELS[level]}</span>
              {checked && <span className="tag ok-tag">✓ تم إنجازه</span>}
            </div>
          </div>
          <div className="modal-header-actions">
            <button
              className={`modal-icon-btn ${isMarked ? "active" : ""}`}
              onClick={() =>
                toggleBookmark({
                  id: bookmarkId,
                  type: "course",
                  title: title,
                  subtitle: trackTitle
                    ? `${trackTitle} • ${LEVELS[level] || type}`
                    : LEVELS[level] || type,
                  link: trackId
                    ? `/tracks/${trackId}?course=${encodeURIComponent(title)}`
                    : "/tracks",
                  badge: `📚 ${type || "كورس"}`,
                })
              }
              aria-label={isMarked ? "إزالة من المحفوظات" : "حفظ في المفضلة"}
              title={isMarked ? "إزالة من المحفوظات" : "حفظ في المفضلة"}
              style={{
                color: isMarked ? "#d97706" : "var(--mut)",
                background: isMarked ? "rgba(245, 158, 11, 0.15)" : undefined,
                fontSize: "1.1rem",
              }}
            >
              {isMarked ? "★" : "☆"}
            </button>
            <button
              className="modal-icon-btn modal-max-btn"
              onClick={() => setIsMaximized((prev) => !prev)}
              aria-label={isMaximized ? "استعادة الحجم الطبيعي" : "تكبير ملء الشاشة"}
              title={isMaximized ? "استعادة الحجم الطبيعي" : "تكبير ملء الشاشة"}
            >
              {isMaximized ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6m-6 12h6v-6M9 21H3v-6M9 3H3v6M21 3l-7 7M3 21l7-7"/>
                </svg>
              )}
            </button>
            <button className="modal-icon-btn modal-close-btn" onClick={onClose} aria-label="إغلاق النافذة" title="إغلاق">
              ✕
            </button>
          </div>
        </header>

        <div className="modal-body">
          {/* نبذة وشرح المحتوى */}
          {mainNote && (
            <div className="modal-book-note">
              <div className="book-note-header">
                <span className="book-note-icon">💡</span>
                <strong className="book-note-title">عن هذا المحتوى:</strong>
              </div>
              <p className="book-note-text">{mainNote}</p>
            </div>
          )}

          {details && (
            <div className="details-container">
              {/* المقارنات الهندسية */}
              {details.comparison && Array.isArray(details.comparison.items) && (
                <div className="modal-section modal-comparison-section">
                  <h4>{details.comparison.title || "مقارنة تفصيلية"}</h4>
                  <div className="modal-compare-grid">
                    {details.comparison.items.map((item, cIdx) => (
                      <div key={cIdx} className="modal-compare-card">
                        <h5>{item.name}</h5>
                        {item.tagline && <span className="item-tagline">{item.tagline}</span>}
                        <p>{item.desc}</p>
                        {Array.isArray(item.points) && (
                          <ul>
                            {item.points.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* الأقسام التفصيلية والمحاور عند الحاجة */}
              {Array.isArray(details.sections) && details.sections.map((sec, idx) => (
                <div key={idx} className="modal-section">
                  <h4>{sec.title}</h4>
                  {sec.text && <p className="sec-text">{sec.text}</p>}
                  {Array.isArray(sec.points) && (
                    <ul className="sec-points">
                      {sec.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          {typeof pt === "string" ? pt : (
                            <>
                              <strong>{pt.label}: </strong>
                              <span>{pt.desc}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* نصيحة المذاكرة والتطبيق */}
              {details.tips && (
                <div className="modal-tips">
                  <strong>💡 نصيحة وتطبيق عملي: </strong>
                  <span>{details.tips}</span>
                </div>
              )}
            </div>
          )}

          {/* روابط التحميل والمشاهدة */}
          {links && links.length > 0 && (
            <div className="modal-links-section">
              <h3>الروابط والمصادر المباشرة ({links.length})</h3>
              <div className="modal-action-links">
                {links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link-btn"
                  >
                    <span>{l.label}</span>
                    <span className="btn-icon">↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <footer className="modal-footer">
          <label className="modal-chk-label">
            <input
              type="checkbox"
              checked={checked}
              onChange={onToggle}
            />
            <span>وضع علامة كمكتمل ({checked ? "تم الإنجاز ✓" : "قيد الدراسة"})</span>
          </label>
          <button className="btn modal-footer-btn" onClick={onClose}>
            إغلاق
          </button>
        </footer>
      </div>
    </div>
  );
}
