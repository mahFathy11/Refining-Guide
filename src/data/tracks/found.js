import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // الأساسيات المشتركة (found)
  // ==========================================
export const foundTrack = {
    id: "found",
    title: "الأساسيات المشتركة",
    desc: "مواد لازمة لكل المسارات تقريباً.",
    coverage: "ok",
    about: {
      study: [
        "Material & Energy Balance للعمليات المستمرة والدفعات وتيارات Recycle & Purge.",
        "Thermodynamics & VLE وحسابات توازن الأطوار وسلوك الغازات والمخاليط.",
        "Fluid Flow & Pressure Drop وتطبيقات سريان الموائع وشبكات الأنابيب.",
        "Heat & Mass Transfer وتطبيقات التبادل الحراري وعمليات الفصل والتقطير."
      ],
      work: [
        "اجتياز الاختبارات التحريرية و Technical Interviews في كبرى شركات القطاع.",
        "فهم كيمياء وفيزياء المصنع وتفسير سلوك العمليات التشغيلية.",
        "إجراء الحسابات الهندسية الميدانية وضبط تحويلات الوحدات بدقة.",
        "ربط القوانين الأكاديمية بنماذج المحاكاة والتشغيل الفعلي للوحدات."
      ],
      workplaces: "متطلب إلزامي ورئيسي للقبول في كافة مصافي التكرير، مجمعات البتروكيماويات، شركات المقاولات والتصميم (EPC)، ومحطات معالجة المياه والغاز.",
    },
    stages: [
      stage("موازين المادة والطاقة", [
        r(
          "Material & Energy Balance (د. السيد الأشتوخي)",
          "كورس",
          "b",
          5,
          ["Material Balance", trackLinks.found.stageOne.materialBalance],
          ["Energy Balance", trackLinks.found.stageOne.energyBalance],
          {
            bookNote: "دورة موازين المادة والطاقة للدكتور السيد الأشتوخي (جامعة الإسكندرية).. من أفضل وأشمل الشروحات العربية؛ تعتمد على شرح كتاب Felder الشهير وحل مسائل الشيتات والامتحانات خطوة بخطوة، وتعتبر حجر الأساس لفهم موازين الكتلة والطاقة والـ Recycle Loops وتيارات الالتفاف والتطهير قبل البدء في المحاكاة.",
            sections: [
              {
                title: "أهم محاور الدورة",
                points: [
                  "مفهوم النظام المستقر وغير المستقر (Steady vs Unsteady State).",
                  "موازين العمليات المصحوبة بتفاعلات كيميائية وحسابات المتفاعل المحدد (Limiting Reactant).",
                  "حسابات مسارات التدوير (Recycle Streams) ونسب التطهير (Purge).",
                  "موازين الطاقة وحسابات السعة الحرارية وحرارة التفاعل وتوليد البخار."
                ]
              }
            ],
            tips: "احرص على رسم الـ Flowsheet بيدك وتحديد حدود النظام (System Boundaries) قبل كتابة أي معادلة رياضية."
          }
        ),
        r(
          "Process Calculation (Eng. Mohamed Ayman Elfakhrany)",
          "محاضرة",
          "b",
          5,
          ["سلايدز المحاضرة (PDF)", trackLinks.found.stageOne.processCalcElfakhranyPdf],
          ["تسجيل المحاضرة (MP4)", trackLinks.found.stageOne.processCalcElfakhranyVideo],
          ["مشاهدة (YouTube)", trackLinks.found.stageOne.processCalcElfakhranyYouTube],
          {
            bookNote: "محاضرة تطبيقية مكثفة من دورات نقابة المهندسين للمهندس محمد أيمن الفخراني، تركز على التطبيقات العملية لحسابات العمليات الكيميائية (Process Calculations)، وضبط الوحدات والتحويلات الهندسية، ومعادلات الغازات وتطبيق موازين الكتلة والطاقة في العمليات الصناعية المستمرة وتيارات التدوير (Recycle & Purge).",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "التحويلات ووحدات القياس الهندسية والمصطلحات الميدانية.",
                  "سلوك الغازات المثالية والحقيقية وقوانين الضغوط الجزئية.",
                  "تطبيقات موازين الكتلة في العمليات الكيميائية ومعدلات التفاعل والتحول.",
                  "حسابات تيارات الالتفاف والتطهير (Bypass, Purge, Recycle) وأهميتها التشغيلية."
                ]
              }
            ],
            tips: "تعتبر هذه المحاضرة مدخلاً عملياً سريعاً يربط الأساسيات الأكاديمية بحسابات المصنع الفعلية قبل الدخول في مشاريع المحاكاة والتصميم."
          }
        ),
        r(
          "Engineering Fundamentals & Density Measurement (Eng. Sarah Zidan)",
          "كورس",
          "b",
          5,
          ["قائمة الأساسيات الهندسية", trackLinks.found.stageOne.engFundamentalsSarah],
          ["فيديو قياس الكثافة بالهيدروميتر", trackLinks.found.stageOne.hydrometerSarah],
          {
            bookNote: "سلسلة أساسيات الهندسة الكيميائية للمهندسة سارة زيدان، تشرح المفاهيم الهندسية الجوهرية والوحدات والتحويلات ومدخل الحسابات الهندسية، مع فيديو تطبيقي يوضح عملياً استخدام جهاز الهيدروميتر (Hydrometer) في قياس كثافة السوائل والوزن النوعي (Specific Gravity) وتدريج API.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس والتطبيق العملي",
                points: [
                  "1. Pressure - Pascal principle - Internal pressure - Pump vs Compressor",
                  "2. Fluid - Density - Specific gravity - API",
                  "3. Hydrometer for Density Measurements (شرح عملي للجهاز وتدريجه)"
                ]
              }
            ]
          }
        ),
      ]),
      stage("الديناميكا الحرارية", [
        r(
          "Thermodynamics: Four Laws that Move the Universe (The Great Courses - TGC) — 24 محاضرة",
          "كورس",
          "b",
          6,
          ["تحميل الكورس (MediaFire - TGC)", trackLinks.found.stageTwo.mitThermoNormal],
          ["نسخة عالية الدقة (MediaFire HQ)", trackLinks.found.stageTwo.mitThermoHq],
          {
            bookNote: "سلسلة الديناميكا الحرارية الأسطورية من The Great Courses (TGC) بالتعاون مع البروفيسور Jeffrey C. Grossman (أستاذ علوم المواد والهندسة في MIT).. 24 محاضرة كاملة مع الـ Lecture Guide، تشرح القوانين الأربعة للديناميكا الحرارية بأسلوب تفاعلي عميق يربط النظريات بالواقع الصناعي من محركات كارنو وتوليد الطاقة إلى اتزان الأطوار (VLE) والتفاعلات الكيميائية.",
            sections: [
              {
                title: "فهرس المحاضرات الكامل (Lecture Guides - 24 المحاضرة)",
                points: [
                  "Lecture 01: Thermodynamics — What's under the Hood",
                  "Lecture 02: Variables and the Flow of Energy",
                  "Lecture 03: Temperature — Thermodynamics' First Force",
                  "Lecture 04: Salt, Soup, Energy, and Entropy",
                  "Lecture 05: The Ideal Gas Law and a Piston",
                  "Lecture 06: Energy Transferred and Conserved (1st Law)",
                  "Lecture 07: Work-Heat Equivalence",
                  "Lecture 08: Entropy — The Arrow of Time (2nd Law)",
                  "Lecture 09: The Chemical Potential",
                  "Lecture 10: Enthalpy, Free Energy, and Equilibrium",
                  "Lecture 11: Mixing and Osmotic Pressure",
                  "Lecture 12: How Materials Hold Heat",
                  "Lecture 13: How Materials Respond to Heat",
                  "Lecture 14: Phases of Matter — Gas, Liquid, Solid",
                  "Lecture 15: Phase Diagrams — Ultimate Materials Maps",
                  "Lecture 16: Properties of Phases",
                  "Lecture 17: To Mix, or Not to Mix?",
                  "Lecture 18: Melting and Freezing of Mixtures",
                  "Lecture 19: The Carnot Engine and Limits of Efficiency",
                  "Lecture 20: More Engines — Materials at Work",
                  "Lecture 21: The Electrochemical Potential",
                  "Lecture 22: Chemical Reactions — Getting to Equilibrium",
                  "Lecture 23: The Chemical Reaction Quotient",
                  "Lecture 24: The Power of Thermodynamics"
                ]
              }
            ],
            tips: "الكورس يشمل دليل المحاضرات (Guidebook) كاملاً مع روابط التحميل المباشرة على MediaFire للنسخة العادية والـ HQ."
          }
        ),
        r(
          "اختيار الـ Thermodynamic Model (م. رضا رشوان)",
          "فيديو",
          "i",
          47,
          trackLinks.found.stageTwo.thermoModel,
          {
            bookNote: "فيديو ومرجع م. رضا رشوان لاختيار النموذج الثرموديناميكي.. تُعتبر أهم خطوة على الإطلاق في المحاكاة، لأن اختيار Package خاطئة يؤدي لنتائج كارثية وغير واقعية على أرض الواقع. يوضح شجرة اتخاذ القرار لاختيار نماذج المعادلات (PR, SRK) للهيدروكربونات أو نماذج النشاط (NRTL, UNIQUAC) للمحاليل القطبية.",
            tips: "الهيدروكربونات والغاز الطبيعي ⬅️ معادلات الحالة (Peng-Robinson, SRK). المحاليل الكيميائية والقطبية ⬅️ نماذج النشاط (NRTL, UNIQUAC)."
          }
        ),
        r(
          "مرجع Thermodynamic Models for Process Simulation",
          "كتاب",
          "i",
          47,
          ["تحميل المرجع", trackLinks.found.stageTwo.thermoSelectionBook],
          {
            bookNote: "مرجع عملي معتمد يوضح منهجية الخطوات الثلاث (Three Steps Methodology) لاختيار الموديل الثرموديناميكي المناسب لكل نوع من العمليات الصناعية والخلائط غير المثالية وتوازن الأطوار المتعددة."
          }
        ),
      ]),
      stage("الموائع وانتقال الحرارة والكتلة", [
        r(
          "Heat Transfer course",
          "كورس",
          "b",
          16,
          trackLinks.found.stageThree.heatTransfer,
          {
            bookNote: "شرح انتقال الحرارة بآلياته الثلاث (Conduction, Convection, Radiation)، وحسابات العزل ومعاملات انتقال الحرارة الإجمالية (Overall U) لتصميم المبادلات والأفران والغلايات وأبراج التبريد ومكثفات البخار."
          }
        ),
        r(
          "Mass Transfer course",
          "كورس",
          "b",
          22,
          trackLinks.found.stageThree.massTransfer,
          {
            bookNote: "شرح انتقال الكتلة والانتشار (Diffusion) ونظرية الفيلم.. المدخل الأساسي لعمليات الفصل وحساب عدد الصواني وارتفاع الحشوات في أبراج التقطير والامتصاص والاستخلاص."
          }
        ),
        r(
          "Mass Transfer (Eng. Sarah Zidan)",
          "كورس",
          "b",
          22,
          ["مشاهدة القائمة", trackLinks.found.stageThree.massTransferSarah],
          {
            bookNote: "شرح تطبيقي لعمليات انتقال الكتلة (Mass Transfer) للمهندسة سارة زيدان، يغطي مبادئ الانتشار، انتقال الكتلة بين الأطوار، والمدخل الأساسي لعمليات الفصل والتقطير.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Dumping in distillation column trays - التسريب في صواني أبراج التقطير",
                  "2. Distillation Column Flooding, downcomer height and clearance, entrainment - مشكلة انقلاب برج التقطير",
                  "3. Distillation and trays - صواني برج التقطير وكفاءتها وأنواع الصواني",
                  "4. unit operation, unit process and chemical process - الفرق بين"
                ]
              }
            ]
          }
        ),
        r(
          "حقيبة تدريب المصانع: ميكانيكا الموائع",
          "كورس",
          "b",
          53,
          ["Fluids Drive", trackLinks.found.stageThree.plantFluids],
          {
            bookNote: "أحد مجلدات حقيبة تدريب المصانع العملية التسعة، يركز على التطبيقات الميدانية لخواص الموائع واللزوجة والكثافة وقياس معدلات السريان من واقع التشغيل بالمصانع."
          }
        ),
        r(
          "Heat Transfer (Eng. Mohamed Ayman)",
          "محاضرة",
          "b",
          16,
          ["مشاهدة (YouTube)", trackLinks.found.stageThree.heatTransferAyman],
          {
            bookNote: "محاضرة تطبيقية مكثفة للمهندس محمد أيمن تشرح مفاهيم انتقال الحرارة، ومعامل انتقال الحرارة الإجمالي (Overall U)، وتطبيقاتها الميدانية في تصميم وتشغيل المبادلات الحرارية بالمصانع."
          }
        ),
      ]),
    ],
  };
