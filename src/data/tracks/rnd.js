import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // R&D Engineer (rnd)
  // ==========================================
export const rndTrack = {
    id: "rnd",
    title: "R&D Engineer (مهندس البحث والتطوير)",
    desc: "ابتكار وتطوير المنتجات، تحسين كفاءة المحفزات الكيميائية، تصميم التجارب DOE، وتكبير العمليات من المعمل إلى المصنع (Scale-up).",
    coverage: "ok",
    underDevelopment: true,
    statusNote: "المسار قيد التطوير: يوضح المفاهيم والمعايير المطلوبة (بدون روابط مباشرة حالياً)",
    about: {
      study: [
        "تصميم التجارب الإحصائية (Design of Experiments - DOE): Full/Fractional Factorial, Response Surface Methodology (RSM), Taguchi.",
        "كيمياء وهندسة المحفزات (Heterogeneous Catalysis): تحضير ودراسة كفاءة الحفازات، قياس المساحة السطحية (BET)، وحركية التفاعل Kinetics.",
        "تقنيات التوصيف المتقدم للمواد (Materials Characterization): XRD, SEM, TEM, TGA/DSC, FTIR.",
        "قوانين ونظريات تكبير العمليات وتصميم الوحدات التجريبية (Scale-up Principles, Dimensional Analysis & Pilot Plants).",
        "حقوق الملكية الفكرية وبراءات الاختراع (Patent Landscaping, Prior Art Search & IP Protection).",
        "دراسات الجدوى التقنية-الاقتصادية السريعة (Techno-Economic Analysis - TEA) ودورة حياة المنتج (LCA)."
      ],
      work: [
        "تطوير صيغ منتجات جديدة (Formulation) مثل البوليمرات واللدائن المتقدمة، زيوت التزييت عالية الأداء، ومواد معالجة المياه والمضافات.",
        "تصميم وبناء وتشغيل المفاعلات المعملية المصغرة والوحدات التجريبية (Bench-scale & Pilot Plants) لاختبار تفاعلات جديدة.",
        "إجراء أبحاث تحسين عمر المحفزات (Catalyst Deactivation & Regeneration) لتقليل استهلاك الطاقة ورفع جودة ونقاوة المنتجات بالمصافي.",
        "تطبيق نمذجة المحاكاة الحاسوبية والمعادلات الحركية لدعم قرارات الانتقال بالعملية إلى الحجم التجاري (Scale-up to Commercial).",
        "كتابة الأوراق البحثية، صياغة وتسجيل براءات الاختراع، والتنسيق مع الجامعات والمراكز البحثية المتخصصة."
      ],
      workplaces: "مراكز الأبحاث والتطوير بشركات البتروكيماويات والكيماويات الكبرى (سابك SABIC, أرامكو Aramco R&D, Dow, BASF)، شركات تصنيع البوليمرات والأسمدة، شركات الأدوية ومستحضرات التجميل، ومعهد بحوث البترول والمركز القومي للبحوث.",
    },
    stages: [
      stage("تصميم التجارب وتطوير المنتجات (DOE & Product Formulation)", [
        r("Design of Experiments (DOE) & Statistical Optimization (Factorial & RSM)", "موضوع", "b", null, {
          bookNote: "منهجيات تخطيط التجارب لتقليل عدد المحاولات المعملية والوصول لأفضل تركيبة ونسب تشغيل بأقل تكلفة ووقت."
        }),
        r("Polymer Science & Advanced Material Formulation", "موضوع", "i", null, {
          bookNote: "تطوير خلطات البوليمرات واللدائن وإضافة المركبات المحسنة للأداء ومقاومة الحرارة والصدمات وتطبيقات البتروكيماويات."
        }),
        r("Patent Search, Prior Art & Intellectual Property (IP) Fundamentals", "موضوع", "b", null, {
          bookNote: "البحث في قواعد بيانات براءات الاختراع العالمية (Google Patents, Espacenet) وصياغة الابتكارات وحماية الملكية الفكرية."
        }),
        r("Minitab / JMP / Design-Expert for Experimental Analysis", "أداة", "i", null, {
          bookNote: "أدوات برمجية متخصصة في تحليل نتائج التجارب، نمذجة استجابة المتغيرات، وضبط التحسينات الإحصائية."
        }),
      ]),
      stage("المحفزات وتوصيف المواد (Catalysis & Characterization)", [
        r("Heterogeneous Catalysis & Reaction Kinetics in R&D", "موضوع", "i", null, {
          bookNote: "تحضير وتعديل المواد الحفازة، دراسة ميكانيكية التفاعلات الحركية، ومقاومة تراكم الكربون وتسمم الحفازات في العمليات الكيميائية."
        }),
        r("Surface Area & Porosimetry (BET Analysis - ASTM D3663)", "معيار", "i", null, {
          bookNote: "قياس المساحة السطحية وحجم وتوزيع المسام في المواد الصلبة والمحفزات باستخدام امتزاز الغازات الخاملة."
        }),
        r("Materials Characterization Techniques (XRD, SEM, TEM, AFM)", "موضوع", "a", null, {
          bookNote: "فحص التركيب البلوري ومورفولوجيا الأسطح النانوية والمجهرية للمواد الجديدة والمحفزات المتطورة."
        }),
        r("Thermal Analysis (TGA, DSC, DMA) for Polymers & Chemicals", "أداة", "i", null, {
          bookNote: "دراسة الاستقرار الحراري، درجات الانتقال الزجاجي (Tg)، ونقاط الانصهار والتحلل الحراري للمركبات المطورة."
        }),
      ]),
      stage("تكبير العمليات والجدوى التقنية (Scale-up & Pilot Plants)", [
        r("Chemical Process Scale-up Principles & Dimensional Analysis", "موضوع", "a", null, {
          bookNote: "معايير التشابه الهندسي والديناميكي والحراري للانتقال الآمن بالعملية من المعمل للوحدة التجريبية ثم للمستوى الصناعي."
        }),
        r("Pilot Plant Design, Instrumentation & Safe Operation", "موضوع", "a", null, {
          bookNote: "تصميم وتنفيذ الوحدات شبه الصناعية المصغرة لاختبار استقرار العملية الكيميائية وجمع بيانات التصميم النهائي."
        }),
        r("Early-Stage Techno-Economic Analysis (TEA) & ASPEN Economic Evaluation", "أداة", "a", null, {
          bookNote: "تقييم الجدوى الاقتصادية الرأسمالية والتشغيلية (CapEx & OpEx) للمسارات التكنولوجية المبتكرة قبل ضخ الاستثمارات."
        }),
        r("Life Cycle Assessment (LCA) for Sustainable Innovation", "معيار", "i", null, {
          bookNote: "تقييم الأثر البيئي والبصمة الكربونية للمنتجات والعمليات الجديدة من المهد إلى اللحد (Cradle-to-Grave)."
        }),
      ]),
    ],
  };
