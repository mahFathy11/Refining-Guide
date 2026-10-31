import { Link } from "react-router-dom";

export default function InterviewStagesTree() {
  return (
    <section className="interview-tree-section">
      <div className="interview-tree-header">
        <h2>
          <span>شجرة مراحل المقابلات الشخصية الكاملة</span>{" "}
          <span className="header-subtitle-en" dir="ltr">(Interview Stages Tree)</span>
        </h2>
        <p className="lead-text">
          الهيكل الشامل والتفصيلي لكافة مراحل وأسئلة المقابلات في شركات التكرير والبتروكيماويات والغاز، يوضح لك بالضبط كيف تفكر لجان المقابلات (لجنة HR واللجنة الفنية التخصصية) وما هي أدق الأسئلة التي يجب الاستعداد لها.
        </p>
      </div>

      {/* المستوى الأول: رأس الشجرة */}
      <div className="tree-root-container">
        <div className="tree-root-node">
          <div className="root-icon">🎯</div>
          <div className="root-title">مقابلة العمل الشخصية (The Job Interview)</div>
          <div className="root-desc">بوابة العبور لشركات البترول والتكرير والتصميم والبتروكيماويات</div>
        </div>
        <div className="tree-connector-down" />
      </div>

      {/* المستوى الثاني: المحاور الثلاثة الكبرى */}
      <div className="tree-main-branches">
        {/* الفرع 1: مناقشة الـ CV */}
        <Link
          to="/tips/interview/cv"
          className="main-branch-card branch-link-card"
          title="اضغط للدخول لصفحة مناقشة السيرة الذاتية والأسئلة"
        >
          <div className="branch-icon">📄</div>
          <div className="branch-title">1. مناقشة السيرة الذاتية</div>
          <div className="branch-en">CV Discussion</div>
          <div className="branch-summary">مناقشة كل تفصيلة في الـ CV والتحقق من الخبرات والمشاريع الميدانية</div>
          <div className="branch-card-footer">
            <span className="branch-pill">فحص المصداقية</span>
            <span className="branch-action-text">عرض التفاصيل والأسئلة ←</span>
          </div>
        </Link>

        {/* الفرع 2: أسئلة الـ HR */}
        <Link
          to="/tips/interview/hr"
          className="main-branch-card branch-link-card"
          title="اضغط للدخول لصفحة مراحل واختبارات الموارد البشرية"
        >
          <div className="branch-icon">👥</div>
          <div className="branch-title">2. أسئلة الموارد البشرية</div>
          <div className="branch-en">HR Questions & Tests</div>
          <div className="branch-summary">اختبارات الإنجليزي، الحاسب (Excel)، الـ IQ والمقابلة السلوكية (STAR)</div>
          <div className="branch-card-footer">
            <span className="branch-pill">4 مراحل اختبار</span>
            <span className="branch-action-text">عرض المراحل والأسئلة ←</span>
          </div>
        </Link>

        {/* الفرع 3: الأسئلة الفنية (التكنيكال) */}
        <Link
          to="/tips/interview/technical"
          className="main-branch-card branch-link-card highlight-card"
          title="اضغط للدخول لصفحة الأسئلة الفنية ومعدات المصنع"
        >
          <div className="branch-icon">⚙️</div>
          <div className="branch-title">3. الأسئلة الفنية والتخصصية</div>
          <div className="branch-en">Technical Questions</div>
          <div className="branch-summary">المقررات، مشروع التخرج، معدات المصنع، والتدريب العملي</div>
          <div className="branch-card-footer">
            <span className="branch-pill highlight">الوزن الأكبر (امتحان + شفوي)</span>
            <span className="branch-action-text">عرض الاختبارات والأسئلة ←</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
