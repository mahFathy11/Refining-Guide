import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { scholarships, scholarshipGuides, scholarshipNotice, scholarshipPrompts } from "../data/scholarships.js";
import useBookmarks from "../hooks/useBookmarks.js";
import useSEO from "../hooks/useSEO.js";
import "../styles/scholarships.css";

export default function ScholarshipsPage() {
  useSEO({
    title: "دليل المنح الدراسية والأكاديمية العالمية",
    description: "أقوى المنح الدراسية والماجستير والدكتوراه الممولة بالكامل لمهندسي الكيمياء والمواد وتكرير البترول مع شروط القبول ومواعيد التقديم.",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedPromptId, setCopiedPromptId] = useState(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  // استخراج الفئات المتاحة
  const categories = useMemo(() => {
    const cats = new Set(scholarships.map((s) => s.category).filter(Boolean));
    return ["all", ...Array.from(cats)];
  }, []);

  // تصفية المنح بحسب البحث والمنطقة
  const filteredScholarships = useMemo(() => {
    return scholarships.filter((s) => {
      const matchesCategory = selectedCategory === "all" || s.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q) ||
        s.university.toLowerCase().includes(q) ||
        s.program.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopyPrompt = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => {
      setCopiedPromptId(null);
    }, 2000);
  };

  return (
    <div className="scholarships-page">
      <Link to="/" className="back">← العودة للرئيسية</Link>

      <header className="scholarships-header page-hero-banner">
        <div className="page-hero-badge">
          <span className="page-badge-dot"></span>
          <span>🎓 آفاق التعليم العالي والبحث العلمي</span>
        </div>
        <h1>دليل المنح الدراسية العالمية والدراسات العليا</h1>
        <p className="lead">
          أفضل الوجهات والمنح الحكومية والأكاديمية الممولة بالكامل (ماجستير ودكتوراه وبكالوريوس) وتأشيرات البحث عن عمل لمهندسي الكيمياء وتكرير البترول والمواد وتخصصات الـ STEM.
        </p>
      </header>

      {/* بنر بلايليست إرشادات التقديم على المنح والدراسة بالخارج */}
      <section className="sch-playlist-hero-banner">
        <div className="sch-hero-media">
          <div className="sch-hero-iframe-wrap">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLC4LFcwOQGSEp6GEB8MJzmbxA1crwvqPP"
              title="دليل وإرشادات التقديم على المنح والدراسة والتدريب بالخارج - د. محمد عبد الفتاح"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="sch-hero-content">
          <div className="sch-hero-badge-group">
            <span className="tag ok">🎬 كورس وقائمة فيديو متكاملة</span>
            <span className="tag warn">دليل شامل خطوة بخطوة</span>
            <span className="tag" style={{ background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8" }}>
              👨‍🏫 د. محمد عبد الفتاح
            </span>
          </div>
          <h2>دليل وإرشادات التقديم على المنح والدراسة والتدريب بالخارج</h2>
          <p>
            سلسلة إرشادية عملية تشرح بالتفصيل كل ما تحتاجه للتقديم على المنح الدولية: اختيار المسار الأكاديمي، استراتيجيات البحث عن فرص الماجستير والدكتوراه ووظائف الـ RA، أسرار مراسلة الأساتذة (Cold-Emailing) لضمان الرد، صياغة السيرة الذاتية وخطابات الدافع (SOP)، والتحضير للمقابلات.
          </p>
          <div className="sch-hero-actions">
            <a
              href="https://youtube.com/playlist?list=PLC4LFcwOQGSEp6GEB8MJzmbxA1crwvqPP"
              target="_blank"
              rel="noopener noreferrer"
              className="sch-btn-primary"
            >
              مشاهدة القائمة كاملة على يوتيوب ↗
            </a>
            <a
              href="https://www.youtube.com/@MoAbdalfttah"
              target="_blank"
              rel="noopener noreferrer"
              className="lk"
              style={{ padding: "10px 18px", borderRadius: "8px", fontSize: "0.9rem" }}
            >
              قناة د. محمد عبد الفتاح 📺
            </a>
          </div>
        </div>
      </section>

      {/* تنبيه مراجعة الشروط والمصدر الرسمي */}
      <div className="scholarship-review-alert" style={{
        background: "rgba(245, 158, 11, 0.08)",
        border: "1px solid rgba(245, 158, 11, 0.3)",
        borderRadius: "10px",
        padding: "14px 18px",
        marginBottom: "20px",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        lineHeight: "1.6"
      }}>
        <span style={{ fontSize: "1.4rem" }}>⚠️</span>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
            <strong style={{ color: "#f59e0b" }}>تنبيه بخصوص شروط القبول والمواعيد:</strong>
            <span style={{ fontSize: "0.8rem", background: "rgba(245, 158, 11, 0.2)", color: "#f59e0b", padding: "2px 8px", borderRadius: "12px", fontWeight: "600" }}>
              آخر مراجعة للبيانات: {scholarshipNotice.lastReviewed}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary, #cbd5e1)" }}>
            {scholarshipNotice.text}
          </p>
        </div>
      </div>

      {/* أدوات البحث والتصفية بحسب المنطقة */}
      <div className="sch-filter-controls">
        <div className="sch-search-wrapper">
          <input
            type="text"
            className="sch-search-input"
            placeholder="ابحث باسم المنحة، الدولة (أمريكا، بريطانيا، ألمانيا...)، أو الجامعة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="sch-search-icon">🔍</span>
        </div>

        <div className="sch-region-chips">
          <button
            className={`sch-chip-btn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            🌐 جميع المنح ({scholarships.length})
          </button>
          {categories.filter((c) => c !== "all").map((cat) => (
            <button
              key={cat}
              className={`sch-chip-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat} ({scholarships.filter((s) => s.category === cat).length})
            </button>
          ))}
        </div>
      </div>

      {/* رسالة عند عدم وجود نتائج */}
      {filteredScholarships.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px", background: "var(--card)", borderRadius: "12px", border: "1px dashed var(--line)", margin: "20px 0" }}>
          <p style={{ margin: 0, color: "var(--mut)", fontSize: "1rem" }}>
            لا توجد منح تطابق بحثك "{searchQuery}". جرّب البحث بكلمة أخرى أو تصفح كافة المنح.
          </p>
        </div>
      )}

      {/* قائمة كروت المنح الدراسية */}
      <div className="scholarships-list">
        {filteredScholarships.map((sch) => (
          <section key={sch.id} id={sch.id} className="scholarship-card-hero">
            <div className="sch-top-bar">
              <div className="sch-badge-group">
                <span className="tag ok">⭐ {sch.coverage}</span>
                <span className="tag warn">{sch.badge}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="meta">{sch.university}</span>
                <button
                  type="button"
                  className={`card-bookmark-btn ${isBookmarked(`sch:${sch.id}`) ? "active" : ""}`}
                  onClick={() =>
                    toggleBookmark({
                      id: `sch:${sch.id}`,
                      type: "scholarship",
                      title: sch.title,
                      subtitle: `${sch.country} • ${sch.university}`,
                      link: `/scholarships#${sch.id}`,
                      badge: "🎓 منحة دراسية",
                    })
                  }
                  title={isBookmarked(`sch:${sch.id}`) ? "إزالة من المحفوظات" : "حفظ في المفضلة"}
                  aria-label="حفظ في المفضلة"
                >
                  {isBookmarked(`sch:${sch.id}`) ? "★" : "☆"}
                </button>
              </div>
            </div>

            <div className="sch-title-block">
              <h2>{sch.title}</h2>
              <div className="sch-program">{sch.program}</div>
            </div>

            <p className="sch-overview">{sch.overview}</p>

            {/* صندوق المواعيد والجدول الزمني السنوي للتقديم */}
            {sch.dates && (
              <div className="sch-dates-box">
                <div className="sch-dates-header">
                  <h3>🗓️ مواعيد الدورة التقديمية والجدول الزمني السنوي</h3>
                  <span className="tag warn" style={{ fontSize: "0.8rem" }}>مواعيد دورية سنوية</span>
                </div>

                <div className="sch-dates-pills">
                  <div className="sch-date-pill">
                    <span className="sch-date-pill-label">🚀 فتح باب التقديم</span>
                    <span className="sch-date-pill-val">{sch.dates.opening}</span>
                  </div>
                  <div className="sch-date-pill deadline">
                    <span className="sch-date-pill-label">⏳ الموعد النهائي (Deadline)</span>
                    <span className="sch-date-pill-val">{sch.dates.deadline}</span>
                  </div>
                  <div className="sch-date-pill">
                    <span className="sch-date-pill-label">✈️ موعد السفر وبدء الدراسة</span>
                    <span className="sch-date-pill-val">{sch.dates.departure}</span>
                  </div>
                </div>

                {sch.timeline && sch.timeline.length > 0 && (
                  <div className="sch-timeline-list">
                    {sch.timeline.map((step, idx) => (
                      <div key={idx} className="sch-timeline-item">
                        <span className="sch-timeline-bullet">{idx + 1}</span>
                        <div>
                          <span className="sch-timeline-stage">{step.stage}:</span>
                          <span className="sch-timeline-time">{step.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* المسارات المتاحة ضمن المنحة */}
            {sch.tracks && sch.tracks.length > 0 && (
              <div className="sch-tracks-section">
                <h3>📂 المسارات والمنح المتاحة ضمن البرنامج:</h3>
                <div className="sch-tracks-grid">
                  {sch.tracks.map((tr, idx) => (
                    <div key={idx} className="sch-track-card">
                      <h4>{tr.name}</h4>
                      <p>{tr.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* بنر فيديو الشرح إن وجد */}
            {sch.video && (
              <div className="sch-video-banner">
                <div className="sch-video-info">
                  <span className="sch-video-icon">🎥</span>
                  <div>
                    <strong>فيديو الشرح والتجربة الشخصية</strong>
                    <div className="meta">{sch.video.title}</div>
                  </div>
                </div>
                <a
                  href={sch.video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sch-video-btn"
                >
                  مشاهدة الشرح على يوتيوب ↗
                </a>
              </div>
            )}

            {/* بنر دليل التقديم الإضافي إن وجد */}
            {sch.applicationGuide && (
              <div className="sch-video-banner" style={{ background: "color-mix(in srgb, #0ea5e9 6%, var(--card))", borderColor: "color-mix(in srgb, #0ea5e9 20%, transparent)" }}>
                <div className="sch-video-info">
                  <span className="sch-video-icon">🖥️</span>
                  <div>
                    <strong>دليل التقديم الإلكتروني</strong>
                    <div className="meta">{sch.applicationGuide.title}</div>
                  </div>
                </div>
                <a
                  href={sch.applicationGuide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sch-video-btn"
                  style={{ background: "#0284c7" }}
                >
                  مشاهدة دليل التقديم ↗
                </a>
              </div>
            )}

            {/* المزايا والمتطلبات */}
            <div className="sch-grid-details">
              <div className="sch-detail-box">
                <h3>🎁 المزايا والتمويل الممنوح</h3>
                <ul className="sch-list">
                  {sch.benefits.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="sch-detail-box">
                <h3>📋 شروط ومتطلبات القبول</h3>
                <ul className="sch-list">
                  {sch.requirements.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* نصائح التقديم والقبول */}
            <div className="sch-tips-box">
              <h3>💡 نصائح وتوجيهات عملية لزيادة فرص القبول</h3>
              <ul className="sch-list">
                {sch.tips.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            </div>

            {/* روابط سريعة للتقديم */}
            <div className="sch-actions">
              <a
                href={sch.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sch-btn-primary"
              >
                بوابة التقديم الرسمية للمنحة 🌐
              </a>
              {sch.video && (
                <a
                  href={sch.video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lk"
                  style={{ padding: "10px 18px", fontSize: "0.92rem", borderRadius: "8px" }}
                >
                  مشاهدة فيديو الشرح 🎬
                </a>
              )}
              {sch.recommendationFormUrl && (
                <a
                  href={sch.recommendationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lk"
                  style={{ padding: "10px 18px", fontSize: "0.92rem", borderRadius: "8px" }}
                >
                  تحميل نموذج خطاب التوصية (PDF) 📄
                </a>
              )}
              {sch.personalStatementVideosUrl && (
                <a
                  href={sch.personalStatementVideosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lk"
                  style={{ padding: "10px 18px", fontSize: "0.92rem", borderRadius: "8px" }}
                >
                  فيديوهات كتابة الـ Personal Statement 🎥
                </a>
              )}
              {sch.contactEmail && (
                <a
                  href={`mailto:${sch.contactEmail}`}
                  className="lk"
                  style={{ padding: "10px 18px", fontSize: "0.92rem", borderRadius: "8px" }}
                  title={sch.officeHours ? `مواعيد العمل: ${sch.officeHours}` : undefined}
                >
                  مراسلة مكتب المنحة ({sch.contactEmail}) ✉️
                </a>
              )}
            </div>
            {sch.officeHours && (
              <div style={{ marginTop: "10px", fontSize: "0.82rem", color: "var(--mut)" }}>
                🕒 <strong>مواعيد التواصل والعمل:</strong> {sch.officeHours}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* قسم قوالب البرومت الاحترافية للبحث والتقديم بالذكاء الاصطناعي */}
      <section className="sch-prompts-section">
        <div className="sch-prompts-header">
          <h2>🤖 قوالب برومت الذكاء الاصطناعي للتقديم والبحث عن المنح</h2>
          <p>
            استخدم هذه القوالب الجاهزة مع أي أداة ذكاء اصطناعي (مثل ChatGPT أو Claude أو Gemini)؛ فقط انسخ البرومت وعدّل الحقول بين القوسين [ ] ببياناتك الشخصية الحقيقية للحصول على نتائج دقيقة وتجهيز مستنداتك باحترافية.
          </p>
        </div>

        <div className="sch-prompts-grid">
          {scholarshipPrompts.map((p) => {
            const isCopied = copiedPromptId === p.id;
            return (
              <div key={p.id} className="sch-prompt-card">
                <div className="sch-prompt-top">
                  <h3>{p.title}</h3>
                  <span className="tag ok" style={{ fontSize: "0.8rem" }}>{p.badge}</span>
                </div>
                <div className="sch-prompt-target">🎯 الهدف: {p.target}</div>
                <div className="sch-prompt-body">
                  <pre className="sch-prompt-text">{p.prompt}</pre>
                </div>
                <div className="sch-prompt-actions">
                  <button
                    className={`sch-copy-btn ${isCopied ? "copied" : ""}`}
                    onClick={() => handleCopyPrompt(p.id, p.prompt)}
                  >
                    {isCopied ? "تم النسخ بنجاح! ✅" : "نسخ البرومت 📋"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* قسم إرشادات كتابة الأوراق الأكاديمية */}
      <section className="scholarship-guides-section">
        <h2>📑 إرشادات التقديم الأكاديمي للمنح الدولية</h2>
        <div className="guides-grid">
          {scholarshipGuides.map((g, idx) => (
            <div key={idx} className="guide-card">
              <h3>{g.title}</h3>
              <ul className="sch-list">
                {g.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
