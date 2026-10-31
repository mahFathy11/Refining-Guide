import { useEffect, useState } from "react";
import useBookmarks from "../hooks/useBookmarks.js";
import { getCompanyZone, getZoneLabel } from "../utils/companyZones.js";

export default function CompanyModal({ company, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
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

  if (!company) return null;

  const {
    id,
    name,
    nameEn,
    sector,
    type,
    activity,
    produces,
    chEWork,
    address,
    phone,
    fax,
    email,
    website,
    verification,
    linkedin,
    profileUrl,
    profileTitle,
    profileDesc,
    profileSections,
    documents,
    careersUrl,
    hiringNotice,
    isHiringNow,
  } = company;

  const docsList = (documents && documents.length > 0)
    ? documents
    : (profileUrl ? [{
        title: profileTitle || "الملف التعريفي وسابقة الأعمال (Company Profile):",
        url: profileUrl,
        desc: profileDesc || "الملف التعريفي الرسمي الشامل وسابقة المشروعات والخبرات الهندسية.",
        sections: profileSections,
        btnLabel: "📄 بروفايل الشركة",
        icon: "📄",
      }] : []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const copyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const isEmailVerified = verification?.status === "verified";

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className={`modal-content company-modal-content ${isMaximized ? "is-maximized" : ""}`}>
        <header className="modal-header">
          <div className="modal-header-info">
            <span className="modal-breadcrumb">دليل الشركات والمصانع &lrm;← {sector}</span>
            <h2 className="modal-title">{name}</h2>
            {nameEn && <p className="company-modal-en">{nameEn}</p>}
            <div className="modal-tags">
              <span className="tag ok-tag">{sector}</span>
              <span className="tag">📍 {getZoneLabel(getCompanyZone(company))}</span>
              {type && <span className="tag">{type}</span>}
              {docsList.length > 0 && (
                <span className="tag" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                  📄 {docsList.length > 1 ? `${docsList.length} ملفات رسمية وتقارير متاحة` : "بروفايل رسمي متاح"}
                </span>
              )}
            </div>
          </div>
          <div className="modal-header-actions">
            <button
              className={`modal-icon-btn ${isBookmarked(`company:${id}`) ? "active" : ""}`}
              onClick={() => toggleBookmark({
                id: `company:${id}`,
                type: "company",
                title: name,
                subtitle: `${sector} • ${getZoneLabel(getCompanyZone(company))}`,
                link: `/companies?q=${encodeURIComponent(name)}`,
                badge: "🏢 شركة",
              })}
              aria-label={isBookmarked(`company:${id}`) ? "إزالة من المحفوظات" : "حفظ في المفضلة"}
              title={isBookmarked(`company:${id}`) ? "إزالة من المحفوظات" : "حفظ في المفضلة"}
              style={{
                color: isBookmarked(`company:${id}`) ? "#d97706" : "var(--mut)",
                background: isBookmarked(`company:${id}`) ? "rgba(245, 158, 11, 0.15)" : undefined,
                fontSize: "1.1rem",
              }}
            >
              {isBookmarked(`company:${id}`) ? "★" : "☆"}
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

        <div className="modal-body company-modal-body">
          {/* تنبيه وفرصة توظيف حديثي التخرج إن وجدت */}
          {hiringNotice && (
            <div
              className="modal-section company-hiring-box"
              style={{
                background: "color-mix(in srgb, #f59e0b 10%, var(--card))",
                border: "1.5px solid rgba(245, 158, 11, 0.4)",
                padding: "16px 18px",
                borderRadius: "14px",
                marginBottom: "16px",
                boxShadow: "0 4px 16px rgba(245, 158, 11, 0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                <h4 style={{ margin: 0, color: "#d97706", display: "flex", alignItems: "center", gap: "8px", fontSize: "1.08rem" }}>
                  <span>📢</span>
                  <span>{hiringNotice.title}</span>
                </h4>
                {hiringNotice.targetYears && (
                  <span style={{ fontSize: "0.82rem", background: "rgba(245, 158, 11, 0.18)", color: "#92400e", padding: "3px 10px", borderRadius: "8px", fontWeight: "bold" }}>
                    دفعات: {hiringNotice.targetYears}
                  </span>
                )}
              </div>

              {Array.isArray(hiringNotice.steps) && (
                <ol style={{ margin: "0 0 12px 0", paddingRight: "20px", fontSize: "0.92rem", lineHeight: "1.7", color: "var(--ink)" }}>
                  {hiringNotice.steps.map((st, i) => (
                    <li key={i}>{st}</li>
                  ))}
                </ol>
              )}

              {hiringNotice.militaryAdvice && (
                <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.25)", padding: "10px 14px", borderRadius: "10px", color: "var(--ink)", fontSize: "0.88rem", lineHeight: "1.65", marginBottom: "14px" }}>
                  <strong style={{ color: "#dc2626", display: "block", marginBottom: "4px" }}>⚠️ تنبيه الخدمة العسكرية وإجراءات التعيين:</strong>
                  {hiringNotice.militaryAdvice}
                </div>
              )}

              {careersUrl && (
                <a
                  href={careersUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
                    color: "#ffffff",
                    fontWeight: 800,
                    padding: "10px 20px",
                    borderRadius: "10px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 12px rgba(217, 119, 6, 0.28)",
                    textDecoration: "none",
                  }}
                >
                  <span>الدخول لبوابة التوظيف والتقديم الآن ↗</span>
                </a>
              )}
            </div>
          )}
          {/* النشاط والإنتاج الرئيسي */}
          {produces && (
            <div className="modal-section" style={{ background: "rgba(59, 130, 246, 0.08)", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
              <h4 style={{ margin: "0 0 6px 0", color: "#60a5fa" }}>📦 النشاط والإنتاج الرئيسي:</h4>
              <p className="company-detail-text" style={{ margin: 0, fontWeight: 600 }}>{produces}</p>
            </div>
          )}

          {/* الملفات والبروفايلات الرسمية وتقارير التدريب الصيفي */}
          {docsList.length > 0 && (
            <div className="modal-section company-docs-container" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {docsList.map((doc, idx) => (
                <div
                  key={idx}
                  className="company-profile-doc-box"
                  style={{
                    background: "rgba(16, 185, 129, 0.08)",
                    padding: "14px 16px",
                    borderRadius: "10px",
                    border: "1px solid rgba(16, 185, 129, 0.28)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ flex: "1 1 260px" }}>
                      <h4 style={{ margin: "0 0 6px 0", color: "#34d399", display: "flex", alignItems: "center", gap: "8px", fontSize: "1.02rem" }}>
                        <span>{doc.icon || "📄"}</span>
                        <span>{doc.title}</span>
                      </h4>
                      <p className="company-detail-text" style={{ margin: "0 0 8px 0", fontSize: "0.9rem", color: "var(--mut, #94a3b8)", lineHeight: "1.6" }}>
                        {doc.desc}
                      </p>
                    </div>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(16, 185, 129, 0.22)",
                        color: "#34d399",
                        border: "1px solid rgba(16, 185, 129, 0.45)",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span>فتح وتحميل (Google Drive)</span>
                      <span>↗</span>
                    </a>
                  </div>

                  {doc.sections && doc.sections.length > 0 && (
                    <div style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px dashed rgba(16, 185, 129, 0.25)" }}>
                      <strong style={{ display: "block", marginBottom: "6px", fontSize: "0.86rem", color: "#6ee7b7" }}>
                        📋 {doc.sectionsTitle || "فهرس ومحتويات الملف:"}
                      </strong>
                      <ul style={{ margin: 0, paddingRight: "18px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "5px", fontSize: "0.84rem", color: "var(--fg, #e2e8f0)" }}>
                        {doc.sections.map((sec, i) => (
                          <li key={i} style={{ lineHeight: "1.4" }}>{sec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* تفاصيل وطبيعة المنشأة الصناعية ومجمعاتها */}
          {activity && (
            <div className="modal-section">
              <h4>🏭 تفاصيل وطبيعة المنشأة ومجمعاتها:</h4>
              <p className="company-detail-text">{activity}</p>
            </div>
          )}

          {/* دور المهندس الكيميائي في هذه الشركة */}
          {chEWork && (
            <div className="modal-section company-che-box">
              <h4>🧪 ما يعمله المهندس الكيميائي ومهندس العمليات هنا:</h4>
              <p className="company-che-text">{chEWork}</p>
            </div>
          )}

          {/* بيانات التواصل والمقر */}
          <div className="modal-section company-contacts-section">
            <h4>📞 بيانات التواصل والمقر الرسمي</h4>
            <div className="company-contact-grid">
              {address && (
                <div className="contact-item full">
                  <span className="contact-icon">📍</span>
                  <div className="contact-info">
                    <strong>العنوان والمقر:</strong>
                    <span>{address}</span>
                  </div>
                </div>
              )}

              {phone && (
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-info">
                    <strong>الهاتف:</strong>
                    <span dir="ltr">{phone}</span>
                  </div>
                </div>
              )}

              {fax && (
                <div className="contact-item">
                  <span className="contact-icon">📠</span>
                  <div className="contact-info">
                    <strong>الفاكس:</strong>
                    <span dir="ltr">{fax}</span>
                  </div>
                </div>
              )}

              {email && (
                <div className="contact-item full highlight-email">
                  <span className="contact-icon">✉️</span>
                  <div className="contact-info email-info">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <strong>البريد الإلكتروني للتقديم والتواصل:</strong>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <a href={`mailto:${email}`} className="company-email-link" dir="ltr">
                          {email}
                        </a>
                        {isEmailVerified && (
                          <span
                            title="بريد موثق رسميًا ✓"
                            style={{
                              color: "#10b981",
                              fontWeight: "bold",
                              fontSize: "1rem",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              background: "rgba(16, 185, 129, 0.15)",
                              border: "1px solid rgba(16, 185, 129, 0.4)",
                              lineHeight: 1,
                            }}
                          >
                            ✓
                          </span>
                        )}
                      </span>
                    </div>
                    <button className="btn-copy-email" onClick={copyEmail} title="نسخ الإيميل">
                      {copiedEmail ? "✓ تم النسخ" : "نسخ الإيميل 📋"}
                    </button>
                  </div>
                </div>
              )}

              {website && (
                <div className="contact-item full">
                  <span className="contact-icon">🌐</span>
                  <div className="contact-info website-info">
                    <strong>الموقع الإلكتروني الرسمي:</strong>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-web-link"
                      dir="ltr"
                    >
                      <span>{website}</span>
                      <span className="link-arrow">↗</span>
                    </a>
                  </div>
                </div>
              )}

              {careersUrl && (
                <div className="contact-item full highlight-careers" style={{ background: "rgba(245, 158, 11, 0.08)", borderColor: "rgba(245, 158, 11, 0.3)" }}>
                  <span className="contact-icon">🚀</span>
                  <div className="contact-info">
                    <strong>بوابة وظائف حديثي التخرج (Careers Portal):</strong>
                    <a
                      href={careersUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-web-link"
                      style={{ color: "#d97706", fontWeight: 700 }}
                      dir="ltr"
                    >
                      <span>{careersUrl}</span>
                      <span className="link-arrow">↗</span>
                    </a>
                  </div>
                </div>
              )}

              {linkedin && (
                <div className="contact-item full highlight-linkedin">
                  <span className="contact-icon">💼</span>
                  <div className="contact-info linkedin-info">
                    <div>
                      <strong>لينكد إن (LinkedIn):</strong>
                      <span className="linkedin-desc" style={{ display: "block", fontSize: "0.82rem", color: "var(--mut)", marginTop: "2px" }}>
                        {id === "enppi"
                          ? "الصفحة الرسمية الموثقة للشركة على LinkedIn"
                          : "بحث مباشر مخصص عن صفحة الشركة وموظفيها على LinkedIn"}
                      </span>
                    </div>
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-linkedin-action"
                    >
                      <span>{id === "enppi" ? "زيارة صفحة الشركة" : "البحث على LinkedIn"}</span>
                      <span className="link-arrow">↗</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="modal-footer company-modal-footer">
          {docsList.map((doc, idx) => (
            <a
              key={idx}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn modal-footer-btn"
              style={{
                borderColor: "#10b981",
                color: "#34d399",
                background: "rgba(16, 185, 129, 0.12)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>{doc.btnLabel || doc.title} ↗</span>
            </a>
          ))}
          {email && (
            <a href={`mailto:${email}`} className="btn modal-footer-btn-primary">
              <span>إرسال إيميل للشركة</span>
              <span>✉️</span>
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="btn modal-footer-btn">
              <span>زيارة الموقع الرسمي ↗</span>
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn modal-footer-btn-linkedin">
              <span>LinkedIn ↗</span>
            </a>
          )}
          <button className="btn modal-footer-btn" onClick={onClose}>
            إغلاق
          </button>
        </footer>
      </div>
    </div>
  );
}
