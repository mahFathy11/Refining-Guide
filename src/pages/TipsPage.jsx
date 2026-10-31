import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackLinks } from "../data/links.js";
import InterviewStagesTree from "../components/InterviewStagesTree.jsx";
import useBookmarks from "../hooks/useBookmarks.js";
import useSEO from "../hooks/useSEO.js";
import "../styles/interview.css";

const TIPS_SECTIONS = [
  { id: "interview-tree", label: "شجرة مراحل الإنترفيو", icon: "🌳" },
  { id: "major-references", label: "المراجع الفنية الكبرى", icon: "📘" },
  { id: "question-banks", label: "بنوك ومراجعات الأسئلة", icon: "⚡" },
  { id: "video-guides", label: "فيديوهات التوجيه", icon: "🎬" },
  { id: "engineering-rules", label: "القواعد الذهبية", icon: "📐" },
  { id: "career-cv", label: "مجالات العمل والـ CV", icon: "💼" },
];

export default function TipsPage() {
  useSEO({
    title: "الخلاصة والنصائح وأسرار المقابلات الفنية",
    description: "الدليل الشامل للتحضير للمقابلات الفنية، ملف الزتونة، بنوك الأسئلة، مراجع تصميم العمليات، وقواعد كتابة السيرة الذاتية لمهندسي البترول والكيمياء.",
  });

  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [activeSec, setActiveSec] = useState("interview-tree");

  // تتبع السكشن النشط أثناء التمرير
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = TIPS_SECTIONS.length - 1; i >= 0; i--) {
        const sec = TIPS_SECTIONS[i];
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSec(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSec(id);
    }
  };

  return (
    <div className="tips-page">
      <Link to="/" className="back">← العودة للرئيسية</Link>

      <header className="tips-header page-hero-banner">
        <div className="page-hero-badge">
          <span className="page-badge-dot"></span>
          <span>⚡ بنك أسئلة وتجهيز المقابلات الفنية</span>
        </div>
        <h1>الخلاصة والنصائح الهندسية</h1>
        <p className="lead">
          مراحل المقابلات وملفات المراجعة الفنية للإنترفيو لمهندسي العمليات والإنتاج.
        </p>
      </header>

      {/* شريط التنقل السريع المثبت بين أقسام الصفحة */}
      <nav className="tips-sticky-nav" aria-label="أقسام صفحة النصائح">
        <div className="tips-sticky-scroll">
          {TIPS_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              className={`tips-nav-pill ${activeSec === sec.id ? "active" : ""}`}
              onClick={() => scrollToSection(sec.id)}
            >
              <span>{sec.icon}</span>
              <span>{sec.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* 1. شجرة مراحل المقابلات الشخصية الكاملة */}
      <div id="interview-tree" style={{ scrollMarginTop: "120px" }}>
        <InterviewStagesTree />
      </div>

      {/* 2. قسم المراجع الفنية الكبرى */}
      <div id="major-references" style={{ scrollMarginTop: "120px" }}>
        <div className="tips-grid-section-header">
          <h3>
            <span>📘</span> المراجع والكتب الفنية الكبرى
          </h3>
          <span style={{ fontSize: "0.82rem", color: "var(--mut)", fontWeight: 600 }}>
            4 مراجع تطبيقية رئيسية
          </span>
        </div>

        {/* مرجع 1: ملف الزتونة الأهم */}
        <section className="tips-feature-box">
          <div className="feature-box-header">
            <div className="feature-icon">⚡</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                <div>
                  <h2>ملف الزتونة الشامل: Technical Interview Preparation</h2>
                  <p className="feature-sub">الملف الأهم للتحضير الفني السريع قبل المقابلات</p>
                </div>
                <button
                  type="button"
                  className={`card-bookmark-btn ${isBookmarked("ref:zatona_prep") ? "active" : ""}`}
                  onClick={() =>
                    toggleBookmark({
                      id: "ref:zatona_prep",
                      type: "reference",
                      title: "ملف الزتونة الشامل: Technical Interview Preparation",
                      subtitle: "الملف الأهم للتحضير الفني السريع",
                      link: trackLinks.career.stageOne.interviewPrepBook,
                      badge: "📘 مرجع رئيسي",
                    })
                  }
                  title={isBookmarked("ref:zatona_prep") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                  aria-label="حفظ في المفضلة"
                >
                  {isBookmarked("ref:zatona_prep") ? "★" : "☆"}
                </button>
              </div>
            </div>
          </div>

          <p className="feature-desc">
            ملخص للقوانين والمفاهيم والأسئلة الشائعة في مقابلات مهندسي العمليات:
          </p>

          <div className="topics-grid">
            <div className="topic-card">
              <h4>⚛️ Thermodynamics</h4>
              <p>قوانين الديناميكا، معادلات الحالة (EOS)، توازن الأطوار (VLE)، ومعاملات النشاط.</p>
            </div>
            <div className="topic-card">
              <h4>💧 Fluid Mechanics</h4>
              <p>معادلة برنولي، حسابات فقد الضغط، أنواع المضخات، ظاهرة التكهف، وشرط NPSHa &gt; NPSHr.</p>
            </div>
            <div className="topic-card">
              <h4>🔥 Heat Transfer</h4>
              <p>آليات انتقال الحرارة، تصميم المبادلات Shell &amp; Tube، حساب الـ LMTD والـ Overall U.</p>
            </div>
            <div className="topic-card">
              <h4>⚗️ Mass Transfer &amp; Separation</h4>
              <p>أبراج التقطير، طريقة McCabe-Thiele، نسبة الراجع (Reflux Ratio)، والامتصاص.</p>
            </div>
          </div>

          <div className="feature-action">
            <a
              href={trackLinks.career.stageOne.interviewPrepBook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-large"
            >
              <span>📥 تحميل ملف الزتونة الشامل (PDF)</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>
        </section>

        {/* مرجع 2: مرجع الأسئلة الفنية والمقابلات - م. مسعد داود (جابكو) */}
        <section className="tips-feature-box">
          <div className="feature-box-header">
            <div className="feature-icon">📘</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                <div>
                  <h2>مرجع الأسئلة الفنية: Technical Questions [Oil &amp; Gas - Chemical]</h2>
                  <p className="feature-sub">إعداد: م. مسعد مسعد داود (Process Engineer at Gulf Of Suez Petroleum Co. - GUPCO)</p>
                </div>
                <button
                  type="button"
                  className={`card-bookmark-btn ${isBookmarked("ref:dawood") ? "active" : ""}`}
                  onClick={() =>
                    toggleBookmark({
                      id: "ref:dawood",
                      type: "reference",
                      title: "مرجع Technical Questions (م. مسعد داود - جابكو)",
                      subtitle: "9 فصول شاملة للأسئلة الفنية ومعدات البترول",
                      link: trackLinks.career.stageOne.technicalQuestionsDawood,
                      badge: "📘 مرجع رئيسي",
                    })
                  }
                  title={isBookmarked("ref:dawood") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                  aria-label="حفظ في المفضلة"
                >
                  {isBookmarked("ref:dawood") ? "★" : "☆"}
                </button>
              </div>
            </div>
          </div>

          <p className="feature-desc">
            مرجع تطبيقي شامل ومفصل أعده المهندس مسعد داود (مهندس عمليات بشركة بترول خليج السويس - جابكو)؛ يجمع خلاصة المقابلات الفنية والمفاهيم الهندسية الأساسية عبر 9 فصول شاملة:
          </p>

          <div className="topics-grid">
            <div className="topic-card">
              <h4>📄 Chapter 1 &amp; 2</h4>
              <p><strong>CV &amp; Interview:</strong> خطوات إعداد السيرة الذاتية الهندسية ومراحل مقابلات العمل الفنية.</p>
            </div>
            <div className="topic-card">
              <h4>⚛️ Chapter 3</h4>
              <p><strong>Academic Subjects:</strong> ملخص انتقال الحرارة، الثرموديناميكا، ميكانيكا الموائع، قوانين الغازات، وأجهزة القياس.</p>
            </div>
            <div className="topic-card">
              <h4>🏭 Chapter 4</h4>
              <p><strong>Plant Equipment:</strong> فحص شامل للمعدات الثابتة (الفواصل، الخزانات، أبراج التقطير) والدوارة (المضخات، الضواغط) والمبادلات والمفاعلات.</p>
            </div>
            <div className="topic-card">
              <h4>📏 Chapter 5 &amp; 6</h4>
              <p><strong>Units &amp; Abbreviations:</strong> وحدات القياس الصناعية والتحويلات وأهم الاختصارات الهندسية في الشركات.</p>
            </div>
            <div className="topic-card">
              <h4>📖 Chapter 7</h4>
              <p><strong>Important Definitions:</strong> أهم المصطلحات والتعريفات التشغيلية التي تتكرر في مقابلات العمل.</p>
            </div>
            <div className="topic-card">
              <h4>🎯 Chapter 8 &amp; 9</h4>
              <p><strong>MCQs &amp; Companies:</strong> بنك أسئلة اختيار من متعدد للمراجعة، ودليل مواقع التوظيف وإيميلات شركات البترول.</p>
            </div>
          </div>

          <div className="feature-action">
            <a
              href={trackLinks.career.stageOne.technicalQuestionsDawood}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-large"
            >
              <span>📥 تحميل مرجع Technical Questions (م. مسعد داود) PDF</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>
        </section>

        {/* مرجع 3: ملف زتونة الهندسة الكيميائية - Zatona of Chemical Engineering */}
        <section className="tips-feature-box">
          <div className="feature-box-header">
            <div className="feature-icon">🫒</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                <div>
                  <h2>ملف Zatona of Chemical Engineering (زتونة الهندسة الكيميائية)</h2>
                  <p className="feature-sub">ملخص عملي مركز للمفاهيم الهندسية وبنك أسئلة إنترفيو شامل في نهاية كل باب</p>
                </div>
                <button
                  type="button"
                  className={`card-bookmark-btn ${isBookmarked("ref:zatona_cheme") ? "active" : ""}`}
                  onClick={() =>
                    toggleBookmark({
                      id: "ref:zatona_cheme",
                      type: "reference",
                      title: "ملف Zatona of Chemical Engineering",
                      subtitle: "ملخص مركز وبنك أسئلة لكل قسم",
                      link: trackLinks.career.stageOne.zatonaCheme,
                      badge: "📘 مرجع رئيسي",
                    })
                  }
                  title={isBookmarked("ref:zatona_cheme") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                  aria-label="حفظ في المفضلة"
                >
                  {isBookmarked("ref:zatona_cheme") ? "★" : "☆"}
                </button>
              </div>
            </div>
          </div>

          <p className="feature-desc">
            مرجع تجميعي تطبيقي ومكثف يغطي أبواب الهندسة الكيميائية وتكرير البترول والمعدات والتآكل، ومزود بأسئلة مقابلات العمل الفنية (Interview Questions) لكل قسم:
          </p>

          <div className="topics-grid">
            <div className="topic-card">
              <h4>⚗️ 1. Mass Separation</h4>
              <p><strong>الفصل والتقطير:</strong> مكونات وأبراج التقطير، الصواني والـ Reflux، مشاكل التقطير، زتونة الفصل، وأسئلة المقابلات.</p>
            </div>
            <div className="topic-card">
              <h4>🛢️ 2. Petroleum Refining</h4>
              <p><strong>تكرير النفط:</strong> خصائص الخام والـ API، مخطط سريان المصفاة (Flow Sheet)، المنتجات والعمليات وأسئلة المقابلات.</p>
            </div>
            <div className="topic-card">
              <h4>⛽ 3. Natural Gas</h4>
              <p><strong>الغاز الطبيعي:</strong> أهداف معالجة الغاز ومحطات المعالجة وتكنولوجيا تسييل الغاز الطبيعي (LNG).</p>
            </div>
            <div className="topic-card">
              <h4>🌀 5. Pumps</h4>
              <p><strong>المضخات:</strong> أنواع الطلمبات، معايير الاختيار، ظاهرة التكهف (Cavitation)، معادلة برنولي، ومنحنيات الأداء وأسئلة المقابلات.</p>
            </div>
            <div className="topic-card">
              <h4>🔧 6 &amp; 7. Valves &amp; Heat</h4>
              <p><strong>المحابس وانتقال الحرارة:</strong> أنواع الصمامات واستخداماتها، المبادلات الحرارية، والأفران (Fired Heaters) وكفاءتها وأسئلة المقابلات.</p>
            </div>
            <div className="topic-card">
              <h4>🛡️ 8. Corrosion</h4>
              <p><strong>هندسة التآكل:</strong> أنواع التآكل (الجلفاني، الإجهادي، والتنقر Pitting)، الهشاشة الهيدروجينية، وطرق الحماية المهبطية.</p>
            </div>
          </div>

          <div className="feature-action">
            <a
              href={trackLinks.career.stageOne.zatonaCheme}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-large"
            >
              <span>📥 تحميل ملف Zatona of Chemical Engineering (PDF)</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>
        </section>

        {/* مرجع 4: مرجع Job Preparation - م. إبراهيم فريد السيد (Enppi) */}
        <section className="tips-feature-box">
          <div className="feature-box-header">
            <div className="feature-icon">🛠️</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                <div>
                  <h2>مرجع Job Preparation: أسئلة ومعدات التشغيل (م. إبراهيم فريد السيد)</h2>
                  <p className="feature-sub">
                    إعداد: م. إبراهيم فريد السيد (Process Pre-commissioning and Commissioning Engineer at Enppi)
                  </p>
                </div>
                <button
                  type="button"
                  className={`card-bookmark-btn ${isBookmarked("ref:job_prep_ibrahim") ? "active" : ""}`}
                  onClick={() =>
                    toggleBookmark({
                      id: "ref:job_prep_ibrahim",
                      type: "reference",
                      title: "مرجع Job Preparation (م. إبراهيم فريد - Enppi)",
                      subtitle: "22 محوراً جوهرياً لأسئلة التشغيل والتصميم والتجارب",
                      link: trackLinks.career.stageOne.jobPreparationIbrahim,
                      badge: "📘 مرجع رئيسي",
                    })
                  }
                  title={isBookmarked("ref:job_prep_ibrahim") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                  aria-label="حفظ في المفضلة"
                >
                  {isBookmarked("ref:job_prep_ibrahim") ? "★" : "☆"}
                </button>
              </div>
            </div>
          </div>

          <p className="feature-desc">
            مرجع عملي وميداني فائق القيمة أعده مهندس تجارب التشغيل والعمليات بشركة إنبي (Enppi)؛ يغطي 22 محوراً جوهرياً تمثل صلب أسئلة المقابلات الفنية لمهندسي التشغيل والتصميم وتجارب التشغيل (Pre-commissioning &amp; Commissioning):
          </p>

          <div className="topics-grid">
            <div className="topic-card">
              <h4>🚰 1. Valves &amp; Protection</h4>
              <p><strong>المحابس وصمامات الأمان:</strong> Control Valves، Block &amp; Bleed، الفرق بين PSV و PRV، ومبدأ عمل الـ Breather Valve.</p>
            </div>
            <div className="topic-card">
              <h4>🌀 2. Rotating Equipment</h4>
              <p><strong>المعدات الدوارة:</strong> أنواع المضخات ومنحنيات الأداء (Performance Curves)، خطوات تركيب المضخات، وأنواع الضواغط والتوربينات البخارية.</p>
            </div>
            <div className="topic-card">
              <h4>🔥 3. Heat &amp; Steam Systems</h4>
              <p><strong>انتقال الحرارة والبخار:</strong> أبراج التبريد، غلايات الـ Kettle Reboilers، مبادلات الصفائح، ومولدات استرجاع حرارة البخار (HRSG).</p>
            </div>
            <div className="topic-card">
              <h4>📋 4. Piping, Tanks &amp; P&amp;ID</h4>
              <p><strong>الأنابيب ومخططات العمليات:</strong> أنواع الفلانشات وواقيات الفلانشات، تتبع الحرارة للأنابيب (Heat Tracing)، خزانات Run Down، ومصطلحات P&amp;ID.</p>
            </div>
          </div>

          <div className="feature-action">
            <a
              href={trackLinks.career.stageOne.jobPreparationIbrahim}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-large"
            >
              <span>📥 تحميل مرجع Job Preparation (م. إبراهيم فريد - Enppi) PDF</span>
              <span className="btn-arrow">↗</span>
            </a>
          </div>
        </section>
      </div>

      {/* 3. بنوك ومراجعات الأسئلة الفنية السريعة */}
      <div id="question-banks" style={{ scrollMarginTop: "120px" }}>
        <div className="tips-grid-section-header">
          <h3>
            <span>⚡</span> بنوك ومراجعات الأسئلة الفنية للإنترفيو
          </h3>
          <span style={{ fontSize: "0.82rem", color: "var(--mut)", fontWeight: 600 }}>
            3 مراجع سريعة وبنوك أسئلة
          </span>
        </div>

        <section className="tips-cards-grid">
          {/* كارت مراجعة تكرير البترول لأحمد يحيى */}
          <div className="quick-card">
            <div className="quick-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="quick-card-tag file-tag">📑 تكرير وتصنيع البترول</span>
                <span className="quick-card-icon">📑</span>
              </div>
              <button
                type="button"
                className={`card-bookmark-btn ${isBookmarked("card:yehia_refining") ? "active" : ""}`}
                onClick={() =>
                  toggleBookmark({
                    id: "card:yehia_refining",
                    type: "tip",
                    title: "مراجعة أسئلة تكرير البترول (م. أحمد يحيى)",
                    subtitle: "أسئلة مقابلات مصافي التكرير وCDU وVDU",
                    link: trackLinks.career.stageOne.refiningQuestionsYehia,
                    badge: "⚡ بنك أسئلة",
                  })
                }
                title={isBookmarked("card:yehia_refining") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                aria-label="حفظ في المفضلة"
              >
                {isBookmarked("card:yehia_refining") ? "★" : "☆"}
              </button>
            </div>
            <h3 className="quick-card-title">مراجعة أهم الأسئلة في الهندسة الكيميائية وتكرير البترول (م. أحمد يحيى)</h3>
            <p className="quick-card-desc">
              أهم أسئلة مقابلات مصافي التكرير، وحدات الـ CDU و VDU، وهيدروليكا العمليات ومشاكل التشغيل.
            </p>
            <div className="quick-card-actions">
              <a
                href={trackLinks.career.stageOne.refiningQuestionsYehia}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn primary"
              >
                <span>📥 تحميل ملف المراجعة (PDF)</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* كارت أسئلة حديثي التخرج لأحمد الفايد */}
          <div className="quick-card">
            <div className="quick-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="quick-card-tag file-tag">🎓 خريجي الكيمياء والتكرير</span>
                <span className="quick-card-icon">🎯</span>
              </div>
              <button
                type="button"
                className={`card-bookmark-btn ${isBookmarked("card:fayed_graduates") ? "active" : ""}`}
                onClick={() =>
                  toggleBookmark({
                    id: "card:fayed_graduates",
                    type: "tip",
                    title: "Top Interview Questions for ChE Graduates (م. أحمد الفايد)",
                    subtitle: "أسئلة موازين المادة، الطلمبات، والمبادلات",
                    link: trackLinks.career.stageOne.topInterviewGraduatesFayed,
                    badge: "⚡ بنك أسئلة",
                  })
                }
                title={isBookmarked("card:fayed_graduates") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                aria-label="حفظ في المفضلة"
              >
                {isBookmarked("card:fayed_graduates") ? "★" : "☆"}
              </button>
            </div>
            <h3 className="quick-card-title">Top Interview Questions for ChE Graduates (م. أحمد الفايد)</h3>
            <p className="quick-card-desc">
              أهم الأسئلة الفنية لحديثي التخرج في موازين المادة، الطلمبات، المبادلات، وأبراج التقطير.
            </p>
            <div className="quick-card-actions">
              <a
                href={trackLinks.career.stageOne.topInterviewGraduatesFayed}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn primary"
              >
                <span>📥 تحميل أسئلة الخريجين (PDF)</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* كارت 50 سؤال لمهندس العمليات Chemical123 */}
          <div className="quick-card">
            <div className="quick-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="quick-card-tag file-tag">⚡ 50 سؤال لمهندس العمليات</span>
                <span className="quick-card-icon">💡</span>
              </div>
              <button
                type="button"
                className={`card-bookmark-btn ${isBookmarked("card:chem123_50q") ? "active" : ""}`}
                onClick={() =>
                  toggleBookmark({
                    id: "card:chem123_50q",
                    type: "tip",
                    title: "Top 50 Process Engineer Interview Questions (Chemical123)",
                    subtitle: "50 سؤالاً نموذجياً: قراءة P&ID، صمامات الأمان، والتحجيم",
                    link: trackLinks.career.stageOne.top50ProcessQuestions,
                    badge: "⚡ بنك أسئلة",
                  })
                }
                title={isBookmarked("card:chem123_50q") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                aria-label="حفظ في المفضلة"
              >
                {isBookmarked("card:chem123_50q") ? "★" : "☆"}
              </button>
            </div>
            <h3 className="quick-card-title">Top 50 Process Engineer Interview Questions (Chemical123)</h3>
            <p className="quick-card-desc">
              50 سؤالاً نموذجياً بإجاباتها لمهندسي العمليات: قراءة P&amp;ID، صمامات الأمان، والتحجيم السريع.
            </p>
            <div className="quick-card-actions">
              <a
                href={trackLinks.career.stageOne.top50ProcessQuestions}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn primary"
              >
                <span>📥 تحميل بنك الـ 50 سؤالاً (PDF)</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 4. قسم فيديوهات التوجيه والإنترفيو */}
      <div id="video-guides" style={{ scrollMarginTop: "120px" }}>
        <div className="tips-grid-section-header">
          <h3>
            <span>🎬</span> فيديوهات التوجيه وشرح أسئلة الإنترفيو
          </h3>
          <span style={{ fontSize: "0.82rem", color: "var(--mut)", fontWeight: 600 }}>
            سلاسل فيديو موثوقة
          </span>
        </div>

        <section className="tips-cards-grid">
          {/* كارت أسئلة المقابلات الشخصية لسارة زيدان */}
          <div className="quick-card">
            <div className="quick-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="quick-card-tag video-tag">🎙️ أسئلة إنترفيو</span>
                <span className="quick-card-icon">💡</span>
              </div>
              <button
                type="button"
                className={`card-bookmark-btn ${isBookmarked("card:sarah_zidan_interview") ? "active" : ""}`}
                onClick={() =>
                  toggleBookmark({
                    id: "card:sarah_zidan_interview",
                    type: "tip",
                    title: "Interview Questions and Answers (Eng. Sarah Zidan)",
                    subtitle: "شرح مرئي مبسط لأسئلة السريان والضغط والمفاهيم الحرارية",
                    link: trackLinks.career.stageOne.interviewQuestionsSarah,
                    badge: "🎬 فيديو",
                  })
                }
                title={isBookmarked("card:sarah_zidan_interview") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                aria-label="حفظ في المفضلة"
              >
                {isBookmarked("card:sarah_zidan_interview") ? "★" : "☆"}
              </button>
            </div>
            <h3 className="quick-card-title">Interview Questions and Answers (Eng. Sarah Zidan)</h3>
            <p className="quick-card-desc">
              شرح مرئي مبسط لأكثر الأسئلة الفنية تكراراً في السريان والضغط والمفاهيم الحرارية.
            </p>
            <div className="quick-card-actions">
              <a
                href={trackLinks.career.stageOne.interviewQuestionsSarah}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn primary"
              >
                <span>مشاهدة السلسلة على يوتيوب</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* كارت نصائح ما بعد التخرج لأحمد يحيى */}
          <div className="quick-card">
            <div className="quick-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="quick-card-tag video-tag">🎬 فيديو توجيهي</span>
                <span className="quick-card-icon">🎯</span>
              </div>
              <button
                type="button"
                className={`card-bookmark-btn ${isBookmarked("card:yehia_advice") ? "active" : ""}`}
                onClick={() =>
                  toggleBookmark({
                    id: "card:yehia_advice",
                    type: "tip",
                    title: "نصائح ما بعد التخرج (م. أحمد يحيى)",
                    subtitle: "توجيه مهني لبدء المسار والاستعداد للمقابلات",
                    link: trackLinks.ops.stageOne.adviceYehia,
                    badge: "🎬 فيديو",
                  })
                }
                title={isBookmarked("card:yehia_advice") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                aria-label="حفظ في المفضلة"
              >
                {isBookmarked("card:yehia_advice") ? "★" : "☆"}
              </button>
            </div>
            <h3 className="quick-card-title">نصائح ما بعد التخرج (م. أحمد يحيى)</h3>
            <p className="quick-card-desc">
              توجيه مهني لكيفية بدء مسارك بعد التخرج، والاستعداد للمقابلات وتجنب الأخطاء الشائعة.
            </p>
            <div className="quick-card-actions">
              <a
                href={trackLinks.ops.stageOne.adviceYehia}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn primary"
              >
                <span>مشاهدة النصائح على يوتيوب</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 5. قسم القواعد الذهبية وتقديرات العمليات */}
      <div id="engineering-rules" style={{ scrollMarginTop: "120px" }}>
        <div className="tips-grid-section-header">
          <h3>
            <span>📐</span> القواعد الذهبية والتقديرات السريعة
          </h3>
          <span style={{ fontSize: "0.82rem", color: "var(--mut)", fontWeight: 600 }}>
            مرجع القواعد السريعة
          </span>
        </div>

        <section className="tips-cards-grid">
          {/* كارت كتاب القواعد الذهبية */}
          <div className="quick-card">
            <div className="quick-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="quick-card-tag book-tag">📖 أرقام وتقديرات سريعة</span>
                <span className="quick-card-icon">📐</span>
              </div>
              <button
                type="button"
                className={`card-bookmark-btn ${isBookmarked("card:rules_of_thumb") ? "active" : ""}`}
                onClick={() =>
                  toggleBookmark({
                    id: "card:rules_of_thumb",
                    type: "reference",
                    title: "Rules of Thumb for Chemical Engineers",
                    subtitle: "مرجع الأرقام والقواعد لتقدير السرعات والضغوط والأبعاد",
                    link: trackLinks.design.stageThree.rulesOfThumbBook,
                    badge: "📖 كتاب مرجعي",
                  })
                }
                title={isBookmarked("card:rules_of_thumb") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                aria-label="حفظ في المفضلة"
              >
                {isBookmarked("card:rules_of_thumb") ? "★" : "☆"}
              </button>
            </div>
            <h3 className="quick-card-title">Rules of Thumb for Chemical Engineers</h3>
            <p className="quick-card-desc">
              مرجع الأرقام والقواعد لتقدير سرعات السريان وهبوط الضغط وأبعاد المعدات سريعاً.
            </p>
            <div className="quick-card-actions multi">
              <a
                href={trackLinks.design.stageThree.rulesOfThumbBook}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn primary"
              >
                <span>تحميل الكتاب</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a
                href={trackLinks.design.stageThree.gaberRulesOfThumb}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn secondary"
                title="مراجعة د. أحمد جابر لأهمية الكتاب"
              >
                <span>رأي د. جابر</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 6. قسم مجالات العمل والسيرة الذاتية */}
      <div id="career-cv" style={{ scrollMarginTop: "120px" }}>
        <div className="tips-grid-section-header">
          <h3>
            <span>💼</span> مجالات العمل وبناء السيرة الذاتية (CV)
          </h3>
          <span style={{ fontSize: "0.82rem", color: "var(--mut)", fontWeight: 600 }}>
            توجيه مهني واستراتيجيات التقديم
          </span>
        </div>

        <section className="tips-cards-grid">
          {/* كارت مجالات عمل المهندس الكيميائي */}
          <div className="quick-card">
            <div className="quick-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="quick-card-tag map-tag">🧭 خريطة المجالات</span>
                <span className="quick-card-icon">💼</span>
              </div>
              <button
                type="button"
                className={`card-bookmark-btn ${isBookmarked("card:fields_yehia") ? "active" : ""}`}
                onClick={() =>
                  toggleBookmark({
                    id: "card:fields_yehia",
                    type: "tip",
                    title: "مجالات عمل المهندس الكيميائي (م. أحمد يحيى)",
                    subtitle: "دليل استكشافي شامل للمجالات الصناعية",
                    link: trackLinks.career.stageOne.fieldsYehia,
                    badge: "🧭 دليل تخصص",
                  })
                }
                title={isBookmarked("card:fields_yehia") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                aria-label="حفظ في المفضلة"
              >
                {isBookmarked("card:fields_yehia") ? "★" : "☆"}
              </button>
            </div>
            <h3 className="quick-card-title">مجالات عمل المهندس الكيميائي (م. أحمد يحيى)</h3>
            <p className="quick-card-desc">
              دليل استكشافي شامل لمجالات العمل الصناعية لاختيار التخصص الأنسب قبل التقديم.
            </p>
            <div className="quick-card-actions">
              <a
                href={trackLinks.career.stageOne.fieldsYehia}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn primary"
              >
                <span>مشاهدة الفيديو</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* كارت السيرة الذاتية والبحث عن عمل لمحمد أيمن */}
          <div className="quick-card">
            <div className="quick-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="quick-card-tag video-tag">📝 كتابة الـ CV والوظائف</span>
                <span className="quick-card-icon">💼</span>
              </div>
              <button
                type="button"
                className={`card-bookmark-btn ${isBookmarked("card:cv_jobsearch_ayman") ? "active" : ""}`}
                onClick={() =>
                  toggleBookmark({
                    id: "card:cv_jobsearch_ayman",
                    type: "tip",
                    title: "CV Writing & Job Search (م. محمد أيمن)",
                    subtitle: "دليل كتابة سيرة ذاتية متوافقة مع ATS واستراتيجيات التقديم",
                    link: trackLinks.career.stageOne.cvWritingAyman,
                    badge: "📝 سيرة ذاتية",
                  })
                }
                title={isBookmarked("card:cv_jobsearch_ayman") ? "إزالة من المفضلة" : "حفظ في المفضلة"}
                aria-label="حفظ في المفضلة"
              >
                {isBookmarked("card:cv_jobsearch_ayman") ? "★" : "☆"}
              </button>
            </div>
            <h3 className="quick-card-title">CV Writing &amp; Job Search (م. محمد أيمن)</h3>
            <p className="quick-card-desc">
              دليل كتابة سيرة ذاتية متوافقة مع أنظمة الـ ATS واستراتيجيات التقديم للمقابلات.
            </p>
            <div className="quick-card-actions multi">
              <a
                href={trackLinks.career.stageOne.cvWritingAyman}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn primary"
              >
                <span>فيديو الـ CV</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a
                href={trackLinks.career.stageOne.jobSearchAyman}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-action-btn secondary"
              >
                <span>دليل حديثي التخرج</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
