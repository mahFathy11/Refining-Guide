import { Link } from "react-router-dom";

const TEMPLATES = [
  {
    id: "coverLetter",
    title: "خطاب التقديم الرسمي",
    titleEn: "Cover Letter",
    icon: "📝",
    badge: "قالب معتمد",
    desc: "نموذج احترافي وموثق بالإنجليزية لإبراز خبراتك ومشروع تخرجك وشغفك بالشركة.",
    pill: "قالب جاهز للنسخ",
  },
  {
    id: "email",
    title: "هيكل إيميل التقديم",
    titleEn: "Email Structure",
    icon: "📧",
    badge: "دليل تطبيقي",
    desc: "تشريح الإيميل خطوة بخطوة من العنوان حتى التوقيع مع قالب جاهز ونصائح الإرسال.",
    pill: "تشريح 5 أجزاء",
  },
  {
    id: "cvGuide",
    title: "دليل الـ CV ومعايير الـ ATS",
    titleEn: "CV & ATS Guidelines",
    icon: "📄",
    badge: "معايير ATS",
    desc: "الأقسام الثمانية للسيرة الذاتية الهندسية ومحاذير الـ ATS لتخطي الفرز الأولي بنجاح.",
    pill: "معايير الفرز",
  },
  {
    id: "academiaVsIndustry",
    title: "مقارنة الأكاديمي وسوق العمل",
    titleEn: "Academia vs Industry",
    icon: "⚖️",
    badge: "توجيه مهني",
    desc: "مقارنة شاملة في 8 محاور لحسم قرارك بين الدراسات العليا والعمل الصناعي بالمصانع.",
    pill: "مقارنة 8 محاور",
  },
];

export default function CvAndJobTemplates() {
  return (
    <section className="cv-templates-section">
      <div className="cv-templates-header">
        <h2>
          <span>نماذج عملية للتقديم والسيرة الذاتية</span>{" "}
          <span className="header-subtitle-en" dir="ltr">(CV &amp; Cover Letter Templates)</span>
        </h2>
        <p className="lead-text">
          قوالب جاهزة ومهنية للتقديم، تشريح إيميل التوظيف، إرشادات كتابة السيرة الذاتية لتخطي أنظمة الـ ATS، ومقارنة شاملة بين المسار الأكاديمي والصناعي لإرشادك نحو القرار الصحيح.
        </p>
      </div>

      {/* شبكة الكروت الأربعة كروابط لصفحات مستقلة */}
      <div className="templates-cards-grid">
        {TEMPLATES.map((t) => (
          <Link
            key={t.id}
            to={`/tips/templates/${t.id}`}
            className="template-link-card"
            title={`اضغط للدخول لصفحة ${t.title}`}
          >
            <div className="tpl-card-top">
              <span className="tpl-card-icon">{t.icon}</span>
              <span className="tpl-card-badge">{t.badge}</span>
            </div>

            <div className="tpl-card-body">
              <h3 className="tpl-card-title">{t.title}</h3>
              <span className="tpl-card-en">{t.titleEn}</span>
              <p className="tpl-card-desc">{t.desc}</p>
            </div>

            <div className="tpl-card-footer">
              <span className="tpl-card-pill">{t.pill}</span>
              <span className="tpl-action-link">عرض النموذج والتفاصيل ←</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
