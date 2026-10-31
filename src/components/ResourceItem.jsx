import { LEVELS } from "../data/tracks.js";
import useBookmarks from "../hooks/useBookmarks.js";
import "../styles/links.css";

export default function ResourceItem({
  resource,
  trackId,
  trackTitle,
  checked,
  onToggle,
  onSelect,
}) {
  const { title, type, level, links } = resource;
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const bookmarkId = trackId ? `course:${trackId}:${title}` : `course:${title}`;
  const isMarked = isBookmarked(bookmarkId);

  const handleCardClick = (e) => {
    // If the click is inside a link, checkbox, or bookmark button, let their own handlers work
    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "A" ||
      e.target.closest("a") ||
      e.target.closest(".res-bookmark-btn")
    ) {
      return;
    }
    if (onSelect) {
      onSelect(resource);
    }
  };

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
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
    });
  };

  return (
    <div
      id={`res-${encodeURIComponent(title)}`}
      data-resource-title={title}
      className={`res ${checked ? "is-done" : ""}`}
      onClick={handleCardClick}
      title="اضغط لعرض التفاصيل والشرح في نافذة كبيرة"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        onClick={(e) => e.stopPropagation()}
        aria-label={`تم: ${title}`}
      />
      <div className="res-content">
        <div className="res-top-row">
          <span className="res-title">{title}</span>
        </div>

        {links.length > 0 && (
          <span className="links" onClick={(e) => e.stopPropagation()}>
            {links.map((l, idx) => (
              <a
                key={l.label + idx}
                className="lk"
                href={l.url || "#"}
                target={l.url && l.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (!l.url || l.url === "#") {
                    e.preventDefault();
                    alert("رابط التحميل / المشاهدة قيد التحديث. زوّدنا بالرابط لنضيفه فوراً!");
                  }
                }}
              >
                {l.label}
              </a>
            ))}
          </span>
        )}

        <span className="meta">
          <span className="tag">{type}</span>
          <span className="tag">{LEVELS[level]}</span>
        </span>
      </div>

      {/* زر المفضلة على الشمال */}
      <button
        type="button"
        className={`res-bookmark-btn ${isMarked ? "active" : ""}`}
        onClick={handleBookmarkClick}
        title={isMarked ? "إزالة من المحفوظات" : "حفظ الكورس في المفضلة"}
        aria-label="حفظ في المفضلة"
      >
        {isMarked ? "★" : "☆"}
      </button>
    </div>
  );
}
