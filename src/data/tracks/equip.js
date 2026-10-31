import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Equipment Engineer (equip)
  // ==========================================
export const equipTrack = {
    id: "equip",
    title: "Equipment Engineer",
    desc: "المضخات والضواغط والمبادلات والأفران والأبراج.",
    coverage: "ok",
    about: {
      study: [
        "Rotating Equipment: المضخات ومنحنيات Performance و NPSHa > NPSHr، الضواغط وأنظمة Anti-Surge، والتوربينات البخارية.",
        "Static Equipment: أبراج التقطير ومشاكل Flooding & Weeping، والفواصل ثنائية وثلاثية الأطوار.",
        "Heat Transfer Equipment: المبادلات الحرارية والأفران الصناعية وحسابات الكفاءة.",
        "Piping & Control Valves: خطوط الأنابيب ومحابس التحكم وأنظمة العزل والسلامة."
      ],
      work: [
        "العمل كـ Static & Rotating Equipment Engineer ومتابعة أداء الوحدات الميدانية.",
        "تشخيص الأعطال وحالات Cavitation والاهتزازات واختلال التبادل الحراري بالموقع.",
        "متابعة الصيانة الدورية والتجهيز لـ Turnarounds والعمرات الشاملة.",
        "مراجعة مواصفات قطع الغيار وبطاقات البيانات الفنية وصمامات الأمان."
      ],
      workplaces: "شركات التشغيل والصيانة (إيبروم، صان مصر، بترومنت)، مصافي التكرير، مجمعات البتروكيماويات، ومحطات معالجة وإنتاج الزيت والغاز.",
    },
    stages: [
      stage("الأنابيب والمضخات", [
        r(
          "Piping System Components",
          "ملف",
          "b",
          8,
          ["مقدمة", trackLinks.equip.stageOne.pipingIntro],
          ["متوسع", trackLinks.equip.stageOne.pipingMech],
          ["كورس م. السيد عامر", trackLinks.equip.stageOne.pipingAmer],
          {
            bookNote: "ملفات Piping System Components وكورس م. السيد عامر، لشرح مكونات خطوط الأنابيب والفلانجات وعوازل الضغط والجوانات ومواد التصنيع المعتمدة وفق كود ASME B31.3، وتصنيف فئات الضغط (Rating 150#, 300#, 600#).",
            tips: "احفظ العلاقة بين Schedule وسمك جدار الأنبوبة والضغط المسموح."
          }
        ),
        r(
          "Piping & Pipeline Course (م. أحمد فتحي - ميكانزم)",
          "كورس",
          "b",
          8,
          ["مشاهدة القائمة (YouTube)", trackLinks.equip.stageOne.pipingCourseFathy],
          {
            bookNote: "كورس تطبيقي متميز في خطوط الأنابيب والمواسير والتركيبات (Piping & Pipeline) للمهندس أحمد فتحي؛ يشرح أنواع المواد والمعادن (Metallic Materials)، ومواصفات الأنابيب (Pipes)، وجميع أشكال التوصيلات والتركيبات (Elbow, Tee, Reducer, Cap, Clamp)، والفلانجات والجوانات (Flanges & Gaskets) وفق المعايير القياسية والاستاندرد العالمية.",
            sections: [
              {
                title: "محاور وفيديوهات الكورس",
                points: [
                  "1. Metallic Materials Explanation - شرح المواد والمعادن المستخدمة في تصنيع الخطوط",
                  "2. Pipes Explanation - شرح وتصنيف الأنابيب الهندسية ومقاساتها",
                  "3. Fittings Explanation - شرح الوصلات والتركيبات (Elbow - Tee - Reducer - Cap - Clamp)",
                  "4. Flanges And Gasket Explanation - شرح الفلانجات والجوانات وعزل التسريب واختيار الاستاندرد"
                ]
              }
            ]
          }
        ),
        r(
          "Designing Piping Systems: Pipe Fittings, Flanges & Valves (WR Training)",
          "كورس",
          "b",
          8,
          ["رابط الكورس (Udemy)", trackLinks.equip.stageOne.pipingDesignWrTraining],
          {
            bookNote: "كورس هندسي تطبيقي متقدم وشامل من WR Training على منصة Udemy (تقييم 4.7 من أكثر من 4,400 مهندس)؛ يشرح أساسيات ومكونات شبكات الأنابيب الصناعية باستخدام الرسوم والمحاكاة ثلاثية الأبعاد (3D Animation) والمقاطع العرضية، ويغطي الأنابيب والفيتنجز والفلانشات والصمامات والمشغلات، والأكواد القياسية ASME B31.3 / B16.5، وورشة عملية متكاملة لتصميم شبكة أنابيب من الصفر.",
            sections: [
              {
                title: "محاور وفصول الكورس (9 أقسام تفصيلية)",
                points: [
                  "1. PIPE: مقاسات وجداول وسماكات وتصنيع ومواد الأنابيب (Pipe Sizes, Schedules & Materials - 13 محاضرة)",
                  "2. PIPE FITTINGS: ملحقات ووصلات المواسير وتغيير الاتجاه والأقطار (Elbows, Tees, Reducers, Caps, Couplings - 21 محاضرة)",
                  "3. FLANGE BASICS: أنواع الفلانشات (Weld Neck, Slip-on, Blind)، أوجه الإحكام والجوانات، وتصنيفات الضغط ASME (20 محاضرة)",
                  "4. VALVE BASICS — Functions & Basic Parts: وظائف الصمامات ومكوناتها وأجزائها الداخلية (12 محاضرة)",
                  "5. VALVE BASICS — Types of Valves: أنواع الصمامات الصناعية (Gate, Globe, Ball, Butterfly, Check, Plug - 17 محاضرة)",
                  "6. VALVE ACTUATOR BASICS: مشغلات الصمامات الهوائية والهيدروليكية والكهربائية (8 محاضرات)",
                  "7. STANDARD PIPING DETAILS: تفاصيل ورسومات الأنابيب القياسية والدعامات والوصلات المرنة (13 محاضرة)",
                  "8. PIPING CODES & SPECIFICATIONS: أكواد ومواصفات الأنابيب العالمية (ASME B31.3, ASME B31.1, B16.5, B16.47 - 21 محاضرة)",
                  "9. PRACTICE SESSION — Designing a Piping System: ورشة تدريبية عملية خطوة بخطوة لتصميم شبكة أنابيب متكاملة (3 محاضرات)"
                ]
              }
            ],
            tips: "كورس فائق القيمة لمهندسي العمليات والميكانيكا والتصميم (Process & Piping Engineers) لفهم ميكانيكا الخطوط والفيتنجز ومطابقتها للأكواد العالمية."
          }
        ),
        r(
          "Piping & Storage Tanks Engineering: تصميم خطوط الغاز وخزانات البترول (د. مصطفى نوفل)",
          "كورس",
          "i",
          8,
          ["مشاهدة القائمة (YouTube)", trackLinks.equip.stageOne.pipingStorageNofal],
          {
            bookNote: "سلسلة محاضرات أكاديمية وتطبيقية قيمة يقدمها د. مصطفى نوفل (أستاذ هندسة تكرير البترول بجامعة السويس) عبر قناة Process Safety بالعربي؛ تشرح أسس وتطبيقات تصميم خزانات البترول (Storage Tanks) وهندسة خطوط نقل الغاز الطبيعي (Gas Pipelines) مع أمثلة حسابية ومعايير أمان العمليات.",
            sections: [
              {
                title: "محاور ومحتويات السلسلة",
                points: [
                  "1. تصميم خزانات البترول (Petroleum Storage Tanks Design وفق معايير API 650).",
                  "2. هل نقل الغاز آمن فعلاً؟ اشتراطات سلامة خطوط النقل ومخاطر التسريب.",
                  "3. هندسة الغاز - تصميم خطوط نقل الغاز الطبيعي (Gas Pipelines Design).",
                  "4. أمثلة وحسابات هيدروليكية محلولة لتصميم خطوط نقل وتوزيع الغاز."
                ]
              }
            ],
            tips: "تصميم خطوط الغاز يتطلب فهم معادلات هبوط الضغط والسريان القابل للانضغاط واشتراطات المسافات الآمنة للخزانات البترولية."
          }
        ),
        r(
          "Pipeline Sealing & Leak Prevention (Eng. Sarah Zidan)",
          "فيديو",
          "b",
          8,
          ["مشاهدة الفيديو", trackLinks.equip.stageOne.pipelineSealingSarah],
          {
            bookNote: "فيديو توضيحي قصير يُبرز تقنيات وطرق إحكام غلق خطوط الأنابيب (Pipeline Sealing) لمنع تسريب السوائل في خطوط النقل الصناعية والبترولية وحماية المنشأة."
          }
        ),
        r(
          "Valve Basics (م. السيد عامر)",
          "فيديو",
          "b",
          9,
          ["مشاهدة (YouTube)", trackLinks.equip.stageOne.valvesAmer],
          {
            bookNote: "محاضرة المهندس السيد عامر ضمن سلسلة Friday Discussion (AIChE SUSC) لشرح أساسيات ومفاهيم الصمامات (Valves Basics) للمهندسين الكيميائيين والميكانيكيين؛ تغطي أنواع الصمامات الصناعية (Gate, Globe, Check, Ball, Butterfly, Control Valves)، وأجزاء الصمام، ومحددات الاختيار بين العزل والتنظيم والتطبيقات الميدانية."
          }
        ),
        r(
          "Valves Course (Eng. Sarah Zidan)",
          "كورس",
          "b",
          9,
          ["مشاهدة القائمة", trackLinks.equip.stageOne.valvesSarah],
          {
            bookNote: "دورة متخصصة في الصمامات والمحابس للمهندسة سارة زيدان، تشرح أنواع الصمامات الصناعية (Gate, Globe, Ball, Check, Plug, Butterfly)، أجزاء المحبس، ونظرية التشغيل وتطبيقات العزل والتحكم.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Valves P&ID symbols - رموز البلوف (المحابس) في الـ P&ID",
                  "2. Actuators 'Automatic Valves' - Pneumatic, Hydraulic and Electrically operated actuators & mechanism",
                  "3. Safety Valve: service and components, comparison between safety valve and relief valve",
                  "4. Relief Valve: Pressure RV, service, components, spring and rupture RV",
                  "5. Diaphragm valve: components and service",
                  "6. Plug Valve: components, operating service",
                  "7. Butterfly Valve: Service, Components, Flow control",
                  "8. Check valve: service, swing, lift, stop and ball check valve, material selection",
                  "9. Ball Valve service and components",
                  "10. Globe valve service, disc types, material selection",
                  "11. Gate valve service, components, material selection",
                  "12. Valve components part (2), rising and non-rising stem valves - أجزاء البلفات أو الصمامات الجزء 2",
                  "13. Valve components part (1) - مكونات البلفات أو المحابس الجزء الأول",
                  "14. Valves connection on piping system, valve capacity, bridgewall marking - طرق توصيل الصمامات بالخطوط",
                  "15. Valves: definition, application, function and classification - الصمامات وأنواعها واستخداماتها"
                ]
              }
            ]
          }
        ),
        r(
          "Pumps: Types و Theory",
          "كورس",
          "i",
          10,
          ["1", trackLinks.equip.stageOne.pumps2],
          ["2 (م. أحمد يحيى)", trackLinks.equip.stageOne.pumps3],
          {
            bookNote: "سلسلة فيديوهات المضخات وكورس م. أحمد يحيى.. نظرية التشغيل للمضخات الطاردة المركزية والإزاحة الموجبة (Centrifugal vs Positive Displacement)، وطريقة توليد الضغط الحركي، وكيفية التعامل مع الموائع اللزجة والملاط."
          }
        ),
        r(
          "Pumps Course (Eng. Sarah Zidan)",
          "كورس",
          "b",
          10,
          ["مشاهدة القائمة", trackLinks.equip.stageOne.pumpsSarah],
          {
            bookNote: "دورة شاملة في المضخات الهندسية للمهندسة سارة زيدان، تشرح أنواع المضخات الطاردة المركزية والإزاحة الموجبة، منحنيات الأداء (Pump Curves)، وحسابات الـ NPSH والـ Head.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Pumps P&ID",
                  "2. Plunger pump",
                  "3. Piston pump - مضخة المكبس",
                  "4. Diaphragm pump",
                  "5. Reciprocating pump - المضخة الترددية",
                  "6. Lobe pump",
                  "7. Vane pump - flexible and sliding",
                  "8. External and Internal Gear Pump - مضخة التروس",
                  "9. Twin and Triple Screw Pump",
                  "10. Screw Pump, rotor and stator",
                  "11. Rotary Pumps - المضخة الدوارة",
                  "12. Axial Pump - مضخات التدفق المحوري",
                  "13. Real pump curves, pump selection part (2) - اختيار المضخة المناسبة باستخدام المنحنيات",
                  "14. Pump performance curve - part (1) - منحنى أداء المضخة أو الطلمبة",
                  "15. Centrifugal pump classification - تصنيف مضخة الطرد المركزي",
                  "16. Centrifugal pump : impeller &types, motor, mechanical seal, packing - مكونات مضخة الطرد المركزي",
                  "17. Centrifugal pump: definition, casing, shaft, volute, inlet and drain - مضخة الطرد المركزي",
                  "18. Minimum flow line in pumps - حل لمشكلة التكهف في الطلمبات",
                  "19. Pump cavitation: definition, causes and prevention - التكهف في الطلمبات أسبابه ومقاومته",
                  "20. Pump NPSHa, static head, suction head, vapor pressure head, friction head - أنواع الضغوط في الطلمبات",
                  "21. Vapor lock in pumps: definition, reasons and solutions - مشكلة الطلمبات وحلها",
                  "22. Pump priming, slip, suction line, discharge line - مفاهيم أساسية لفهم الطلمبات",
                  "23. Positive displacement pump (rotary and reciprocating pumps) - طلمبات الإزاحة الموجبة",
                  "24. Pump definition, classification 'Dynamic & Positive displacement' - الطلمبات وأنواعها"
                ]
              }
            ]
          }
        ),

        r(
          "Centrifugal Pump Course (م. أحمد فتحي - ميكانزم)",
          "كورس",
          "i",
          10,
          ["مشاهدة القائمة (YouTube)", trackLinks.equip.stageOne.centrifugalPumpFathy],
          {
            bookNote: "دورة تخصصية شاملة وعملية في المضخات الطاردة المركزية (Centrifugal Pumps) للمهندس أحمد فتحي؛ تغطي تصنيف الطلمبات، نظرية التشغيل والمكونات الداخلية (Impeller, Casing, Shaft, Bearing, Sealing)، وظاهرة التكهف (Cavitation)، ومنحنيات النظام والأداء (System & Pump Curves)، وطرق التحضير (Priming)، وتوصيلات الأنابيب، وحل مشاكل التشغيل والصيانة (Troubleshooting).",
            sections: [
              {
                title: "محاور وفيديوهات دورة المضخات الطاردة المركزية (13 فيديو)",
                points: [
                  "1. Introduction and content - مقدمة عامة ومحتوى الدورة",
                  "2. Pumps Classifications - تصنيف الطلمبات الهندسية",
                  "3. Operation Principles and components - مبادئ التشغيل والمكونات الميكانيكية",
                  "4. Impeller - الريشة والدافع وتأثير شكله على السريان والضغط",
                  "5. Casing - الغلاف الخارجي وغرفة الحلزون (Volute)",
                  "6. Shaft, Coupling, and Alignment - عمود الإدارة والوصلات وضبط المحاذاة",
                  "7. Bearing And Sealing - كراسي التحميل وعوازل التسريب الميكانيكية",
                  "8. Cavitation - ظاهرة التكهف وتأثيرها على تآكل المعدة وتدمير الريشة",
                  "9. System Curve - منحنى المنظومة وحسابات الفقد في الاحتكاك",
                  "10. Pump Curves and Selection - منحنيات أداء المضخة ونقطة الكفاءة المثلى (BEP)",
                  "11. Priming - طرق تحضير المضخة وطرد الجيوب الغازية",
                  "12. Piping - اشتراطات توصيل خطوط السحب والطرد للمضخات",
                  "13. Operation And Troubleshooting - التشغيل الميداني وتشخيص وحل الأعطال"
                ]
              }
            ],
            tips: "تأكد من استيعاب العلاقة بين الـ System Curve ومنحنى الـ Pump Curve لاختيار المضخة عند أفضل نقطة تشغيلية (BEP - Best Efficiency Point)."
          }
        ),

        r(
          "PUMPS Guide (دليل المضخات الشامل والمفاهيم والكيرفات)",
          "ملف",
          "b",
          10,
          ["تحميل الكتيب (Google Drive)", trackLinks.equip.stageOne.pumpsGuidePdf],
          {
            bookNote: "مرجع هندسي شامل ومبسط يغطي هندسة المضخات خطوة بخطوة؛ بدءاً من التعريف والتصنيفات، مروراً بأهم المصطلحات التشغيلية ورموز الـ P&ID، وحتى أشهر الأعطال الميدانية ومنحنيات الأداء وطرق الاختيار.",
            sections: [
              {
                title: "محاور ومحتويات الدليل (5 فصول)",
                points: [
                  "01. Introduction: Includes pumps definition & classification (تعريف المضخات وتصنيفاتها: الإزاحة الموجبة والطرد المركزي)",
                  "02. Key concepts: Important terms like priming, slip, suction line, discharge line & others (المفاهيم الأساسية: التحضير، الانزلاق، خطوط السحب والطرد)",
                  "03. Pumps: Discussing different types of pumps, their mechanisms, components, P&ID symbols and more (أنواع المضخات، آليات العمل، المكونات، ورموز P&ID)",
                  "04. Common problems: Problems facing pumps like vapor lock & cavitation, what causes them and how to face them (المشاكل الشائعة: التكهف وحبس البخار وحلولها)",
                  "05. Performance curves: Discussing pumps performance curve and selection criteria according to the curves (منحنيات الأداء ومعايير اختيار المضخة المناسبة)"
                ]
              }
            ],
            tips: "مرجع مثالي ومكثف لمراجعة أساسيات المضخات وحل المشاكل التشغيلية ومعايير الاختيار وفق الكيرفات والـ P&ID symbols."
          }
        ),

        r(
          "Centrifugal Pump Fundamentals (أساسيات المضخات الطاردة المركزية - Chapter 2)",
          "ملف",
          "i",
          10,
          ["تحميل الفصل (Google Drive)", trackLinks.equip.stageOne.centrifugalFundamentalsPdf],
          {
            bookNote: "مرجع تخصصي متقدم يركز على الأسس الهيدروليكية والميكانيكية للمضخات الطاردة المركزية (Centrifugal Pumps)؛ يشمل ديناميكا السوائل داخل الريشة (Impeller) والغلاف (Casing)، ونظرية تحويل الطاقة الحركية إلى ضغط هيدروليكي (Dynamic Head Generation).",
            sections: [
              {
                title: "محتويات أساسيات المضخات الطاردة المركزية",
                points: [
                  "Operating Principle: تحويل الطاقة الميكانيكية للعمود إلى طاقة حركة ثم إلى ضغط هيدروليكي",
                  "Impeller Types & Design: أنواع الريش (Open, Semi-open, Enclosed) والريش المفردة والمزدوجة",
                  "Casing Configurations: الغلاف الحلزوني (Volute) وموزعات التوجيه (Diffusers)",
                  "Fluid Dynamics: مثلثات السرعة وعلاقة معدل التدفق بالضغط المتولد"
                ]
              }
            ],
            tips: "مفيد جداً لفهم الأساس الرياضي والفيزيائي لكيفية توليد المضخة الطاردة المركزية للضغط الهيدروليكي."
          }
        ),

        r(
          "Vapor Pressure, NPSH & Pump Cavitation (التكهف وضغط التبخير والـ NPSH)",
          "ملف",
          "i",
          10,
          ["تحميل المرجع (Google Drive)", trackLinks.equip.stageOne.pumpCavitationNpshPdf],
          {
            bookNote: "مرجع هندسي تفصيلي باللغة العربية حول أخطر المشكلات التشغيلية في المضخات وهي ظاهرة التكهف (Cavitation)؛ يشرح بالتفصيل العلاقة بين ضغط التبخير (Vapor Pressure)، ومفهوم الـ Net Positive Suction Head بنوعيه (NPSHa المتاح و NPSHr المطلوب)، وحسابات خط السحب لتفادي انهيار فقاعات البخار وتآكل ريشة المضخة.",
            sections: [
              {
                title: "محاور دراسة التكهف والـ NPSH وضغط التبخير",
                points: [
                  "مفهوم ضغط التبخير (Vapor Pressure) وظروف تحول السائل إلى بخار عند درجة حرارة التشغيل",
                  "مفهوم الـ Net Positive Suction Head (NPSH) والفرق بين NPSHa (المتاح هيدروليكياً) و NPSHr (المطلوب من الشركة الصانعة)",
                  "آلية حدوث التكهف (Cavitation Mechanics): تكون الفقاعات البخارية في منطقة السحب وانهيارها العنيف عند منطقة الضغط العالي",
                  "الآثار التدميرية للتكهف: النقر الميكانيكي (Pitting)، الاهتزازات الشديدة، تراجع معدل السريان والضغط، وتلف عوازل التسريب",
                  "طرق التحكم والوقاية: زيادة ضغط السحب، خفض الفواقد الاحتكاكية، التحكم في درجة حرارة السائل، واستخدام خطوط الـ Minimum Flow"
                ]
              }
            ],
            tips: "احرص دائماً في الحسابات التصميمية والتشغيلية على أن يكون NPSHa > NPSHr بهامش أمان (Safety Margin) لا يقل عن 0.5 إلى 1 متر لتجنب التكهف."
          }
        ),

        r(
          "Pumps: Simulation على HYSYS",
          "فيديو",
          "i",
          11,
          trackLinks.equip.stageOne.pumpSim,
          {
            bookNote: "تطبيق عملي لمحاكاة المضخات على برنامج Aspen HYSYS وحساب استهلاك الكهرباء وإدخال كيرفات الأداء وملاحظة تأثير تغير معدل السريان على كفاءة الضخ."
          }
        ),
        r(
          "حقيبة تدريب المصانع: الطلمبات والصمامات",
          "كورس",
          "i",
          53,
          ["Pumps Drive", trackLinks.equip.stageOne.plantPumps],
          ["Valves Drive", trackLinks.equip.stageOne.plantValves],
          {
            bookNote: "مجلدات عملية متخصصة في تدريب المصانع على المضخات والصمامات، تحتوي على صور وفيديوهات ومذكرات التشغيل والصيانة الحقيقية لربط الشرح بواقع الموقع الميداني."
          }
        ),
        r(
          "Rotating Equipment (Eng. Mohamed Ayman)",
          "محاضرة",
          "i",
          10,
          ["مشاهدة (YouTube)", trackLinks.equip.stageOne.rotatingEquipmentAyman],
          {
            bookNote: "محاضرة هندسية تطبيقية موسعة (2:46:37) للمهندس محمد أيمن تشرح المعدات الدوارة في المصانع (المضخات، الضواغط، التوربينات)، نظرية العمل، ومحددات التشغيل والصيانة."
          }
        ),
        r(
          "Control Valves (Eng. Mohamed Ayman)",
          "محاضرة",
          "b",
          9,
          ["مشاهدة (YouTube)", trackLinks.equip.stageOne.controlValvesAyman],
          {
            bookNote: "محاضرة تخصصية للمهندس محمد أيمن تشرح صمامات التحكم (Control Valves)، أنواعها، المشغلات (Actuators)، خصائص السريان (Flow Characteristics)، ووضعيات الأمان (Fail Safe Modes)."
          }
        ),
      ]),
      stage("الضواغط والتوربينات", [
        r(
          "Compressors: Types و Theory",
          "كورس",
          "i",
          12,
          ["1", trackLinks.equip.stageTwo.comp1],
          ["2 (م. أحمد يحيى)", trackLinks.equip.stageTwo.comp2],
          ["تصميم وحسابات الضواغط (د. مصطفى نوفل)", trackLinks.design.stageThree.equipmentDesignNofal],
          {
            bookNote: "شرح أنواع الضواغط الطاردة والترددية ونظرية انضغاط الغازات وحسابات معامل الانضغاطية Z والفرق بين ضواغط الإزاحة الموجبة والضواغط الديناميكية."
          }
        ),
        r(
          "Compressor Course (Eng. Sarah Zidan)",
          "كورس",
          "i",
          12,
          ["مشاهدة القائمة", trackLinks.equip.stageTwo.compressorsSarah],
          {
            bookNote: "دورة متقدمة في الضواغط الهندسية للمهندسة سارة زيدان، تشرح أنواع الضواغط الغازية (Centrifugal & Reciprocating Compressors)، منحنيات الأداء، ومراحل الانضغاط مع التبريد.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Compressors P&ID",
                  "2. Supporting Equipment with Compressor - المعدات المصاحبة للضاغط",
                  "3. Surge in compressor - أهم مشاكل الضواغط",
                  "4. Piston Compressor - Double acting compressor",
                  "5. Liquid Ring Compressor",
                  "6. Lobe Compressor",
                  "7. Sliding Vane Compressor",
                  "8. Screw Compressor",
                  "9. Positive Displacement Compressor - ضواغط الإزاحة الموجبة",
                  "10. Axial Flow Compressor - ضواغط التدفق المحوري",
                  "11. Centrifugal compressor and Impeller Types - ضواغط الطرد المركزي",
                  "12. Dynamic Compressor/Centrifugal compressor - الضواغط الديناميكية",
                  "13. Compression ratio in compressors",
                  "14. Principles of compression - أساسيات عملية الضغط",
                  "15. Compressors introduction and types - مقدمة عن الضواغط"
                ]
              }
            ]
          }
        ),
        r("Compressors على HYSYS (م. أحمد مختار)", "فيديو", "i", 12, trackLinks.equip.stageTwo.compSimMokhtar),
        r(
          "ويبينار Turboexpander (بوست)",
          "منشور",
          "a",
          13,
          trackLinks.equip.stageTwo.turboexpanderPost,
          {
            bookNote: "منشور وويبينار متخصص في تكنولوجيا الـ Turboexpander المستخدمة في تسييل الغاز الطبيعي واسترجاع سوائل الغاز (NGL Recovery) عبر التمدد فائق التبريد (Isentropic Expansion)."
          }
        ),
        r(
          "Internal Combustion Engine Course (م. أحمد فتحي - ميكانزم)",
          "كورس",
          "i",
          15,
          ["مشاهدة الكورس (YouTube)", trackLinks.equip.stageTwo.iceCourseFathy],
          ["جميع أنظمة السيارة", trackLinks.equip.stageTwo.carSystemsFathy],
          {
            bookNote: "دورة تفصيلية متكاملة في محركات الاحتراق الداخلي (Internal Combustion Engines - ICE) وأنظمة القدرة الميكانيكية للمهندس أحمد فتحي؛ تشرح نظرية عمل المحرك وأجزائه الميكانيكية، ومنظومات سحب الهواء والوقود والإشعال والعادم، ودورات التبريد والتزييت والتحكم الإلكتروني، وتشخيص المشاكل الشائعة مثل انخفاض الكفاءة وارتفاع درجات الحرارة وفشل كراسي التحميل وتسرب الزيوت والوقود.",
            sections: [
              {
                title: "محاور كورس محركات الاحتراق الداخلي (10 فيديوهات)",
                points: [
                  "1. Introduction - مقدمة في محركات الاحتراق الداخلي والتحويل الطاقي",
                  "2. Engine Components and Configurations - مكونات المحرك والترتيب الميكانيكي",
                  "3. Terminology And Performance Parameters - المصطلحات ومعايير الأداء والكفاءة",
                  "4. Intake System - منظومة سحب الهواء والفلترة",
                  "5. Fuel Systems - منظومة حقن وتوزيع الوقود ومشاكل الخلط",
                  "6. Ignition Systems - منظومة الإشعال وتوقيت الشرارة",
                  "7. Exhaust Systems - منظومة العادم وتصريف النواتج",
                  "8. Engine Lubrication - منظومة التزييت وحماية الأجزاء المتحركة",
                  "9. Cooling Systems - منظومة التبريد والتخلص من الحرارة الزائدة",
                  "10. Engine Control Module - وحدة التحكم الإلكترونية (ECM)",
                  "11. Advanced Topics - تشخيص الأعطال الشائعة وطرق الصيانة الوقائية"
                ]
              }
            ]
          }
        ),
        r("Pumps & Compressors Course (ChE & MechE)", "كورس", "i", 14, ["تحميل الكورس", trackLinks.equip.stageTwo.pumpsCompressorsCourse]),
        r(
          "Reciprocating Compressors (كورس الضواغط الترددية الشامل - Google Drive)",
          "كورس",
          "i",
          12,
          ["تحميل الكورس (Google Drive)", trackLinks.equip.stageTwo.compressorCourseDrive],
          {
            bookNote: "مرجع وكورس هندسي متخصص وشامل في الضواغط الترددية (Reciprocating Compressors).. يغطي نظرية عمل ضواغط الإزاحة الموجبة، ومكونات الأسطوانة والكباس وعمود المرفق (Crankshaft & Piston)، وصمامات السحب والطرد، وطرق التحكم في السعة (Clearance Pockets & Unloaders)، وتطبيقات ضغط الغازات الهيدروكربونية والهيدروجين في المصافي.",
            sections: [
              {
                title: "أهم محاور كورس الضواغط الترددية",
                points: [
                  "نظرية عمل ضواغط الإزاحة الموجبة ومخطط الضغط والحجم (P-V Diagram).",
                  "مكونات الضاغط الميكانيكية: الأسطوانات، الكباسات، الحلقات، وموانع التسريب (Piston Rings & Packing).",
                  "صمامات الضواغط الترددية (Compressor Valves: Plate, Channel, Poppet).",
                  "أنظمة التحكم في السعة وتفريغ الحمل (Capacity Control, Step Unloaders & Clearance Pockets).",
                  "أنظمة التزييت والتبريد ومعايير الاهتزازات والصيانة المعتمدة وفق كود API 618."
                ]
              }
            ],
            tips: "الضواغط الترددية من أكثر المعدات طلباً في قطاع الغاز الطبيعي ومعالجة الهيدروجين نظراً لقدرتها على الوصول لضغوط فائقة."
          }
        ),
        r(
          "حقيبة تدريب المصانع: الضواغط والتوربينات",
          "كورس",
          "i",
          53,
          ["Compressors Drive", trackLinks.equip.stageTwo.plantCompressors],
          ["Turbines Drive", trackLinks.equip.stageTwo.plantTurbines],
          {
            bookNote: "مجلدات تدريب المصانع العملية على ضواغط الغاز والتوربينات البخارية والغازية من واقع التشغيل الميداني وأنظمة التزييت وموانع التسريب (Dry Gas Seals)."
          }
        ),
      ]),
      stage("المبادلات والأفران", [
        r(
          "Shell & Tube: Overview و Theory (م. باهر الشيخ)",
          "كورس",
          "i",
          16,
          trackLinks.equip.stageThree.stOverview,
          {
            bookNote: "كورس م. باهر الشيخ.. شرح نظري وتطبيقي شامل للمبادلات الحرارية ذات الغلاف والأنبوب وتصنيفات TEMA وتوزيع مسارات السريان (Passes) ومكونات الحزم الأنبوبية."
          }
        ),
        r(
          "Heat Exchanger Course (Eng. Sarah Zidan)",
          "كورس",
          "i",
          16,
          ["مشاهدة القائمة", trackLinks.equip.stageThree.heatExchangerSarah],
          {
            bookNote: "دورة المبادلات الحرارية للمهندسة سارة زيدان، تغطي نظرية وتصميم المبادلات ذات الغلاف والأنبوب (Shell & Tube Heat Exchangers) وحسابات انتقال الحرارة وهبوط الضغط.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. The impact of increasing number of baffles at Heat Exchanger",
                  "2. Heat Exchanger P&ID",
                  "3. Air Cooled Heat Exchanger",
                  "4. Plate and Frame Heat Exchanger",
                  "5. Reboilers - Kettle Reboiler (الغلايات)",
                  "6. Heat Exchanger: Tube Sheet and Baffles",
                  "7. Heat Exchanger: Heads, Shell, Tubes",
                  "8. Fluid Allocation in Heat Exchanger - what to put at tube side or at shell side",
                  "9. Factors affecting Heat transfer",
                  "10. Floating Head Heat Exchanger",
                  "11. U - Tube Heat Exchanger",
                  "12. Fixed Tube Heat Exchanger",
                  "13. Shell & Tube Heat Exchanger Classification",
                  "14. Shell and Tube Heat Exchanger - Part 1",
                  "15. Hairpin Heat Exchanger",
                  "16. Double Pipe Heat Exchanger",
                  "17. Heat Exchanger Problems - Parallel and Series Flow",
                  "18. Laminar and Turbulent Flow & Reynolds Number",
                  "19. Heat Transfer - How to increase heat transfer",
                  "20. Heat Exchanger Introduction"
                ]
              }
            ]
          }
        ),
        r(
          "Aspen EDR: مقدمة وتصميم",
          "فيديو",
          "i",
          17,
          ["مقدمة", trackLinks.equip.stageThree.edrIntro],
          ["تصميم", trackLinks.equip.stageThree.edrDesign],
          {
            bookNote: "برنامج Aspen Exchanger Design & Rating (EDR).. الأداة القياسية عالمياً في تصميم وتدقيق المبادلات الحرارية ومحاكاة الترسبات (Fouling) وتوليد التقارير الهندسية."
          }
        ),
        r(
          "Heat Exchanger Cleaning Techniques & High Pressure Hydroblasting",
          "فيديو",
          "b",
          17,
          ["تقنيات التنظيف (Cleaning Techniques)", trackLinks.equip.stageThree.hxCleaning],
          ["غسيل الأنابيب بضغط الماء العالي (م. سارة زيدان)", trackLinks.equip.stageThree.hxCleaningSarah],
          {
            bookNote: "فيديوهات عملية توضح تقنيات تنظيف حزم أنابيب المبادلات الحرارية المتبعة في العمرات والصيانة الدورية بالمصانع، وبخاصة ضخ الماء فائق الضغط (High Pressure Hydroblasting) لإزالة الرواسب والتكلسات (Fouling) واستعادة كفاءة التبادل الحراري."
          }
        ),
        r(
          "Air Coolers (Coulson 12.16)",
          "فيديو",
          "i",
          19,
          ["شرح", trackLinks.equip.stageThree.airCoolers],
          ["EDR", trackLinks.equip.stageThree.airCoolerEdr],
          {
            bookNote: "المبردات الهوائية (Fin-Fan Coolers) وفق مرجع كولسون والتصميم على Aspen EDR.. بديل اقتصادي لمياه التبريد في المناطق الجافة بحسابات الأنابيب ذات الزعانف (Finned Tubes)."
          }
        ),
        r("Plate & Frame (Coulson 12.12)", "فيديو", "i", 19, ["EDR", trackLinks.equip.stageThree.plateHxEdr]),
        r(
          "Heat Exchangers, Air Coolers & Condensers Design (د. مصطفى نوفل)",
          "كورس",
          "i",
          17,
          ["مشاهدة القائمة (YouTube)", trackLinks.equip.stageThree.heatExchangersNofal],
          {
            bookNote: "دورة تخصصية في التصميم الحراري والهيدروليكي لمعدات التبادل الحراري يقدمها د. مصطفى نوفل (أستاذ هندسة تكرير البترول بجامعة السويس) عبر قناة Process Safety بالعربي؛ تشرح أسرار تصميم المبادلات الأنبوبية والمبردات الهوائية ومكثفات البترول والمكثفات المائية.",
            sections: [
              {
                title: "محاور ومحتويات الدورة",
                points: [
                  "1. أساسيات وتصنيف تصميم معدات البترول والعمليات الصناعية.",
                  "2. تصميم المبردات الهوائية (Air Coolers Design) ومعايير الأنابيب ذات الزعانف.",
                  "3. أسرار وحسابات تصميم المبادلات الحرارية (Heat Exchangers Sizing & Rating).",
                  "4. تصميم مكثفات البترول والمكثفات المائية (Water Condensers) وحسابات التكثيف."
                ]
              }
            ],
            tips: "الربط بين الحسابات الأكاديمية لمساحة التبادل والسرعات القصوى وهبوط الضغط المسموح يمنحك أساساً متيناً قبل استخدام برامج EDR و HTRI."
          }
        ),
        r(
          "Fired Heaters",
          "كورس",
          "i",
          21,
          ["كورس", trackLinks.equip.stageThree.firedHeaterCourse],
          ["API", trackLinks.equip.stageThree.firedHeaterApi],
          ["الكفاءة", trackLinks.equip.stageThree.firedHeaterEff],
          ["HYSYS", trackLinks.equip.stageThree.firedHeaterHysys],
          ["فيديوهات المواصفات", trackLinks.equip.stageThree.api560],
          {
            bookNote: "كورس الأفران ومواصفات API 560 وحساب الكفاءة الحرارية والمحاكاة على HYSYS.. معدة حيوية للحرارات الفائقة في التكرير تشمل غرف الإشعاع والحمل وتوزيع السحب والاحتراق."
          }
        ),
        r(
          "حقيبة تدريب المصانع: المبادلات وانتقال الحرارة",
          "كورس",
          "i",
          53,
          ["Heat Exchangers Drive", trackLinks.equip.stageThree.plantExchangers],
          ["Nature of Heat Drive", trackLinks.equip.stageThree.plantHeat],
          {
            bookNote: "مجلدات تدريب المصانع المتخصصة في المبادلات الحرارية والظواهر الحرارية الميدانية ومشاكل التآكل وصيانة الحزم الأنبوبية (Tube Bundles)."
          }
        ),
      ]),
      stage("المرافق", [
        r(
          "Boilers",
          "كورس",
          "b",
          18,
          trackLinks.equip.stageFour.boilers,
          {
            bookNote: "غلايات البخار الصناعية.. توليد البخار عالي ومتوسط ومنخفض الضغط (HP, MP, LP Steam) ومعالجة مياه التغذية (BFW) ونزع الأكسجين لمنع انفجار أو تآكل المواسير."
          }
        ),
        r("Chemical Process Utilities (كورس كامل)", "كورس", "b", 18, trackLinks.equip.stageFour.utilitiesFull),
        r(
          "Steam Boiler (Eng. Mohamed Ayman)",
          "محاضرة",
          "b",
          18,
          ["مشاهدة (YouTube)", trackLinks.equip.stageFour.steamBoilerAyman],
          {
            bookNote: "محاضرة تطبيقية للمهندس محمد أيمن تشرح غلايات البخار (Steam Boilers)، وأنواع الغلايات، واستخدامات البخار في الصناعة الكيميائية، وحسابات كفاءة وإنتاج البخار."
          }
        ),
        r(
          "Steam Power & Co-Generation (Boilers, Turbines, Generators)",
          "كورس",
          "i",
          18,
          ["مشاهدة القائمة (4MechEngineer)", trackLinks.equip.stageFour.steamPowerCogeneration],
          {
            bookNote: "سلسلة محطات القوى البخارية والتوليد المشترك للطاقة (Steam Power & Co-Generation).. تشمل دراسة تفصيلية للغلايات البخارية (Boilers)، والتوربينات البخارية (Steam Turbines)، والمولدات الكهربائية (Generators)، وأنظمة الـ Cogeneration / CHP المستخدمة لتوليد الطاقة والبخار في مصانع البتروكيماويات والتكرير.",
            sections: [
              {
                title: "أهم محاور السلسلة الهندسية",
                points: [
                  "أساسيات محطات القوى البخارية ودورات التوليد (Steam Power Plant Cycles).",
                  "أنواع الغلايات ومكوناتها ومسارات الاحتراق والمياه (Boilers & Steam Generation).",
                  "التوربينات البخارية ومراحل تمدد البخار وأنظمة التزييت والتحكم (Steam Turbines).",
                  "المولدات الكهربائية ونظرية توليد الطاقة (Electric Power Generators).",
                  "أنظمة التوليد المشترك للطاقة والحرارة (Co-Generation & Waste Heat Recovery)."
                ]
              }
            ],
            tips: "تعتبر أنظمة التوليد المشترك (Cogeneration) وسلاسل البخار والتوربينات من أهم أسئلة مقابلات مهندسي العمليات والمرافق (Utilities & Operations Engineers)."
          }
        ),
        r(
          "تدريب محطة معالجة وتدوير مياه الصرف الصناعي ZLD (Water Treatment Plant)",
          "ملف",
          "i",
          18,
          ["تحميل مانيوال التدريب (Google Drive)", trackLinks.equip.stageFour.wtpSummerTraining],
          {
            bookNote: "مرجع تدريبي هندسي وتطبيقي فائق القيمة لمحطة معالجة مياه الصرف الصناعي واسترجاع وتدوير المياه بالكامل (Zero Liquid Discharge - ZLD)؛ يغطي كيمياء وأساسيات المياه، مراحل المعالجة الأولية والترويق والترشيح، والتتابع الفعلي لوحدات المحطة: Microfiltration ثم Softener ثم HRU ثم Degasser ثم HERO ثم FEDI لإنتاج مياه Demin ومعالجة الحمأة.",
            sections: [
              {
                title: "الجزء 1: أساسيات وكيمياء الماء",
                points: [
                  "1. ما هو الماء، واستخداماته الصناعية، وعوامل جودته",
                  "2. جزيء الماء والروابط (أيونية، تساهمية، هيدروجينية) وخواصه الفيزيائية",
                  "3. الـ pH والـ Alkalinity (M و P و OH)",
                  "4. الشوائب (ذائبة، معلّقة، غروية، ميكروبية)",
                  "5. الـ Conductivity والـ TDS، وذوبان الغازات (قانون Henry)",
                  "6. العُسر (مؤقت ودائم) وتأثيره على الغلايات"
                ]
              },
              {
                title: "الجزء 2: مراحل المعالجة",
                points: [
                  "7. ما هي معالجة المياه، والمعالجة الأولية (Bar Screen)",
                  "8. الكلورة والتعقيم المبدئي",
                  "9. الترويق: Coagulation و Flocculation و Jar Test والـ Turbidity والـ TSS",
                  "10. الترشيح بالوسط الحبيبي (Sand Filters)",
                  "11. الـ Reverse Osmosis: المبدأ والمصطلحات (Recovery و Reject و Flux) وتفاصيل الغشاء",
                  "12. التبادل الأيوني (Ion Exchange) وأنواع الراتنجات وتوليد مياه Demin"
                ]
              },
              {
                title: "الجزء 3: المحطة الفعلية (الوحدات والتشغيل الميداني)",
                points: [
                  "13. تصنيف المياه في المحطة (Raw و Filtered و Soft و RO و Demin)",
                  "14. الترشيح الفائق/الدقيق (Microfiltration) وتشغيله وتنظيفه (EFM و CIP)",
                  "15. وحدة الـ Softener والـ Regeneration",
                  "16. وحدة الـ HRU ودور مانع الترسيب (Antiscalant)",
                  "17. نازع الغازات (Degasser) لإزالة CO2 و O2 الذائبين",
                  "18. تقنية الـ HERO والـ Scaling Control لاسترجاع أقصى نسبة مياه",
                  "19. التناضح الكهربائي (FEDI) لإنتاج مياه فائقة النقاوة لتغذية الغلايات",
                  "20. معالجة وتجفيف الحمأة (Sludge Thickener و Decanter Centrifuge)"
                ]
              }
            ],
            tips: "تعد محطات معالجة المياه وإنتاج مياه الغلايات (Demin Water / BFW) من أكثر الموضوعات تكراراً في مقابلات مهندسي المرافق والتشغيل (Utilities & Operations Engineers)."
          }
        ),
      ]),
      stage("الفصل", [
r(
          "Separators: Types و Internals",
          "فيديو",
          "i",
          22,
          trackLinks.equip.stageFive.separatorsTypes,
          {
            bookNote: "أنواع الفواصل الرأسية والأفقية ومكوناتها الداخلية (Inlet Diverters, Demister Pads, Wave Breakers, Vortex Breakers) لفصل الغاز عن السوائل وفصل الزيت عن الماء ومنع الـ Carryover."
          }
        ),
        r(
          "Separators: Manual Sizing (2-phase vertical)",
          "فيديو",
          "i",
          22,
          trackLinks.equip.stageFive.separatorSizing,
          {
            bookNote: "الحسابات اليدوية لتحجيم الفواصل ثنائية الطور الرأسية وفق معادلة Souders-Brown لحساب السرعة القصوى للغاز وتحديد أبعاد الوعاء ومستويات السائل وأزمنة البقاء."
          }
        ),
        r(
          "Separator Sizing (د. أحمد حلمي)",
          "ملف",
          "i",
          22,
          ["تحميل المذكرات", trackLinks.equip.stageFive.separatorHelmy],
          {
            bookNote: "مذكرات د. أحمد حلمي لحسابات الفواصل 2-Phase و 3-Phase.. مرجع عربي متميز لحسابات التحجيم والتصميم الهيدروليكي للفواصل الأفقية ثلاثية الطور وفصل المستحلبات."
          }
        ),
        r(
          "شيت إكسيل KBR وفصل GPSA للفواصل",
          "ملف",
          "i",
          23,
          ["لينكد إن", trackLinks.equip.stageFive.separatorKbr],
          {
            bookNote: "شيت إكسيل احترافي من شركة KBR العالمية المعتمدة وفصل مانيوال GPSA المخصص لتصميم الفواصل في قطاع الغاز وحساب الفوهات (Nozzle Sizing)."
          }
        ),
        r(
          "محاكاة الفواصل على Aspen HYSYS",
          "ملف",
          "i",
          23,
          ["ملف المحاكاة", trackLinks.equip.stageFive.sepSimModel],
          ["case محلولة", trackLinks.equip.stageFive.sepSimCase],
          {
            bookNote: "ملفات محاكاة عملية للفواصل ثنائية وثلاثية الطور على HYSYS مع حالة تطبيقية محلولة لمقارنة الفاصل الحقيقي بالفاصل النظري المثالي في البرنامج."
          }
        ),
        r(
          "Distillation: Theory of operation",
          "كورس",
          "i",
          24,
          ["Chevron", trackLinks.equip.stageFive.distChevron],
          ["إنجليزي", trackLinks.equip.stageFive.distEnglish],
          ["تصميم الصواني وأبراج الحشو (د. مصطفى نوفل)", trackLinks.design.stageThree.equipmentDesignNofal],
          {
            bookNote: "نظرية التقطير والتشغيل.. شروحات د. أكاديمي وشركة شيفرون العالمية.. أهم عملية فصل في الصناعات الكيميائية والتكرير، وطريقة McCabe-Thiele لحساب الصواني ونسبة الراجع."
          }
        ),
        r(
          "Distillation Basics: تعرف على أبراج التقطير (Focus)",
          "فيديو",
          "i",
          24,
          ["مشاهدة (YouTube)", trackLinks.equip.stageFive.distillationBasicsFocus],
          {
            bookNote: "محاضرة شاملة وعملية في هندسة التكرير والعمليات البترولية تستعرض مبادئ التقطير وتكوين النظام، والمكثفات، والغلايات، وتصميم البرج والأجزاء الداخلية (الصواني والحشوات)، ومعدل الراجع (Reflux)، مع استكشاف وتشخيص مشاكل وأعطال التشغيل (Troubleshooting).",
            sections: [
              {
                title: "فهرس ومحتويات المحاضرة (Contents)",
                points: [
                  "1. Principles of Distillation - مبادئ التقطير وتوازن البخار والسائل (VLE) والتطايرية النسبية وفروق درجات الغليان",
                  "2. Distillation system configuration - التكوين الهندسي المتكامل لنظام التقطير وتوزيع خطوط التغذية والمنتجات",
                  "3. Condenser configuration - تكوين وأنواع المكثفات العلوية (Total vs Partial Condensers) ومستودع التكثيف (Reflux Drum)",
                  "4. Reboiler configuration - تكوين وأنواع الغلايات السفلية (Thermosyphon, Kettle, Fired Reboilers) وتوليد الأبخرة الصاعدة",
                  "5. Distillation column configuration - تكوين برج التقطير ومنطقة التغذية، وقسم التجريد (Stripping Section) وقسم التخصيب (Rectifying Section)",
                  "6. Column internals - الأجزاء الداخلية للأبراج: الصواني (Trays: Sieve, Valve, Bubble Cap) والحشوات (Structured & Random Packings) والمصارف (Downcomers)",
                  "7. Reflux - تيار الارتجاع ومعدل الـ Reflux ودوره الجوهري في ضبط نقاوة المنتج العلوي وفصل المركبات الخفيفة",
                  "8. Troubleshooting - تشخيص وحل مشاكل التشغيل الميدانية (الغمر Flooding، البكاء/التسريب Weeping، الرغوة Foaming، وعدم اتزان الضغط والحرارة)"
                ]
              }
            ]
          }
        ),
        r(
          "Distillation Course (Eng. Sarah Zidan)",
          "كورس",
          "i",
          24,
          ["مشاهدة القائمة", trackLinks.equip.stageFive.distillationSarah],
          {
            bookNote: "دورة متخصصة في أبراج التقطير للمهندسة سارة زيدان، تشرح أسس ومبادئ الفصل بالتقطير، توازن البخار والسائل (VLE)، وحسابات الصواني ونسبة الراجع وتشغيل الأبراج.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Diesel and Cetane number - الديزل وأهم خواصه",
                  "2. Kerosene and its additives - الكيروسين والمواد المضافة لتحسين خواصه",
                  "3. Liquified Petroleum Gas LPG, Naphtha - الغاز المسال والنفثا منتجات برج التقطير",
                  "4. Distillation column tails, Methane, Ethane, IBP, FBP - الميثان والإيثان في برج التقطير",
                  "5. Flash Zone / Feed Zone - Stripping Section - Rectifying section (part 2) - تقسيم برج التقطير",
                  "6. Flash Zone / Feed Zone - Stripping Section - Rectifying section (part 1) - تقسيم برج التقطير",
                  "7. Pressure and Temperature for (Atmospheric and Vacuum) Distillation - الضغط والحرارة في عملية التقطير",
                  "8. Distillation Feed heating - Flash drum - prefractionator",
                  "9. Oil and Gas Facilities - Distillation Course Introduction",
                  "10. Basics of Crude oil - composition, classification",
                  "11. Hydrocarbons and non-hydrocarbons in crude oil",
                  "12. Properties of crude oil",
                  "13. Desalting - Process (Heating, mixing, desalting), one and two-stages",
                  "14. Desalting - introduction, salt problems, Free and emulsified water"
                ]
              }
            ]
          }
        ),
r("Distillation: عدد الأطباق والـ stages", "فيديو", "i", 25, trackLinks.equip.stageFive.distStages),
        r(
          "Distillation: Hysys (م. أحمد مختار)",
          "كورس",
          "i",
          25,
          ["كورس", trackLinks.equip.stageFive.distHysys],
          ["Trays و Reflux", trackLinks.equip.stageFive.distTrays],
          {
            bookNote: "محاكاة أبراج التقطير على Aspen HYSYS مع م. أحمد مختار.. إدخال مواصفات البرج وحل مشاكل التقارب وتحديد صينية التغذية المثالية (Optimal Feed Stage)."
          }
        ),
        r(
          "حقيبة تدريب المصانع: التقطير العملي",
          "كورس",
          "i",
          53,
          ["Practical Distillation Drive", trackLinks.equip.stageFive.plantDistillation],
          {
            bookNote: "مجلد تدريب المصانع العملي على أبراج التقطير.. صور وفيديوهات ومذكرات التشغيل وصواني التقطير ومشاكل الـ Foaming والـ Flooding الميدانية."
          }
        ),
      ]),
    ],
  };
