import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { tracks } from "../data/tracks.js";
import { trackPriorityMatrix, trackSoftwareStack } from "../data/trackEngineeringData.js";
import ResourceItem from "../components/ResourceItem.jsx";
import ResourceModal from "../components/ResourceModal.jsx";
import useProgress, { resourceKey, trackCount } from "../hooks/useProgress.js";
import useSEO from "../hooks/useSEO.js";

const FILTERS = [["all", "الكل"], ["b", "مبتدئ"], ["i", "متوسط"], ["a", "متقدم"]];

function normalizeStr(str = "") {
  return String(str)
    .toLowerCase()
    .replace(/[أإآءئ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[\u064B-\u065F]/g, "")
    .trim();
}

export default function TrackDetail() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const track = tracks.find((t) => t.id === id);

  useSEO({
    title: track ? track.title : "تفاصيل المسار",
    description: track ? `${track.title} - ${track.desc}` : "تفاصيل وخارطة طريق المسار الهندسي",
  });

  const { done, toggle } = useProgress();
  const [level, setLevel] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showPriority, setShowPriority] = useState(true);
  const [showSoftware, setShowSoftware] = useState(true);

  const priorityData = track ? trackPriorityMatrix[track.id] : null;
  const softwareData = track ? trackSoftwareStack[track.id] : null;

  const targetCourse = searchParams.get("course");
  const autoOpen = searchParams.get("open") !== "0";

  // تفعيل الانتقال التلقائي لمكان الكورس وفتحه عند القدوم من محرك البحث
  useEffect(() => {
    if (!targetCourse || !track) return;

    let foundResource = null;
    let foundStageName = "";
    const targetNorm = normalizeStr(targetCourse);

    for (let i = 0; i < track.stages.length; i++) {
      const s = track.stages[i];
      const match = s.resources.find((r) => {
        const rNorm = normalizeStr(r.title);
        return (
          r.title === targetCourse ||
          rNorm === targetNorm ||
          rNorm.includes(targetNorm) ||
          targetNorm.includes(rNorm)
        );
      });
      if (match) {
        foundResource = match;
        foundStageName = `المرحلة ${i + 1}: ${s.name}`;
        break;
      }
    }

    if (foundResource) {
      // 1. ضمان ظهور الكورس بغض النظر عن فلتر المستوى
      setLevel("all");

      // 2. فتح النافذة المنبثقة للتفاصيل مباشرة إذا كان autoOpen مفعل
      if (autoOpen) {
        setSelectedItem({ resource: foundResource, stageName: foundStageName });
      }

      // 3. التمرير السلس نحو الكارت في الصفحة مع وميض تمييز واضح
      const scrollToCard = () => {
        let el = document.getElementById(`res-${encodeURIComponent(foundResource.title)}`);
        if (!el) {
          try {
            el = document.querySelector(`[data-resource-title="${CSS.escape(foundResource.title)}"]`);
          } catch {
            // fallback
          }
        }
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("highlight-pulse");
          setTimeout(() => el.classList.remove("highlight-pulse"), 4500);
          return true;
        }
        return false;
      };

      const timer1 = setTimeout(scrollToCard, 200);
      const timer2 = setTimeout(scrollToCard, 500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [targetCourse, track, autoOpen]);

  const handleCloseModal = () => {
    setSelectedItem(null);
    if (searchParams.has("course")) {
      const next = new URLSearchParams(searchParams);
      next.delete("course");
      next.delete("open");
      setSearchParams(next, { replace: true });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 260);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!track) return <p>المسار مش موجود. <Link to="/tracks">ارجع للمسارات</Link></p>;
  const p = trackCount(track, done);

  return (
    <>
      <Link to="/tracks" className="back">← كل المسارات</Link>
      <header className="track-detail-hero page-hero-banner">
        <div className="page-hero-badge">
          <span className="page-badge-dot"></span>
          <span>🎯 مسار تخصصي متكامل</span>
        </div>
        <h1>{track.title}</h1>
        <p className="track-hero-desc">{track.desc}</p>
        <div className="track-hero-meta">
          <span className="track-meta-pill">📊 تقدمك: <strong>{p.done}</strong> من <strong>{p.total}</strong> خطوة مكتملة</span>
        </div>
      </header>

      {/* تنبيه مسار قيد التطوير بدون روابط مباشرة */}
      {track.underDevelopment && (
        <div className="track-dev-banner" role="status">
          <span className="track-dev-banner-icon">🚧</span>
          <div className="track-dev-banner-body">
            <strong>مسار قيد التطوير والإعداد</strong>
            <p>
              يقدم هذا المسار حالياً خارطة المفاهيم الأساسية، المعايير القياسية العالمية (مثل ASTM و ISO 17025 و DOE)، مصفوفة الأولويات الهندسية وحزم البرمجيات لتوجيهك بما تتطلبه الوظيفة في الواقع العملي. المسار لا يحتوي على روابط مباشرة للمصادر حالياً، وجارٍ استكمال وإضافة موارده التعليمية تدريجياً.
            </p>
          </div>
        </div>
      )}

      {/* فقرة تعريفية شاملة بالتراك: ماذا يدرس وماذا يعمل */}
      {track.about && (
        <section className="track-overview-card" aria-label="دليل التراك ومجالات العمل">
          <div className="track-overview-header">
            <span className="overview-badge">
              <span className="overview-badge-dot"></span>
              دليل التراك والمسار المهني
            </span>
            <h3 className="track-overview-title">ماذا يدرس وماذا يعمل مهندس هذا التراك؟</h3>
          </div>

          <div className="track-overview-grid">
            <div className="overview-box study-box">
              <div className="overview-box-header">
                <span className="box-icon" aria-hidden="true">📚</span>
                <div>
                  <h4>ماذا يدرس في هذا التراك؟</h4>
                  <span className="box-subtitle">المقررات، المفاهيم الهندسية، والحسابات والبرمجيات</span>
                </div>
              </div>
              {Array.isArray(track.about.study) ? (
                <ul className="overview-bullets-list">
                  {track.about.study.map((item, idx) => (
                    <li key={idx} className="overview-bullet-item">
                      <span className="bullet-dot" aria-hidden="true">🔹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="box-content">{track.about.study}</p>
              )}
            </div>

            <div className="overview-box work-box">
              <div className="overview-box-header">
                <span className="box-icon" aria-hidden="true">💼</span>
                <div>
                  <h4>ماذا يعمل وما هي مسؤولياته؟</h4>
                  <span className="box-subtitle">المسمى الوظيفي، المهام اليومية، وطبيعة العمل</span>
                </div>
              </div>
              {Array.isArray(track.about.work) ? (
                <ul className="overview-bullets-list">
                  {track.about.work.map((item, idx) => (
                    <li key={idx} className="overview-bullet-item">
                      <span className="bullet-dot" aria-hidden="true">🔹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="box-content">{track.about.work}</p>
              )}
            </div>
          </div>

          {track.about.workplaces && (
            <div className="overview-workplaces">
              <span className="workplaces-icon" aria-hidden="true">🏢</span>
              <div className="workplaces-content">
                <strong className="workplaces-label">أبرز مجالات وجهات العمل والشركات المستهدفة:</strong>
                <p className="workplaces-text">{track.about.workplaces}</p>
              </div>
            </div>
          )}
        </section>
      )}

      {/* مصفوفة أولويات التعلم (Priority Matrix) */}
      {priorityData && (
        <section className="track-engineering-card track-priority-card" aria-label="مصفوفة أولويات التعلم">
          <div className="track-eng-card-header">
            <div className="track-eng-title-group">
              <span className="eng-badge priority-badge">
                <span className="eng-badge-dot red-dot"></span>
                دليل المقابلات وأولويات التوظيف
              </span>
              <h3 className="track-eng-title">🎯 مصفوفة أولويات التعلم (Priority Matrix)</h3>
              <p className="track-eng-desc">
                مرتبة حسب أولويات القبول في المقابلات وسوق العمل؛ ركّز على ما تحتاجه للتوظيف المباشر أولاً وتجنب التشتت.
              </p>
            </div>
            <button
              type="button"
              className="btn-toggle-eng-card"
              onClick={() => setShowPriority((prev) => !prev)}
              aria-expanded={showPriority}
            >
              {showPriority ? "طي المصفوفة ▴" : "عرض مصفوفة الأولويات ▾"}
            </button>
          </div>

          {showPriority && (
            <div className="priority-columns-grid">
              {/* يجب تعلمه (أحمر) */}
              <div className="priority-col must-col">
                <div className="priority-col-header">
                  <div className="priority-col-tag must-tag">
                    <span className="priority-dot"></span>
                    <span>🔴 يجب تعلمه (Must Learn)</span>
                  </div>
                  <span className="priority-col-hint">الأساسيات الإلزامية للقبول في المقابلات والتوظيف الفوري كجونيور</span>
                </div>
                <ul className="priority-items-list">
                  {priorityData.must.map((item, idx) => (
                    <li key={idx} className="priority-item-chip must-chip">
                      <span className="item-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* يُفضّل تعلمه (برتقالي) */}
              <div className="priority-col should-col">
                <div className="priority-col-header">
                  <div className="priority-col-tag should-tag">
                    <span className="priority-dot"></span>
                    <span>🟠 يُفضّل تعلمه (Should Learn)</span>
                  </div>
                  <span className="priority-col-hint">مهارات نوعية تمنحك ميزة تنافسية وترفع راتبك وتصنيفك</span>
                </div>
                <ul className="priority-items-list">
                  {priorityData.should.map((item, idx) => (
                    <li key={idx} className="priority-item-chip should-chip">
                      <span className="item-icon">★</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* يُؤجّل لاحقاً (أزرق) */}
              <div className="priority-col deferred-col">
                <div className="priority-col-header">
                  <div className="priority-col-tag deferred-tag">
                    <span className="priority-dot"></span>
                    <span>🔵 يُؤجّل لاحقاً (Can Wait)</span>
                  </div>
                  <span className="priority-col-hint">مفاهيم متقدمة وخبرات ميدانية تُكتسب بالتدرج مع سنين الخبرة بالمصنع</span>
                </div>
                <ul className="priority-items-list">
                  {priorityData.deferred.map((item, idx) => (
                    <li key={idx} className="priority-item-chip deferred-chip">
                      <span className="item-icon">⏳</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      )}

      {/* حزمة البرمجيات الهندسية المعتمدة (Software Stack) */}
      {softwareData && (
        <section className="track-engineering-card track-software-card" aria-label="حزمة البرمجيات الهندسية المعتمدة">
          <div className="track-eng-card-header">
            <div className="track-eng-title-group">
              <span className="eng-badge software-badge">
                <span className="eng-badge-dot blue-dot"></span>
                الأدوات الرقمية لقطاع البترول
              </span>
              <h3 className="track-eng-title">💻 حزمة البرمجيات الهندسية المعتمدة (Software Stack)</h3>
              <p className="track-eng-desc">
                البرمجيات والأدوات الرقمية المعتمدة فعلياً في شركات التصميم (EPC) ومصافي التكرير ومجمعات الغاز والبتروكيماويات.
              </p>
            </div>
            <button
              type="button"
              className="btn-toggle-eng-card"
              onClick={() => setShowSoftware((prev) => !prev)}
              aria-expanded={showSoftware}
            >
              {showSoftware ? "طي البرمجيات ▴" : "عرض حزمة البرمجيات ▾"}
            </button>
          </div>

          {showSoftware && (
            <div className="software-tiers-grid">
              {/* برامج أساسية للمبتدئ */}
              <div className="software-tier-card core-tier">
                <div className="tier-header">
                  <span className="tier-badge core-badge">🟢 أساسية للمبتدئ (Core / Entry-level)</span>
                  <span className="tier-desc">أدوات العمل اليومي التي لا غنى عنها في المقابلات واختبارات القبول</span>
                </div>
                <div className="software-items-wrapper">
                  {softwareData.core.map((sw, idx) => (
                    <div key={idx} className="software-item-box">
                      <div className="software-name-row">
                        <span className="sw-icon">💻</span>
                        <strong className="sw-name">{sw.name}</strong>
                      </div>
                      <p className="sw-role">{sw.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* برامج إضافية ومفيدة */}
              <div className="software-tier-card helpful-tier">
                <div className="tier-header">
                  <span className="tier-badge helpful-badge">🟡 إضافية ومفيدة (Helpful / Intermediate)</span>
                  <span className="tier-desc">أدوات توسع نطاق تحليلك الهندسي وترفع كفاءتك في العمل المكتبي والميداني</span>
                </div>
                <div className="software-items-wrapper">
                  {softwareData.helpful.map((sw, idx) => (
                    <div key={idx} className="software-item-box">
                      <div className="software-name-row">
                        <span className="sw-icon">⚡</span>
                        <strong className="sw-name">{sw.name}</strong>
                      </div>
                      <p className="sw-role">{sw.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* برامج متخصصة ومتقدمة */}
              <div className="software-tier-card advanced-tier">
                <div className="tier-header">
                  <span className="tier-badge advanced-badge">🟣 متخصصة ومتقدمة (Advanced / Specialized)</span>
                  <span className="tier-desc">برمجيات استشارية وحسابات معقدة تستخدم في المشاريع الكبرى والديناميكية</span>
                </div>
                <div className="software-items-wrapper">
                  {softwareData.advanced.map((sw, idx) => (
                    <div key={idx} className="software-item-box">
                      <div className="software-name-row">
                        <span className="sw-icon">🚀</span>
                        <strong className="sw-name">{sw.name}</strong>
                      </div>
                      <p className="sw-role">{sw.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      <div className="filters">
        {FILTERS.map(([v, label]) => (
          <button key={v} className={level === v ? "on" : ""} onClick={() => setLevel(v)}>{label}</button>
        ))}
      </div>

      {track.stages.map((s, i) => {
        const list = s.resources.filter((r) => level === "all" || r.level === level);
        if (!list.length) return null;
        return (
          <section key={s.name}>
            <h2>المرحلة {i + 1}: {s.name}</h2>
            {list.map((r) => {
              const k = resourceKey(track.id, r.title);
              return (
                <ResourceItem
                  key={k}
                  resource={r}
                  trackId={track.id}
                  trackTitle={track.title}
                  checked={!!done[k]}
                  onToggle={() => toggle(k)}
                  onSelect={() => setSelectedItem({ resource: r, stageName: `المرحلة ${i + 1}: ${s.name}` })}
                />
              );
            })}
          </section>
        );
      })}

      {selectedItem && (
        <ResourceModal
          resource={selectedItem.resource}
          trackId={track.id}
          trackTitle={track.title}
          stageName={selectedItem.stageName}
          checked={!!done[resourceKey(track.id, selectedItem.resource.title)]}
          onToggle={() => toggle(resourceKey(track.id, selectedItem.resource.title))}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
