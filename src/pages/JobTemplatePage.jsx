import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { coverLetterTemplate, emailTemplate } from "../data/companies.js";
import useSEO from "../hooks/useSEO.js";
import "../styles/interview.css";

const TEMPLATES = [
  {
    id: "coverLetter",
    title: "خطاب التقديم الرسمي",
    titleEn: "Cover Letter",
    icon: "📝",
    badge: "قالب معتمد",
    desc: "نموذج احترافي وموثق بالإنجليزية لإبراز خبراتك ومشروع تخرجك وشغفك بالشركة",
  },
  {
    id: "email",
    title: "هيكل إيميل التقديم",
    titleEn: "Email Structure",
    icon: "📧",
    badge: "دليل تطبيقي",
    desc: "تشريح الإيميل خطوة بخطوة من العنوان حتى التوقيع مع قالب جاهز للنسخ",
  },
  {
    id: "cvGuide",
    title: "دليل الـ CV ومعايير الـ ATS",
    titleEn: "CV & ATS Guidelines",
    icon: "📄",
    badge: "معايير ATS",
    desc: "الأقسام الثمانية للسيرة الذاتية الهندسية وأخطر الأخطاء الشائعة لتخطي الفرز",
  },
  {
    id: "academiaVsIndustry",
    title: "مقارنة الأكاديمي وسوق العمل",
    titleEn: "Academia vs Industry",
    icon: "⚖️",
    badge: "توجيه مهني",
    desc: "مقارنة شاملة في 8 محاور لحسم قرارك بين الدراسات العليا والعمل الصناعي",
  },
];

