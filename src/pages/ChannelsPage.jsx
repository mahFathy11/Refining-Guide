import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { channels, channelCategories } from "../data/channels.js";
import useSEO from "../hooks/useSEO.js";
import "../styles/channels.css";

export default function ChannelsPage() {
  useSEO({
    title: "أفضل قنوات يوتيوب للمهندس الكيميائي",
    description: "قائمة منتقاة لأفضل القنوات التعليمية والمهنية على يوتيوب المتخصصة في هندسة التكرير، العمليات، المحاكاة، والسلامة الصناعية.",
  });

  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(() => searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null && q !== undefined) {
      setSearchTerm(q);
    }
  }, [searchParams]);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredChannels = useMemo(() => {
    return channels.filter((ch) => {
      const matchesCategory =
        selectedCategory === "all" || ch.category === selectedCategory;

      const q = searchTerm.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        (ch.name && ch.name.toLowerCase().includes(q)) ||
        (ch.arabicName && ch.arabicName.toLowerCase().includes(q)) ||
        (ch.badge && ch.badge.toLowerCase().includes(q)) ||
        (Array.isArray(ch.topics) &&
          ch.topics.some((t) => typeof t === "string" && t.toLowerCase().includes(q)));

      return matchesCategory && matchesQuery;
    });
  }, [searchTerm, selectedCategory]);

  const totalCourses = useMemo(() => {
    return channels.reduce((sum, ch) => sum + (ch.coursesCount || 1), 0);
  }, []);

  return (
    <div className="channels-page">
      <Link to="/" className="back">
        ← العودة للرئيسية
      </Link>

      <header className="channels-header page-hero-banner">
        <div className="page-hero-badge">
          <span className="page-badge-dot"></span>
          <span>📺 الشبكات والمنصات التعليمية المعتمدة</span>
        </div>
        <h1>قنوات يوتيوب والمحاضرات الهندسية</h1>
        <p className="lead">
          دليل القنوات والمحاضرات الهندسية والشروحات العملية المستعان بها في مسارات المشروع لتعلم الهندسة الكيميائية والتكرير.
        </p>
      </header>

      {/* شريط الإحصائيات السريعة */}
      <section className="channels-stats-bar">
        <div className="channel-stat-card">
          <div className="stat-icon-wrap">🎥</div>
          <div className="stat-info">
            <span className="stat-number">{channels.length}</span>
            <span className="stat-label">قناة ومحاضر معتمد</span>
          </div>
        </div>

        <div className="channel-stat-card">
          <div className="stat-icon-wrap">📚</div>
          <div className="stat-info">
            <span className="stat-number">{totalCourses}+</span>
            <span className="stat-label">سلسلة ومحاضرة في المشروع</span>
          </div>
        </div>

        <div className="channel-stat-card">
          <div className="stat-icon-wrap">🎯</div>
          <div className="stat-info">
            <span className="stat-number">{channelCategories.length - 1}</span>
            <span className="stat-label">مجالات وتخصصات هندسية</span>
          </div>
        </div>
      </section>

      {/* شريط الفلاتر والبحث */}
      <section className="channels-filter-card">
        <div className="channels-search-row">
          <input
            type="search"
            placeholder="ابحث بالاسم، القناة، أو موضوع الكورس (مثال: غاز، P&ID، مضخات، سارة زيدان)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="channels-search-input"
          />
        </div>

        <div className="channels-category-pills">
          {channelCategories.map((cat) => (
            <button
              key={cat.id}
              className={`category-pill-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ملخص النتائج */}
      <div className="channels-results-summary">
        <span>
          عرض <strong>{filteredChannels.length}</strong> من أصل{" "}
          <strong>{channels.length}</strong> قناة ومحاضر
        </span>
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            style={{
              background: "none",
              border: "none",
              color: "var(--ac)",
              cursor: "pointer",
              fontSize: "0.85rem",
              textDecoration: "underline",
            }}
          >
            مسح البحث
          </button>
        )}
      </div>

      {/* شبكة كروت القنوات */}
      {filteredChannels.length > 0 ? (
        <div className="channels-grid">
          {filteredChannels.map((ch) => {
            const isExpanded = expandedCards[ch.id];
            const visibleTopics = isExpanded
              ? ch.topics
              : ch.topics.slice(0, 3);
            const hasMoreTopics = ch.topics.length > 3;

            return (
              <div key={ch.id} className="channel-card">
                <div>
                  <div className="channel-card-header">
                    <div className="channel-avatar">{ch.avatarIcon}</div>
                    <div className="channel-header-text">
                      <h3 className="channel-name-ar">{ch.arabicName}</h3>
                      <p className="channel-name-en">{ch.name}</p>
                    </div>
                  </div>

                  <div className="channel-badges-row">
                    <span className="ch-badge featured">{ch.featuredBadge}</span>
                    <span className="ch-badge tag">{ch.badge}</span>
                  </div>

                  {ch.topics && ch.topics.length > 0 && (
                    <div className="channel-topics-box">
                      <div className="topics-box-title">
                        <span>أهم السلاسل والموضوعات المغطاة:</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--mut)" }}>
                          ({ch.topics.length})
                        </span>
                      </div>
                      <ul className="channel-topics-list">
                        {visibleTopics.map((topic, idx) => (
                          <li key={idx}>{topic}</li>
                        ))}
                      </ul>
                      {hasMoreTopics && (
                        <button
                          type="button"
                          className="topics-more-btn"
                          onClick={() => toggleExpand(ch.id)}
                        >
                          {isExpanded
                            ? "▲ عرض أقل"
                            : `▼ عرض المزيد (+${ch.topics.length - 3})`}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div style={{ marginTop: "16px" }}>
                  <a
                    href={ch.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-action-btn"
                  >
                    <span className="yt-play-icon">▶</span>
                    <span>{ch.primaryLinkText || "مشاهدة المحتوى على YouTube"}</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="channels-empty-state">
          <div className="empty-icon">🔍</div>
          <h3>لم يتم العثور على قنوات مطابقة لبحثك</h3>
          <p>جرب البحث بكلمات مختلفة أو اختر تصنيفاً آخر من القائمة بالأعلى.</p>
          <button
            className="btn-reset-filter"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      )}
    </div>
  );
}
