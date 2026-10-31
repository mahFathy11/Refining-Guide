import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { companies, applySteps, emailTemplate, coverLetterTemplate } from "../data/companies.js";
import { COMPANY_ZONES, getCompanyZone, getZoneLabel } from "../utils/companyZones.js";
import useBookmarks from "../hooks/useBookmarks.js";
import useSEO from "../hooks/useSEO.js";
import CompanyModal from "../components/CompanyModal.jsx";

const SECTOR_FILTERS = [
  { id: "all", label: "جميع الشركات" },
  { id: "refining", label: "تكرير وتصنيع البترول" },
  { id: "petrochem", label: "بتروكيماويات وأسمدة" },
  { id: "gas", label: "معالجة وإسالة الغاز" },
  { id: "epc", label: "تصميم واستشارات وهندسة" },
  { id: "upstream", label: "إنتاج ومعالجة الحقول" },
  { id: "multinational", label: "شركات عالمية وخدمات حفر" },
];

export default function CompaniesPage() {
  useSEO({
    title: "دليل شركات ومصافي التكرير والبتروكيماويات (73 شركة)",
    description: "دليل استرشادي شامل لشركات ومصافي تكرير البترول والبتروكيماويات والغاز والتصميم والإنتاج في مصر مع بوابات التوظيف الرسمية والوحدات الإنتاجية.",
  });

  const [searchParams] = useSearchParams();
  const [q, setQ] = useState(() => searchParams.get("q") || "");
  const [activeSector, setActiveSector] = useState("all");
  const [activeZone, setActiveZone] = useState("all");
  const [onlyEmail, setOnlyEmail] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState("email"); // "email" | "coverLetter"
  const [copied, setCopied] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  useEffect(() => {
    const urlQ = searchParams.get("q");
    if (urlQ !== null) {
      setQ(urlQ);
    }
  }, [searchParams]);

  const filteredCompanies = useMemo(() => {
    return companies.filter((c) => {
      const matchQuery =
        !q.trim() ||
        c.name.toLowerCase().includes(q.trim().toLowerCase()) ||
        (c.nameEn && c.nameEn.toLowerCase().includes(q.trim().toLowerCase())) ||
        (c.address && c.address.toLowerCase().includes(q.trim().toLowerCase())) ||
        (c.produces && c.produces.toLowerCase().includes(q.trim().toLowerCase())) ||
        (c.activity && c.activity.toLowerCase().includes(q.trim().toLowerCase()));

      const matchSector = activeSector === "all" || c.category === activeSector;
      const matchZone = activeZone === "all" || getCompanyZone(c) === activeZone;
      const matchEmail = !onlyEmail || Boolean(c.email);

      return matchQuery && matchSector && matchZone && matchEmail;
    });
  }, [q, activeSector, activeZone, onlyEmail]);

  const currentTpl = activeTemplate === "email" ? emailTemplate : coverLetterTemplate;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(currentTpl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="companies-page">
      <header className="companies-header page-hero-banner">
        <div className="page-hero-badge">
          <span className="page-badge-dot"></span>
          <span>🏭 قطاع البترول والتكرير والطاقة بمصر</span>
        </div>
        <h1>دليل الشركات والمصانع</h1>
        <p className="lead">
          بيانات التواصل، عناوين المقرات، وأنشطة شركات التكرير والبتروكيماويات والغاز وتصميم المشروعات (EPC) بمصر.
        </p>
      </header>

      {/* قسم خطوات التقديم */}
      <section className="companies-guide-box">
        <h2>📌 خطوات التقديم</h2>
        <ol className="steps">
          {applySteps.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>

        <div className="template-box">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", marginBottom: "12px" }}>
            <h3 style={{ margin: 0 }}>نماذج التقديم</h3>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                type="button"
                className={`filter-btn ${activeTemplate === "email" ? "active" : ""}`}
                style={{ padding: "6px 14px", fontSize: "0.88rem", borderRadius: "8px" }}
                onClick={() => setActiveTemplate("email")}
              >
                📧 إيميل التقديم
              </button>
              <button
                type="button"
                className={`filter-btn ${activeTemplate === "coverLetter" ? "active" : ""}`}
                style={{ padding: "6px 14px", fontSize: "0.88rem", borderRadius: "8px" }}
                onClick={() => setActiveTemplate("coverLetter")}
              >
                📝 خطاب التقديم
              </button>
            </div>
          </div>

          <div style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "10px", lineHeight: "1.6" }}>
            {activeTemplate === "email" ? (
              <span>💡 عنوان الإيميل المقترح: <code>Ahmed Ali - Process Engineer Application - ChE Graduate</code></span>
            ) : (
              <span>💡 خصص اسم الشركة والمشروع التدريبي في الخطاب قبل الإرسال.</span>
            )}
          </div>

          <pre className="tpl" dir="ltr" style={{ maxHeight: "320px", overflowY: "auto" }}>
            {currentTpl}
          </pre>
          <button className="btn btn-copy-tpl" onClick={copy}>
            {copied ? "✓ تم نسخ القالب إلى الحافظة" : `نسخ ${activeTemplate === "email" ? "قالب الإيميل" : "خطاب التقديم"} 📋`}
          </button>
        </div>
      </section>

      {/* كارت ملخص توظيف إيبروم لحديثي التخرج (بعد نماذج التقديم والإيميل) */}
      <section className="eprom-mini-card" aria-label="فرصة توظيف إيبروم لحديثي التخرج">
        <div className="eprom-card-top">
          <div className="eprom-card-title-group">
            <span className="eprom-card-icon">🏭</span>
            <div>
              <h3>إيبروم (EPROM) • فتح باب التوظيف لحديثي التخرج</h3>
              <p className="eprom-def">
                <strong>التعريف:</strong> الشركة المصرية لتشغيل وصيانة المشروعات البترولية (المشغّل لمصافي ميدور، المصرية للتكرير ERC، إيلاب، وأسبك).
              </p>
            </div>
          </div>
          <span className="eprom-years-pill">دفعات: 2024 • 2025 • 2026</span>
        </div>

        <div className="eprom-card-grid">
          {/* خطوات التقديم */}
          <div className="eprom-grid-col">
            <span className="col-label">📋 خطوات التقديم:</span>
            <ol className="eprom-mini-steps">
              <li>عمل حساب على الموقع الرسمي (Sign Up).</li>
              <li>الدخول على <strong>Job Vacancies</strong> واختيار <strong>Fresh graduate</strong>.</li>
              <li>ملء البيانات وإرفاق السيرة الذاتية (CV).</li>
            </ol>
          </div>

          {/* نصائح حاسمة */}
          <div className="eprom-grid-col eprom-caution-col">
            <span className="col-label">⚠️ نصائح حاسمة (الجيش والبروسيس):</span>
            <ul className="eprom-mini-tips">
              <li>
                <strong>لمن ليس لديه تجنيد:</strong> قدّم فوراً واسعَ بمسارات أخرى بالتوازي لأن إجراءات الشركة تطول (عدة أشهر).
              </li>
              <li>
                <strong>أصحاب التجنيد (تجنب الـ Blacklist):</strong> لا تقدّم إلا إذا كان متبقياً <strong>6 أشهر فقط</strong> على إنهائك للخدمة، حتى لا تُدرج في القائمة السوداء إذا تم قبولك واعتذرت بسبب الجيش.
              </li>
            </ul>
          </div>
        </div>

        <div className="eprom-card-footer">
          <a
            href="https://eprom.com.eg/careers/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-eprom-mini-apply"
          >
            <span>بوابة التقديم الرسمية (eprom.com.eg/careers) ↗</span>
          </a>
          <button
            type="button"
            className="btn-eprom-mini-view"
            onClick={() => {
              const epromComp = companies.find((c) => c.id === "eprom");
              if (epromComp) setSelectedCompany(epromComp);
            }}
          >
            <span>عرض تفاصيل الشركة 🏢</span>
          </button>
        </div>
      </section>

      {/* شريط الفلاتر والبحث */}
      <section className="companies-filter-section">
        <div className="companies-search-bar">
          <input
            type="search"
            placeholder="ابحث باسم الشركة (عربي / إنجليزي) أو المدينة أو النشاط..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <div className="filter-checkboxes-row">
            <label className="chk">
              <input
                type="checkbox"
                checked={onlyEmail}
                onChange={(e) => setOnlyEmail(e.target.checked)}
              />
              <span>التي يتوفر لها بريد إلكتروني فقط</span>
            </label>
          </div>
        </div>

        <div className="filter-section-label">
          <span>🏭 تصنيف قطاع النشاط:</span>
        </div>
        <div className="sector-tabs">
          {SECTOR_FILTERS.map((s) => (
            <button
              key={s.id}
              className={`sector-tab-btn ${activeSector === s.id ? "active" : ""}`}
              onClick={() => setActiveSector(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="zone-tabs-wrapper">
          <div className="filter-section-label">
            <span>📍 التوزيع الجغرافي والمنطقة الصناعية:</span>
          </div>
          <div className="zone-tabs">
            {COMPANY_ZONES.map((z) => (
              <button
                key={z.id}
                type="button"
                className={`zone-tab-btn ${activeZone === z.id ? "active" : ""}`}
                onClick={() => setActiveZone(z.id)}
              >
                <span>{z.icon}</span>
                <span>{z.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="companies-count-bar">
          <span>
            عرض <strong>{filteredCompanies.length}</strong> شركة ومنشأة صناعية
          </span>
          <span className="click-hint">💡 اضغط على أي كارت لعرض تفاصيل الشركة الكاملة وبيانات التواصل</span>
        </div>
      </section>

      {/* شبكة كروت الشركات */}
      {filteredCompanies.length === 0 ? (
        <div className="no-companies-found">
          <p>لم يتم العثور على شركات تطابق البحث. جرّب إزالة الفلاتر أو البحث بكلمة أخرى.</p>
        </div>
      ) : (
        <div className="companies-cards-grid">
          {filteredCompanies.map((c) => (
            <div
              key={c.id}
              className="company-card"
              onClick={() => setSelectedCompany(c)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedCompany(c);
                }
              }}
            >
              <div className="company-card-header">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", gap: "8px" }}>
                  <div className="company-header-badges">
                    <span className="company-sector-badge">{c.sector}</span>
                    <span className="company-zone-badge">📍 {getZoneLabel(getCompanyZone(c))}</span>
                    {c.isHiringNow && (
                      <span
                        className="tag"
                        style={{
                          background: "rgba(245, 158, 11, 0.18)",
                          color: "#d97706",
                          border: "1px solid rgba(245, 158, 11, 0.4)",
                          fontSize: "0.72rem",
                          padding: "2px 7px",
                          fontWeight: 700,
                        }}
                        title="متاح حالياً تقديم لحديثي التخرج (2024-2026)"
                      >
                        🔥 تقديم متاح (2024-2026)
                      </span>
                    )}
                    {(c.documents?.length > 0 || c.profileUrl) && (
                      <span
                        className="tag"
                        style={{
                          background: "rgba(16, 185, 129, 0.15)",
                          color: "#34d399",
                          border: "1px solid rgba(16, 185, 129, 0.3)",
                          fontSize: "0.72rem",
                          padding: "2px 7px",
                          fontWeight: 600,
                        }}
                        title="يحتوي على ملفات رسمية وتقارير تدريب وسابقة أعمال"
                      >
                        📄 {c.documents?.length > 1 ? `${c.documents.length} ملفات رسمية` : "بروفايل رسمي"}
                      </span>
                    )}
                  </div>

                  {/* زر حفظ الشركة في المفضلة */}
                  <button
                    type="button"
                    className={`card-bookmark-btn ${isBookmarked(`company:${c.id}`) ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark({
                        id: `company:${c.id}`,
                        type: "company",
                        title: c.name,
                        subtitle: `${c.sector} • ${getZoneLabel(getCompanyZone(c))}`,
                        link: `/companies?q=${encodeURIComponent(c.name)}`,
                        badge: "🏢 شركة",
                      });
                    }}
                    title={isBookmarked(`company:${c.id}`) ? "إزالة من المحفوظات" : "حفظ في المفضلة"}
                    aria-label="حفظ في المفضلة"
                  >
                    {isBookmarked(`company:${c.id}`) ? "★" : "☆"}
                  </button>
                </div>

                <div className="company-titles">
                  <h3 className="company-card-name">{c.name}</h3>
                </div>
              </div>

              <p className="company-card-desc">{c.produces || c.activity}</p>

              <div className="company-card-footer">
                <span className="company-card-type" title={c.type}>
                  🏛️ {c.type}
                </span>
                <span className="company-card-action">
                  <span>عرض التفاصيل والتواصل</span>
                  <span className="btn-arrow">←</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* النافذة المنبثقة لتفاصيل الشركة */}
      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
}