export default function JobTemplatePage() {
  const { templateId } = useParams();
  const navigate = useNavigate();

  // التحقق من صحة المعرف
  const currentTpl = TEMPLATES.find((t) => t.id === templateId) || TEMPLATES[0];
  const activeTplId = currentTpl.id;

  useSEO({
    title: `${currentTpl.title} (${currentTpl.titleEn})`,
    description: currentTpl.desc,
  });

  const [copiedCover, setCopiedCover] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTplId]);

  const copyText = async (text, setter) => {
    try {
      await navigator.clipboard.writeText(text);
      setter(true);
      setTimeout(() => setter(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const handleTabChange = (newId) => {
    navigate(`/tips/templates/${newId}`);
  };

  return (
    <div className="job-template-page">
      {/* شريط المسار والرجوع */}
      <div className="stage-page-topbar">
        <Link to="/tips" className="back-link-btn">
          <span>← العودة لصفحة النصائح والمقابلات</span>
        </Link>
        <div className="stage-breadcrumb">
          <Link to="/">الرئيسية</Link> &lrm;← <Link to="/tips">الخلاصة والنصائح</Link> &lrm;←{" "}
          <span className="current">{currentTpl.title}</span>
        </div>
      </div>

      {/* عنوان الصفحة الرئيسي */}
      <div className="stage-page-header job-template-hero page-hero-banner">
        <div className="stage-icon-badge">{currentTpl.icon}</div>
        <div>
          <span className="stage-num-badge">{currentTpl.badge}</span>
          <h1>{currentTpl.title}</h1>
          <p className="stage-subtitle-en">{currentTpl.titleEn}</p>
        </div>
      </div>

      {/* أزرار التبديل السريع بين النماذج الأربعة */}
      <div className="template-nav-tabs" style={{ marginBottom: "32px" }}>
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`tpl-tab-btn ${activeTplId === t.id ? "active" : ""}`}
            onClick={() => handleTabChange(t.id)}
          >
            <span>{t.icon} {t.title}</span>
            <span style={{ fontSize: "0.78rem", opacity: 0.85, display: "block" }}>({t.titleEn})</span>
          </button>
        ))}
      </div>

      {/* المحتوى المخصص حسب النموذج المختار */}
      <div className="template-main-content">
        {/* ========================================== */}
        {/* 1. خطاب التقديم (Cover Letter) */}
        {/* ========================================== */}
        {activeTplId === "coverLetter" && (
          <div className="tpl-pane fade-in">
            <div className="pane-intro-box">
              <div className="intro-icon">📝</div>
              <div>
                <h3>خطاب التقديم الرسمي لمهندس العمليات (Process Engineer Cover Letter)</h3>
                <p>
                  نموذج احترافي وموثق باللغة الإنجليزية؛ مصمم لإبراز خلفيتك في التصميم والمحاكاة ومشروع التخرج وشغفك بالشركة المستهدفة.
                </p>
              </div>
            </div>

            <div className="template-editor-wrapper">
              <div className="tpl-toolbar">
                <span className="tpl-format-label">صيغة إنجليزية رسمية (معتمدة من مهندسي شركات التكرير)</span>
                <button
                  type="button"
                  className="btn-copy-action"
                  onClick={() => copyText(coverLetterTemplate, setCopiedCover)}
                >
                  {copiedCover ? "✓ تم النسخ بنجاح!" : "نسخ خطاب التقديم (Copy Cover Letter) 📋"}
                </button>
              </div>
              <pre className="tpl-code-block" dir="ltr">
                {coverLetterTemplate}
              </pre>
            </div>

            <div className="tpl-guide-notes">
              <strong>💡 إرشادات مهمة قبل الإرسال:</strong>
              <ul>
                <li>استبدل كل ما هو بين أقواس <code>[ ]</code> بالبيانات الحقيقية الخاصة بك بدقة.</li>
                <li>خصص الفقرة الثانية لذكر عنوان مشروع تخرجك الفعلي والوحدة التي تتدربت عليها.</li>
                <li>اذكر اسم الشركة المستهدفة في كل فقرة لإظهار اهتمامك المخصص بها بدلاً من الإرسال العام.</li>
              </ul>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* 2. تشريح وهيكل إيميل التقديم (Email Structure) */}
        {/* ========================================== */}
        {activeTplId === "email" && (
          <div className="tpl-pane fade-in">
            <div className="pane-intro-box">
              <div className="intro-icon">📧</div>
              <div>
                <h3>تشريح وهيكل إيميل التقديم الرسمي (Email Application Anatomy)</h3>
                <p>
                  الدراسات تثبت أن مسؤولي الموارد البشرية يقررون فتح الـ CV أو حذفه في أقل من 7 ثوانٍ؛ هذا الهيكل يضمن احترافية إيميلك واجتياز الفرز الأولي.
                </p>
              </div>
            </div>

            {/* هيكل الإيميل خطوة بخطوة */}
            <div className="email-anatomy-grid">
              <div className="anatomy-card">
                <div className="anatomy-num">1</div>
                <div>
                  <h4>عنوان الإيميل الموصى به (Subject Line Formula)</h4>
                  <p>تجنب العناوين الغامضة مثل &quot;CV&quot; أو &quot;Hello&quot;. استخدم الصيغة المعيارية:</p>
                  <code dir="ltr" className="code-badge">
                    [Your Full Name] - [Job Title Applied For] - [Years of Experience / Fresh Grad]
                  </code>
                  <div className="example-sub">
                    <strong>مثال:</strong> <code>Ahmed Mohamed Ali - Junior Process Engineer Application - ChE 2024</code>
                  </div>
                </div>
              </div>

              <div className="anatomy-card">
                <div className="anatomy-num">2</div>
                <div>
                  <h4>التحية الرسمية (Salutation)</h4>
                  <p>
                    وجه التحية لشخص محدد إذا كان اسمه معروفاً (مثل <code>Dear Eng. Mohamed</code> أو <code>Dear Mr. / Ms. [Last Name]</code>)، أو للقسم المختص:
                  </p>
                  <code dir="ltr" className="code-badge">
                    Dear Hiring Manager / Dear Talent Acquisition Team,
                  </code>
                </div>
              </div>

              <div className="anatomy-card">
                <div className="anatomy-num">3</div>
                <div>
                  <h4>الفقرة الأولى: سبب الرسالة (The Hook &amp; Purpose)</h4>
                  <p>
                    حدد في سطرين فقط: ما هي الوظيفة التي تتقدم لها؟ كيف عرفت عن الشاغر؟ وموجز هويتك الأكاديمية أو المهنية.
                  </p>
                </div>
              </div>

              <div className="anatomy-card">
                <div className="anatomy-num">4</div>
                <div>
                  <h4>الفقرة الثانية: القيمة المضافة (Value Proposition)</h4>
                  <p>
                    أبرز مهاراتك الفنية الجوهرية (HYSYS, Mass &amp; Energy Balance, Equipment Sizing, P&amp;ID)، وأهم إنجاز في مشروع تخرجك أو تدريبك ذي الصلة المباشرة بنشاط الشركة.
                  </p>
                </div>
              </div>

              <div className="anatomy-card">
                <div className="anatomy-num">5</div>
                <div>
                  <h4>الفقرة الثالثة والختام: دعوة للمقابلة (Call to Action &amp; Attachments)</h4>
                  <p>
                    أشر إلى إرفاق السيرة الذاتية (CV Attached)، وأبدِ حماسك لإجراء مقابلة لمناقشة مؤهلاتك، ثم اختم بتوقيع رسمي متكامل.
                  </p>
                </div>
              </div>
            </div>

            {/* قالب الإيميل الجاهز للنسخ */}
            <div className="template-editor-wrapper" style={{ marginTop: "24px" }}>
              <div className="tpl-toolbar">
                <span className="tpl-format-label">قالب نص الإيميل الجاهز للنسخ المباشر</span>
                <button
                  type="button"
                  className="btn-copy-action"
                  onClick={() => copyText(emailTemplate, setCopiedEmail)}
                >
                  {copiedEmail ? "✓ تم نسخ نص الإيميل!" : "نسخ قالب الإيميل (Copy Email) 📋"}
                </button>
              </div>
              <pre className="tpl-code-block" dir="ltr">
                {emailTemplate}
              </pre>
            </div>

            {/* النصائح الذهبية لإرسال الإيميلات */}
            <div className="pro-tips-card">
              <h4>⚡ نصائح ذهبية لإرسال إيميلات التوظيف (من واقع الخبرة):</h4>
              <div className="tips-boxes-row">
                <div className="tip-mini-box">
                  <strong>⏰ أفضل أوقات الإرسال</strong>
                  <p>من الأحد إلى الخميس بين الساعة 9:00 صباحاً و 11:30 صباحاً، لتكون رسالتك في أعلى صندوق الوارد.</p>
                </div>
                <div className="tip-mini-box">
                  <strong>📎 تسمية ملف الـ CV</strong>
                  <p>سمّ الملف باحترافية: <code>FirstName_LastName_CV_ProcessEngineer.pdf</code> ولا تستخدم أسماء مثل <code>CV_Final.pdf</code>.</p>
                </div>
                <div className="tip-mini-box">
                  <strong>🚫 تجنب الرسائل الجماعية</strong>
                  <p>لا تضع عشرات إيميلات الشركات في حقل واحد أو في الـ CC/BCC؛ كل شركة يجب أن تتلقى إيميلها بشكل منفرد ومخصص.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* 3. دليل السيرة الذاتية ومعايير ATS */}
        {/* ========================================== */}
        {activeTplId === "cvGuide" && (
          <div className="tpl-pane fade-in">
            <div className="pane-intro-box">
              <div className="intro-icon">📄</div>
              <div>
                <h3>الهيكل المثالي للسيرة الذاتية الهندسية (CV Guidelines)</h3>
                <p>
                  كيف تبني سيرة ذاتية تجتاز أنظمة الفرز الإلكتروني (ATS) وتنال إعجاب المديرين الفنيين (Technical Managers).
                </p>
              </div>
            </div>

            <div className="cv-structure-grid">
              <div className="structure-card">
                <span className="part-num">1</span>
                <h4>بيانات الاتصال وروابط الحسابات (Contact Information)</h4>
                <p>الاسم الكامل بخط عريض، المسمى المستهدف (e.g. Chemical Process Engineer)، المدينة/المحافظة، رقم الهاتف، الإيميل المهني، ورابط حساب LinkedIn موثق ومفعل.</p>
              </div>

              <div className="structure-card">
                <span className="part-num">2</span>
                <h4>الملخص المهني (Professional Summary)</h4>
                <p>فقرة مركزة في 3 إلى 4 أسطر تبرز خلفيتك الأكاديمية، تخصصك في العمليات أو المحاكاة، وأهم البرمجيات، وهدفك المهني الواضح للمساهمة في الإنتاج.</p>
              </div>

              <div className="structure-card">
                <span className="part-num">3</span>
                <h4>التعليم والمؤهلات (Education)</h4>
                <p>الجامعة، الكلية، سنة التخرج، التقدير التراكمي (إن كان جيداً فأعلى)، وتقدير مشروع التخرج إن وجد، مع ذكر أي تفوق أكاديمي.</p>
              </div>

              <div className="structure-card">
                <span className="part-num">4</span>
                <h4>مشروع التخرج (Graduation Project)</h4>
                <p>خصص له قسماً بارزاً: عنوان المشروع، المشرف الأكاديمي، نبذة عن العملية المحاكاة، برامج المحاكاة المستخدمة (HYSYS / Aspen)، وحسابات المعدات التي قمت بها.</p>
              </div>

              <div className="structure-card">
                <span className="part-num">5</span>
                <h4>التدريبات الصيفية (Internships &amp; Field Training)</h4>
                <p>اسم الشركة (Midor, Enppi, EPC, etc.)، توقيت التدريب، ونقاط محددة تبدأ بأفعال حركة (Action Verbs) توضح ما تعلمته بالموقع أو وحدات المعالجة.</p>
              </div>

              <div className="structure-card">
                <span className="part-num">6</span>
                <h4>المهارات الفنية (Technical Skills)</h4>
                <p>صنفها بوضوح: محاكاة العمليات (Aspen HYSYS, PRO II)، برامج الرسم (AutoCAD P&amp;ID)، أدوات التصميم (HTRI, Sizing Tools)، وتحليل البيانات وحسابات الإكسيل.</p>
              </div>

              <div className="structure-card">
                <span className="part-num">7</span>
                <h4>الأنشطة الطلابية والقيادية (Extracurricular &amp; Leadership)</h4>
                <p>الأنشطة الهندسية (SPE, AIChE, ASME)، الأنشطة التطوعية، وإدارة الفرق والفعاليات لإثبات مهارات التواصل والعمل الجماعي.</p>
              </div>

              <div className="structure-card">
                <span className="part-num">8</span>
                <h4>اللغات والمهارات الشخصية (Languages &amp; Soft Skills)</h4>
                <p>اللغة الإنجليزية ومستوى الإجادة، حل المشكلات الهندسية (Analytical Troubleshooting)، والقدرة على التكيف مع بيئات العمل الميدانية والورديات.</p>
              </div>
            </div>

            {/* محاذير الـ ATS الخطيرة */}
            <div className="ats-warning-box">
              <h4>⚠️ محاذير خطيرة تجنبها في السيرة الذاتية (Common Mistakes):</h4>
              <div className="mistakes-grid">
                <div className="mistake-item">
                  <span className="cross">✕</span>
                  <div>
                    <strong>لا تستخدم شرائط التقدم والنسب المئوية الوهمية:</strong>
                    <span>مثل كتابة (HYSYS 85% أو English 90%)؛ هذه الشرائط لا يفهمها الـ ATS وتعتبر دليلاً على عدم الاحترافية.</span>
                  </div>
                </div>
                <div className="mistake-item">
                  <span className="cross">✕</span>
                  <div>
                    <strong>لا تجعل الـ CV يتجاوز صفحتين:</strong>
                    <span>لحديثي التخرج وخبرات حتى 3 سنوات، صفحة أو صفحتان منسقتان بعناية هما المعيار العالمي الموصى به.</span>
                  </div>
                </div>
                <div className="mistake-item">
                  <span className="cross">✕</span>
                  <div>
                    <strong>لا ترسل بصيغة Word:</strong>
                    <span>احفظ الملف دائماً بصيغة PDF لضمان ثبات التنسيق والخطوط عبر جميع أجهزة مسؤولي التوظيف.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* 4. مقارنة المسار الأكاديمي وسوق العمل */}
        {/* ========================================== */}
        {activeTplId === "academiaVsIndustry" && (
          <div className="tpl-pane fade-in">
            <div className="pane-intro-box">
              <div className="intro-icon">⚖️</div>
              <div>
                <h3>مقارنة المسار الأكاديمي وسوق العمل الصناعي (Academia vs. Industry)</h3>
                <p>
                  مقارنة جوهرية ومفصلة لمساعدة الخريجين والطلاب في حسم قرارهم بين الدراسات العليا (Master / PhD) وسوق العمل بالمصانع والشركات.
                </p>
              </div>
            </div>

            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}>وجه المقارنة</th>
                    <th style={{ width: "40%", background: "color-mix(in srgb, #0284c7 15%, var(--card))" }}>
                      🏛️ المسار الأكاديمي (Academia &amp; Research)
                    </th>
                    <th style={{ width: "40%", background: "color-mix(in srgb, #10b981 15%, var(--card))" }}>
                      🏭 مسار سوق العمل والصناعة (Industry &amp; Plants)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>بيئة العمل (Work Environment)</strong></td>
                    <td>المعامل البحثية، قاعات التدريس الجامعية، المؤتمرات الأكاديمية، وبيئات العمل المستقلة.</td>
                    <td>مصافي التكرير، مصانع البتروكيماويات، غرف التحكم DCS، المكاتب الهندسية، والمواقع الميدانية.</td>
                  </tr>
                  <tr>
                    <td><strong>التركيز اليومي (Daily Focus)</strong></td>
                    <td>البحث العلمي، النشر في الدوريات العالمية، تدريس الطلاب، وتطوير النظريات وتجارب المعامل.</td>
                    <td>الإنتاجية اليومية، حل المشاكل التشغيلية في الوقت الفعلي (Troubleshooting)، تقليل التكاليف والسلامة.</td>
                  </tr>
                  <tr>
                    <td><strong>اتخاذ القرار (Decision Making)</strong></td>
                    <td>قائم على الدقة المتناهية، والتجارب المتكررة، ولا توجد قيود زمنية ضاغطة على مدار الساعة.</td>
                    <td>قرارات تشغيلية سريعة ومحسوبة المخاطر تعتمد على اقتصاديات السوق ومتطلبات السلامة وتفادي توقف الإنتاج.</td>
                  </tr>
                  <tr>
                    <td><strong>التطور المهني (Career Progression)</strong></td>
                    <td>تدرج أكاديمي واضح وثابت: معيد ➔ مدرس مساعد ➔ دكتور ➔ أستاذ مساعد ➔ أستاذ كرسي.</td>
                    <td>تدرج إداري وفني مرن: مهندس تشغيل ➔ مهندس أول ➔ مدير وحدة ➔ مدير عمليات ➔ مدير عام المصنع.</td>
                  </tr>
                  <tr>
                    <td><strong>التوازن الحياتي (Work-Life Balance)</strong></td>
                    <td>مواعيد مرونة نسبياً مع فترات إجازات أكاديمية، مع ضغط مستمر لكتابة الأوراق البحثية والمنح.</td>
                    <td>نظام الورديات (Shift Basis) في البدايات، مع نداءات طوارئ بالمصانع، والتزام صارم بجدول العمليات.</td>
                  </tr>
                  <tr>
                    <td><strong>العمل عن بعد (Remote Work)</strong></td>
                    <td>متاح ومرن بشكل كبير في أوقات كتابة الأبحاث والمحاكاة والمراجعات الأدبية.</td>
                    <td>شبه مستحيل لمهندسي التشغيل والموقع؛ متاح جزئياً لمهندسي التصميم والمحاكاة في مكاتب الـ EPC.</td>
                  </tr>
                  <tr>
                    <td><strong>المرونة (Flexibility)</strong></td>
                    <td>حرية كبيرة في اختيار الموضوع البحثي، وطريقة تنظيم الوقت والتدريس.</td>
                    <td>مقيد بمتطلبات خطة الإنتاج، تعليمات الإدارة العليا، وأولويات الصيانة والتسليم لعملاء المصنع.</td>
                  </tr>
                  <tr>
                    <td><strong>العائد المادي (Compensation)</strong></td>
                    <td>رواتب أكاديمية ثابتة في البداية، ترتفع بشكل ملحوظ بالاستشارات الصناعية والمنح والمشاريع الدولية.</td>
                    <td>رواتب صناعية مجزية منذ البداية، مع بدلات موقع ومخاطر وأرباح سنوية وبونص إنتاج وتأمينات طبية شاملة.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bottom-advice-card">
              <h4>🎯 خلاصة وتوصية توجيهية:</h4>
              <p>
                إذا كنت شغوفاً بالاستكشاف العلمي النظري، وحرية التفكير، ولديك الصبر على الأبحاث الطويلة؛ فالأكاديميا والمنح الدولية تناسبك تماماً. أما إذا كنت تفضل العمل الميداني الحركي، وتطبيقات الهندسة على أرض الواقع، والتعامل مع الآلات العملاقة والإنتاج والمردود المالي السريع؛ فالمسار الصناعي في المصافي وشركات البتروكيماويات هو وجهتك المثالية!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
