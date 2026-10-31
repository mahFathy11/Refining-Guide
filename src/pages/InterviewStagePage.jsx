import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useSEO from "../hooks/useSEO.js";
import "../styles/interview.css";

const STAGES = [
  {
    id: "cv",
    title: "1. مناقشة السيرة الذاتية",
    titleEn: "CV Discussion",
    icon: "📄",
    pill: "فحص المصداقية",
  },
  {
    id: "hr",
    title: "2. أسئلة الموارد البشرية",
    titleEn: "HR Questions & Tests",
    icon: "👥",
    pill: "4 مراحل اختبار",
  },
  {
    id: "technical",
    title: "3. الأسئلة الفنية والتخصصية",
    titleEn: "Technical Questions",
    icon: "⚙️",
    pill: "امتحان تحريري + شفوي",
  },
];

export default function InterviewStagePage() {
  const { stageId } = useParams();
  const navigate = useNavigate();

  // التحقق من صحة المعرف، وإذا لم يكن صحيحاً يتم التوجيه للمرحلة الفنية افتراضياً
  const currentStage = STAGES.find((s) => s.id === stageId) || STAGES[2];
  const activeStageId = currentStage.id;

  useSEO({
    title: `${currentStage.title} (${currentStage.titleEn})`,
    description: `دليل اجتياز ${currentStage.title} في مسابقات واختبارات شركات ومصافي البترول والتكرير.`,
  });

  const [activeSubTab, setActiveSubTab] = useState("equipment"); // for technical: "equipment" | "academic" | "project" | "training" | "company"

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeStageId]);

  const handleStageChange = (newStageId) => {
    navigate(`/tips/interview/${newStageId}`);
  };

  return (
    <div className="interview-stage-page">
      {/* شريط المسار والرجوع */}
      <div className="stage-page-topbar">
        <Link to="/tips" className="back-link-btn">
          <span>← العودة لصفحة النصائح والمقابلات</span>
        </Link>
        <div className="stage-breadcrumb">
          <Link to="/">الرئيسية</Link> &lrm;← <Link to="/tips">الخلاصة والنصائح</Link> &lrm;←{" "}
          <span className="current">{currentStage.title}</span>
        </div>
      </div>

      {/* عنوان الصفحة الرئيسي */}
      <div className="stage-page-header">
        <div className="stage-icon-badge">{currentStage.icon}</div>
        <div>
          <span className="stage-num-badge">{currentStage.pill}</span>
          <h1>{currentStage.title}</h1>
          <p className="stage-subtitle-en">{currentStage.titleEn}</p>
        </div>
      </div>

      {/* أزرار التبديل السريع بين المراحل الثلاث الكبرى */}
      <div className="stage-nav-tabs" role="tablist">
        {STAGES.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={activeStageId === s.id}
            className={`stage-nav-tab-btn ${activeStageId === s.id ? "active" : ""}`}
            onClick={() => handleStageChange(s.id)}
          >
            <span className="tab-icon">{s.icon}</span>
            <div className="tab-texts">
              <span className="tab-title">{s.title}</span>
              <span className="tab-sub">{s.titleEn}</span>
            </div>
            {activeStageId === s.id && <span className="active-dot" />}
          </button>
        ))}
      </div>

      {/* محتوى المرحلة المحددة */}
      <div className="stage-main-content">
        {/* ========================================== */}
        {/* 1. تفاصيل مناقشة السيرة الذاتية (CV) */}
        {/* ========================================== */}
        {activeStageId === "cv" && (
          <div className="branch-detail-panel fade-in">
            <div className="panel-header cv-header">
              <span className="panel-icon">📄</span>
              <div>
                <h3>مناقشة السيرة الذاتية الفنية (Technical CV Discussion)</h3>
                <p>
                  اللجنة تفحص كل كلمة وأرقام ونسب وضعتها في سيرتك الذاتية لاختبار مدى إلمامك الحقيقي بها. تأكد أن كل سطر يمكن الدفاع عنه هندسياً.
                </p>
              </div>
            </div>

            <div className="detail-cards-grid">
              <div className="node-detail-card">
                <div className="card-top">
                  <span className="card-tag">فحص المصداقية</span>
                  <h4>🔍 التحقق من الخبرات والمهام الميدانية</h4>
                </div>
                <p>
                  أي معلومة مكتوبة في الـ CV (تدريب بشركة X، زيارة معمل، أو أداة استخدمتها) ستسأل فيها بالتفصيل: ماذا فعلت بالضبط؟ ما المشاكل التي رأيتها؟ ومن كان مشرفك؟
                </p>
                <div className="q-examples">
                  <strong>💡 أمثلة الأسئلة الشائعة:</strong>
                  <ul>
                    <li>&quot;احكيلي عن تدريبك في مصفاة ميدور، إيه الوحدات اللي زرتها بالتحديد؟&quot;</li>
                    <li>&quot;ذكرت إنك بتعرف تعمل Sizing لمضخات الطرد المركزي، ايه هي معادلة الـ NPSHa؟&quot;</li>
                  </ul>
                </div>
              </div>

              <div className="node-detail-card">
                <div className="card-top">
                  <span className="card-tag">النسبة والمشاركة</span>
                  <h4>🤝 دورك الفعلي في العمل الجماعي</h4>
                </div>
                <p>
                  في المشاريع الطلابية ومشاريع التخرج، يحاول المقابل معرفة هل قمت بالعمل بنفسك أم كان مجرد جهد لزملائك في الفريق.
                </p>
                <div className="q-examples">
                  <strong>💡 أمثلة الأسئلة الشائعة:</strong>
                  <ul>
                    <li>&quot;كنتوا كم طالب في التيم؟ وإيه الجزئية اللي كانت مسؤوليتك بنسبة 100%؟&quot;</li>
                    <li>&quot;لو زميل في التيم تأخر عن تسليم المحاكاة في ميعادها، تصرفتوا إزاي؟&quot;</li>
                  </ul>
                </div>
              </div>

              <div className="node-detail-card">
                <div className="card-top">
                  <span className="card-tag">البرمجيات</span>
                  <h4>💻 اختبار إجادة برامج المحاكاة والتصميم</h4>
                </div>
                <p>
                  إذا كتبت في الـ CV أنك تتقن Aspen HYSYS أو AutoCAD P&ID، استعد لتسأل في تفاصيل الـ Fluid Package ومعادلات الحالة والـ Solver.
                </p>
                <div className="q-examples">
                  <strong>💡 أمثلة الأسئلة الشائعة:</strong>
                  <ul>
                    <li>&quot;ليه اخترت Peng-Robinson كـ Fluid Package لبرج تقطير الخام في HYSYS؟&quot;</li>
                    <li>&quot;إزاي كنت بتعالج مشكلة الـ Consistency Error في أبراج الفصل؟&quot;</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* 2. تفاصيل أسئلة الموارد البشرية (HR) */}
        {/* ========================================== */}
        {activeStageId === "hr" && (
          <div className="branch-detail-panel fade-in">
            <div className="panel-header hr-header">
              <span className="panel-icon">👥</span>
              <div>
                <h3>محاور واختبارات الموارد البشرية (HR Questions & Assessments)</h3>
                <p>المراحل الأربع المعتمدة لتقييم اللغة، الحاسب، سرعة البديهة، والذكاء السلوكي في كبرى شركات القطاع الصناعي.</p>
              </div>
            </div>

            <div className="detail-cards-grid four-col">
              {/* English */}
              <div className="node-detail-card">
                <div className="card-top">
                  <span className="card-tag lang">المرحلة الأولى</span>
                  <h4>📝 اختبار اللغة الإنجليزية (English Test)</h4>
                </div>
                <p>
                  امتحان تحريري (Grammar, Vocabulary, Technical Reading) بالإضافة لجزء شفهي (Oral Speaking) لقياس الطلاقة ومخارج الحروف والمصطلحات الهندسية.
                </p>
                <div className="q-examples">
                  <strong>🎯 المطلوب منك:</strong>
                  <ul>
                    <li>التحدث بالإنجليزية دون تردد لمدة 3 دقائق عن نفسك واهتماماتك المهنية.</li>
                    <li>معرفة المصطلحات الهندسية الشائعة (Refinery, Fractionation, Piping).</li>
                  </ul>
                </div>
              </div>

              {/* Computer Skills */}
              <div className="node-detail-card">
                <div className="card-top">
                  <span className="card-tag comp">المرحلة الثانية</span>
                  <h4>💻 مهارات الحاسب (Computer Skills / Excel)</h4>
                </div>
                <p>
                  اختبار عملي أو أسئلة في حزمة Microsoft Office، مع تركيز مكثف على برنامج Excel لما له من أهمية قصوى في حسابات الإنتاج والموازين.
                </p>
                <div className="q-examples">
                  <strong>🎯 المطلوب منك:</strong>
                  <ul>
                    <li>دوال: VLOOKUP / XLOOKUP, INDEX-MATCH, IF Statements.</li>
                    <li>جداول Pivot Tables والرسم البياني وتحليل البيانات والـ Conditional Formatting.</li>
                  </ul>
                </div>
              </div>

              {/* IQ Tests */}
              <div className="node-detail-card">
                <div className="card-top">
                  <span className="card-tag iq">المرحلة الثالثة</span>
                  <h4>🧠 اختبارات الذكاء (IQ & Logic Tests)</h4>
                </div>
                <p>
                  امتحانات القدرات الذهنية وسرعة الحل؛ تشمل المتتاليات الرقمية، الأنماط الهندسية، التفكير التحليلي، والتفكير النقدي تحت ضغط الوقت المحدد.
                </p>
                <div className="q-examples">
                  <strong>🎯 المطلوب منك:</strong>
                  <ul>
                    <li>التدرب على نماذج أسئلة SHL و Raven و Numerical Reasoning.</li>
                    <li>إدارة الوقت بدقة وعدم التوقف عند سؤال واحد طويل.</li>
                  </ul>
                </div>
              </div>

              {/* Oral HR */}
              <div className="node-detail-card">
                <div className="card-top">
                  <span className="card-tag hr">المرحلة الرابعة</span>
                  <h4>🗣️ المقابلة السلوكية (Behavioral HR)</h4>
                </div>
                <p>
                  المقابلة الشفهية وجهاً لوجه مع مسؤولي التوظيف لقياس الشخصية ومدى ملاءمتها لبيئة العمل الصناعية والعمل تحت ضغط وبنظام الورديات.
                </p>
                <div className="q-examples">
                  <strong>🎯 الأسئلة المفصلية (استخدم منهجية STAR):</strong>
                  <ul>
                    <li>&quot;Tell me about yourself&quot; (موجز احترافي في دقيقتين).</li>
                    <li>&quot;لماذا ترغب في الانضمام لشركتنا بالتحديد؟&quot;</li>
                    <li>&quot;هل تقبل العمل بنظام الشيفتات والمناطق النائية؟&quot;</li>
                    <li>&quot;إيه أكبر نقطة ضعف عندك وشغال على تحسينها إزاي؟&quot;</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* 3. تفاصيل الأسئلة الفنية (Technical Questions) */}
        {/* ========================================== */}
        {activeStageId === "technical" && (
          <div className="branch-detail-panel fade-in">
            <div className="panel-header tech-header">
              <span className="panel-icon">⚙️</span>
              <div>
                <h3>الأسئلة الفنية والتخصصية (Technical Written & Oral Interview)</h3>
                <p>
                  تنقسم لاختبار تحريري (Written Exam) ومقابلة شفهية أمام لجنة هندسية عليا (Oral Interview). تتفرع إلى 5 ركائز رئيسية:
                </p>
              </div>
            </div>

            {/* أزرار التنقل بين فروع الأسئلة الفنية الخمسة */}
            <div className="tech-subtabs">
              <button
                type="button"
                className={`tech-subtab-btn ${activeSubTab === "equipment" ? "active" : ""}`}
                onClick={() => setActiveSubTab("equipment")}
              >
                🏭 معدات المصنع (Plant Equipment)
              </button>
              <button
                type="button"
                className={`tech-subtab-btn ${activeSubTab === "academic" ? "active" : ""}`}
                onClick={() => setActiveSubTab("academic")}
              >
                📚 المقررات الأكاديمية الأساسية
              </button>
              <button
                type="button"
                className={`tech-subtab-btn ${activeSubTab === "project" ? "active" : ""}`}
                onClick={() => setActiveSubTab("project")}
              >
                🎓 مشروع التخرج (Graduation Project)
              </button>
              <button
                type="button"
                className={`tech-subtab-btn ${activeSubTab === "training" ? "active" : ""}`}
                onClick={() => setActiveSubTab("training")}
              >
                🦺 التدريب الميداني وإجراءات السلامة
              </button>
              <button
                type="button"
                className={`tech-subtab-btn ${activeSubTab === "company" ? "active" : ""}`}
                onClick={() => setActiveSubTab("company")}
              >
                🏢 معرفة الشركة والقطاع الصناعي
              </button>
            </div>

            {/* تفاصيل التبويب الفرعي المختار */}
            <div className="tech-subcontent">
              {/* تبويب معدات المصنع (Plant Equipment) */}
              {activeSubTab === "equipment" && (
                <div className="equipment-deep-dive fade-in">
                  <div className="deep-dive-badge">
                    <span>⭐ التركيز الأعمق في مقابلات مصافي التكرير والبتروكيماويات</span>
                  </div>

                  <div className="equip-categories-grid">
                    {/* 1. Rotating Equipment */}
                    <div className="equip-cat-card">
                      <div className="cat-header rotating">
                        <span className="cat-icon">🌀</span>
                        <h4>المعدات الدوارة (Rotating Equipment)</h4>
                      </div>
                      <div className="equip-items">
                        <div className="equip-item">
                          <strong>1. المضخات (Pumps):</strong>
                          <p>
                            مقارنة الطاردة المركزية (Centrifugal) بالإزاحية الإيجابية (PD Pumps)، منحنيات الأداء (Head vs Flow)، نقطة أفضل كفاءة (BEP)، ظاهرة التكهف (Cavitation) وأسبابها، والشرط الجوهري لمنعها:
                            <code dir="ltr">NPSHa &gt; NPSHr + Safety Margin</code>
                          </p>
                        </div>
                        <div className="equip-item">
                          <strong>2. الضواغط (Compressors):</strong>
                          <p>
                            الضواغط الطاردة المركزية (Centrifugal) والترددية (Reciprocating)، مراحل الضغط وتبريد الغاز بين المراحل (Intercoolers)، وظاهرة الـ Surge الخطيرة ومنظومة التحكم التلقائي (Anti-Surge Valve Loop).
                          </p>
                        </div>
                        <div className="equip-item">
                          <strong>3. التوربينات البخارية (Steam Turbines):</strong>
                          <p>
                            مبادئ عمل توربينات البخار لتوليد الكهرباء وتدوير الضواغط والمضخات الكبرى، دورات التوليد المشترك (Co-generation)، واستغلال الضغط العالي والمنخفض للبخار بالمصفاة.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 2. Static Equipment */}
                    <div className="equip-cat-card">
                      <div className="cat-header static">
                        <span className="cat-icon">🗼</span>
                        <h4>المعدات الاستاتيكية (Static Equipment)</h4>
                      </div>
                      <div className="equip-items">
                        <div className="equip-item">
                          <strong>1. أبراج التقطير (Distillation Columns):</strong>
                          <p>
                            مكونات البرج (Trays vs Packings)، أنواع الصواني (Sieve, Valve, Bubble Cap)، مشاكل الأبراج الشائعة: الغمر (Flooding)، التسريب (Weeping)، والانسكاب (Entrainment)، وأهمية نسبة الراجع (Reflux Ratio).
                          </p>
                        </div>
                        <div className="equip-item">
                          <strong>2. الفواصل والأوعية (Separators &amp; Drums):</strong>
                          <p>
                            الفواصل الثنائية والثلاثية (2-Phase &amp; 3-Phase Separators)، فواصل الزيت والغاز والماء، فواصل الـ Knock-out Drums، حسابات وقت المكوث (Retention Time)، ومانعات الرذاذ (Demister Pads).
                          </p>
                        </div>
                        <div className="equip-item">
                          <strong>3. المبادلات الحرارية والأفران (Exchangers &amp; Heaters):</strong>
                          <p>
                            مبادلات الغلاف والأنبوب (Shell &amp; Tube TEMA)، المبردات الهوائية (Fin-fan Air Coolers)، وأفران التقطير (Fired Heaters &amp; Boilers) وطريقة ضبط كفاءة الحرق والتحكم في الهواء الزائد (Excess Air).
                          </p>
                        </div>
                        <div className="equip-item">
                          <strong>4. المحابس وشبكات الأنابيب (Valves &amp; Piping):</strong>
                          <p>
                            الفرق بين Gate, Globe, Ball, Butterfly, Check، صمامات الأمان وتخفيف الضغط (PSVs)، وحسابات هبوط الضغط (Pressure Drop) والسرعات الموصى بها للسوائل والغازات.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 3. Control & Simulation & Drawings */}
                    <div className="equip-cat-card">
                      <div className="cat-header control">
                        <span className="cat-icon">📊</span>
                        <h4>التحكم والمحاكاة والرسومات الهندسية</h4>
                      </div>
                      <div className="equip-items">
                        <div className="equip-item">
                          <strong>1. أجهزة القياس والتحكم (Process Control):</strong>
                          <p>
                            حلقات التحكم (Feedback, Feedforward, Cascade)، أجهزة قياس الضغط، الحرارة، المستوى، والتدفق (PT, TT, LT, FT)، وصمامات التحكم (Control Valves: Fail Safe Open/Closed)، وأنظمة DCS و ESD.
                          </p>
                        </div>
                        <div className="equip-item">
                          <strong>2. برامج المحاكاة (Simulation Tools):</strong>
                          <p>
                            الاستخدام الصناعي لـ Aspen HYSYS و Aspen Plus و PRO II في إعداد موازين المادة والحرارة (H&amp;MB)، وتوقع سلوك الوحدات واكتشاف الاختناقات التشغيلية (Debottlenecking).
                          </p>
                        </div>
                        <div className="equip-item">
                          <strong>3. قراءة الرسومات (Drawings &amp; Flowsheets):</strong>
                          <p>
                            التمييز الدقيق بين BFD (Block Diagram) و PFD (Process Flow Diagram) و P&amp;ID (Piping &amp; Instrumentation Diagram)، وفك شفرات الرموز والـ Tag Numbers وقوائم المعدات والخطوط.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* تبويب المقررات الأكاديمية (Academic Courses) */}
              {activeSubTab === "academic" && (
                <div className="academic-grid fade-in">
                  <div className="subject-box">
                    <h5>⚛️ Thermodynamics (الديناميكا الحرارية)</h5>
                    <p>القوانين الأول والثاني، توازن الأطوار (VLE &amp; VLLE)، جداول البخار ودورة رانكن، واختيار معادلات الحالة (EOS: Peng-Robinson, SRK) حسب طبيعة الموائع الهيدروكربونية والقطبية.</p>
                  </div>
                  <div className="subject-box">
                    <h5>💧 Fluid Flow (سريان الموائع)</h5>
                    <p>معادلة برنولي ومعادلة حفظ الطاقة، حسابات معامل الاحتكاك وهبوط الضغط في الخطوط والمحابس، رقم رينولدز، ظاهرة المطرقة المائية (Water Hammer)، وتصنيف الموائع النيوتونية وغير النيوتونية.</p>
                  </div>
                  <div className="subject-box">
                    <h5>🔥 Heat Transfer (انتقال الحرارة)</h5>
                    <p>التوصيل والحمل والإشعاع، الفرق اللوغاريتمي للحرارة (LMTD) ومعامل التصحيح (Ft Factor)، معامل انتقال الحرارة الكلي (Overall U)، ومقاومة التلوث (Fouling Factor) وتصميم المبادلات.</p>
                  </div>
                  <div className="subject-box">
                    <h5>⚗️ Mass Transfer (انتقال الكتلة والفصل)</h5>
                    <p>قوانين فيك ورول ودالتون، التطاير النسبي (Relative Volatility)، طريقة McCabe-Thiele لحساب عدد الصواني النظرية، نسبة الراجع الأدنى (Rmin)، وعمليات الامتصاص والاستخلاص بالمذيبات.</p>
                  </div>
                  <div className="subject-box">
                    <h5>🧪 Reaction Kinetics (حركية وهندسة التفاعلات)</h5>
                    <p>المفاعلات المتجانسة وغير المتجانسة، مقارنة المفاعل الأنبوبي (PFR) بمفاعل الخلط المستمر (CSTR)، طاقة التنشيط ومعادلة أرهينيوس، والعوامل الحفازة وظاهرة التسمم الحفزي (Catalyst Poisoning).</p>
                  </div>
                  <div className="subject-box">
                    <h5>📏 Units &amp; Balances (التحويلات والموازين)</h5>
                    <p>التحويل السريع بين الوحدات الإنجليزية والمترية (BPD إلى m³/hr، psi إلى bar)، موازين المادة الشاملة والتفصيلية، وحسابات تيارات الـ Recycle والـ Purge والـ Bypass.</p>
                  </div>
                </div>
              )}

              {/* تبويب مشروع التخرج (Graduation Project) */}
              {activeSubTab === "project" && (
                <div className="project-guide-box fade-in">
                  <h4>🎓 كيف تناقش مشروع تخرجك كمهندس محترف؟</h4>
                  <p>مشروع التخرج هو أكبر اختبار عملي يظهر ما إذا كنت مهندساً يستحق التعيين فوراً أم مجرد حافظ للنظريات. ركز على الخطوات التالية:</p>

                  <div className="project-steps-list">
                    <div className="step-item">
                      <span className="step-num">1</span>
                      <div>
                        <strong>أساس التصميم وخريطة السريان (Design Basis &amp; PFD):</strong>
                        <span>اذكر الطاقة الاستيعابية للوحدة، مواصفات اللقيم (Feedstock Specs)، والمنتجات المطلوبة، واشرح مسار العملية خطوة بخطوة على الـ PFD.</span>
                      </div>
                    </div>
                    <div className="step-item">
                      <span className="step-num">2</span>
                      <div>
                        <strong>محاكاة العملية (Process Simulation):</strong>
                        <span>برر سبب اختيارك للبرنامج والـ Fluid Package، واذكر أصعب جزء واجهك في الـ Convergence وكيف تجاوزته.</span>
                      </div>
                    </div>
                    <div className="step-item">
                      <span className="step-num">3</span>
                      <div>
                        <strong>تحجيم المعدات (Equipment Sizing):</strong>
                        <span>كيف قمت بحساب أبعاد البرج وقطره وارتفاعه؟ وكيف اخترت أبعاد المبادلات والمضخات ومواصفات المحابس وفقاً لأكواد API و ASME؟</span>
                      </div>
                    </div>
                    <div className="step-item">
                      <span className="step-num">4</span>
                      <div>
                        <strong>الأمان واقتصاديات التشغيل (PSM &amp; Economics):</strong>
                        <span>دراسة المخاطر (HAZOP Study)، أنظمة تصريف الطوارئ (Flare &amp; Relief Systems)، وحسابات تكاليف التأسيس والتشغيل (CAPEX &amp; OPEX).</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* تبويب التدريب الميداني وإجراءات السلامة */}
              {activeSubTab === "training" && (
                <div className="training-safety-box fade-in">
                  <h4>🦺 أسئلة التدريب الصيفي وإجراءات السلامة الميدانية</h4>
                  <p>تفضل الشركات المهندس الذي يفهم لغة الموقع والمصنع ويطبق قواعد السلامة بدقة:</p>

                  <div className="safety-cards-grid">
                    <div className="safety-card">
                      <h5>📋 تصاريح العمل (Permit to Work - PTW)</h5>
                      <p>الفرق بين تصريح العمل الساخن (Hot Work) والبارد (Cold Work)، وتصريح دخول الأماكن المغلقة (Confined Space Entry) واختبار نسبة الأكسجين والغازات السامة (H2S, CO).</p>
                    </div>
                    <div className="safety-card">
                      <h5>🔒 العزل الآمن (LOTO - Lockout/Tagout)</h5>
                      <p>إجراءات عزل مصادر الطاقة الكهربائية والميكانيكية والموائع بالبلوف والأقفال قبل صيانة أي مضخة أو وعاء ضغط لضمان عدم حدوث تشغيل مفاجئ.</p>
                    </div>
                    <div className="safety-card">
                      <h5>🦺 مهمات الوقاية الشخصية (PPE)</h5>
                      <p>مهمات الحماية الميدانية الإلزامية: حذاء السلامة، الخوذة، نظارات الحماية، الملابس المقاومة للهب (FRC)، وسماعات حماية الأذن من الضوضاء.</p>
                    </div>
                    <div className="safety-card">
                      <h5>🚨 استجابة الطوارئ والـ HAZOP</h5>
                      <p>دراسات المخاطر وقابلية التشغيل (HAZOP Guide Words: More Flow, Less Temp, Reverse Flow)، وصمامات الإغلاق في حالات الطوارئ (Emergency Shutdown Valves - ESDVs).</p>
                    </div>
                  </div>
                </div>
              )}

              {/* تبويب معرفة الشركة والقطاع */}
              {activeSubTab === "company" && (
                <div className="company-prep-box fade-in">
                  <h4>🏢 معرفة الشركة ونشاطها الصناعي قبل الإنترفيو</h4>
                  <p>من أكبر الأخطاء أن تذهب لمقابلة عمل وأنت لا تعرف بالضبط ماذا تنتج هذه الشركة وما هي تقنياتها:</p>

                  <div className="company-checklist-grid">
                    <div className="chk-box">
                      <strong>نوع العمليات الأساسية:</strong>
                      <span>هل هي مصفاة تكرير (Refinery)؟ أم مصنع بتروكيماويات للبلمرة؟ أم محطة تسييل غاز (LNG)؟ أم شركة استشارات تصميم (EPC)؟</span>
                    </div>
                    <div className="chk-box">
                      <strong>لقيم المصنع والمنتجات:</strong>
                      <span>ما هو اللقيم الداخل (خام زيت، غاز طبيعي، إيثان، نافثا)؟ وما المنتجات الرئيسية (سولار Euro V، بولي بروبيلين، ميثانول، أمونيا)؟</span>
                    </div>
                    <div className="chk-box">
                      <strong>الطاقة الإنتاجية:</strong>
                      <span>كم برميل يومياً (BPD) تكرر المصفاة؟ أو كم مليون طن سنوياً ينتج مجمع البتروكيماويات أو الأسمدة؟</span>
                    </div>
                    <div className="chk-box">
                      <strong>التوسعات والمشروعات الحديثة:</strong>
                      <span>اقرأ آخر أخبار الشركة على موقعها الرسمي ولينكد إن؛ مثل إدخال وحدات جديدة أو مشروعات كفاءة الطاقة والهيدروجين.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
