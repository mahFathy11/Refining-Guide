import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Operations / Production Engineer (ops)
  // ==========================================
export const opsTrack = {
    id: "ops",
    title: "Operation Engineer",
    desc: "تشغيل الوحدات الصناعية، غرف التحكم DCS، ومتابعة الإنتاج والـ Troubleshooting.",
    coverage: "ok",
    about: {
      study: [
        "تشغيل الوحدات الميدانية والتحكم من خلال أنظمة DCS & SCADA.",
        "بروتوكولات Start-up وإدخال اللقيم وإجراءات Shutdown العادية والطارئة.",
        "تطبيقات Troubleshooting السريعة للأبراج والمبادلات والمضخات.",
        "مراقبة معايير ومواصفات السلامة التشغيلية والبيئية."
      ],
      work: [
        "العمل كـ Operations / Production Engineer في الموقع أو كـ DCS Boardman / Shift Engineer.",
        "مراقبة وتشغيل المعدات في الظروف الآمنة (T, P, Level, Flow).",
        "متابعة استقرار التفاعلات وجودة المنتجات النهائية وفق المواصفات القياسية.",
        "إصدار وتوجيه تعليمات التشغيل للمشغلين والفنيين الميدانيين."
      ],
      workplaces: "مصافي تكرير البترول (ميدور، ERC، أنربك، السويس، القاهرة)، مجمعات البتروكيماويات (سيدبك، إيثيدكو، إيلاب)، ومصانع الأسمدة والغاز الطبيعي.",
    },
    stages: [
      stage("فهم المصنع", [
        r(
          "Process and Operation (م. أحمد شفيق، حوالي 6 ساعات)",
          "كورس",
          "b",
          1,
          trackLinks.ops.stageOne.chemFieldsShafik,
          {
            bookNote: "دورة العمليات والتشغيل لـ م. أحمد شفيق (حوالي 6 ساعات).. يشرح فيها كيفية ربط المعدات داخل المصنع وتسلسل العمليات في قطاع البترول والغاز لفهم دور مهندس الإنتاج اليومي."
          }
        ),
        r(
          "نصائح لحديثي التخرج (م. أحمد يحيى)",
          "فيديو",
          "b",
          1,
          trackLinks.ops.stageOne.adviceYehia,
          {
            bookNote: "فيديو م. أحمد يحيى.. نصائح ذهبية وتوجيه مهني عملي لمهندسي الكيمياء حديثي التخرج من واقع خبرته الصناعية الطويلة في قطاع البترول والتكرير؛ لكيفية بناء المهارات، واختيار التخصص المناسب، والاستعداد لسوق العمل."
          }
        ),
        r(
          "Process Technology: Equipment & Systems",
          "كتاب",
          "b",
          28,
          ["تحميل", trackLinks.ops.stageOne.processTechnologyBook],
          {
            bookNote: "كتاب تكنولوجيا العمليات: المعدات والأنظمة.. مرجع شامل يوضح طريقة تشغيل كل معدة والأنظمة المساعدة من وجهة نظر المشغل ومهندس الإنتاج."
          }
        ),
        r("IHRDC Oil & Gas Learning Videos", "فيديو", "b", 28, trackLinks.ops.stageOne.ihrdc),
        r(
          "Refining from Commissioning to Normal Operation (Eng. Ahmed Elsisi)",
          "محاضرة",
          "i",
          28,
          ["سلايدز المحاضرة (PDF)", trackLinks.ops.stageOne.refiningElsisiPdf],
          ["تسجيل المحاضرة (MP4)", trackLinks.ops.stageOne.refiningElsisiVideo],
          ["مشاهدة (YouTube)", trackLinks.ops.stageOne.refiningElsisiYouTube],
          {
            bookNote: "دليل عملي وتطبيقي للمهندس أحمد السيسي يستعرض دورة حياة وحدات التكرير من مرحلة اكتمال الإنشاءات وحتى التشغيل المستقر؛ يشمل إجراءات الـ Pre-commissioning والـ Commissioning وإدخال التغذية (Feed-in) والتحكم في المتغيرات التشغيلية.",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "مرحلة ما قبل التدشين (Pre-commissioning): الغسيل الكيميائي، النفخ بالهواء والبخار، واختبارات التسريب.",
                  "إجراءات التدشين (Commissioning): التطهير بالنيتروجين، تحميل العوامل المساعدة (Catalyst Loading)، واختبار إحكام الضغط (Tightness Test).",
                  "خطوات إدخال التغذية والتشغيل المبدئي (Startup & Feed Introduction).",
                  "الوصول إلى ظروف التشغيل القياسية المستقرة (Normal Operations)."
                ]
              }
            ],
            tips: "مرحلة الـ Commissioning هي المدرسة الكبرى لأي مهندس تشغيل، حيث يتعامل فيها مع المعدات لأول مرة على الطبيعة."
          }
        ),
      ]),
      stage("التحكم والأجهزة", [
        r(
          "Instrumentation: كورس شامل",
          "كورس",
          "b",
          29,
          ["كورس هندي", trackLinks.ops.stageTwo.instrIndian],
          {
            bookNote: "كورسات أجهزة القياس والتحكم.. شرح حساسات القياس (Sensors, Transmitters) وأنظمة التحكم ومتحكمات الـ PID التي تمثل عيون وآذان المشغل في المصنع."
          }
        ),
        r(
          "أجهزة القياس والتحكم في العمليات الصناعية (Industrial Instrumentation — Udemy)",
          "كورس",
          "b",
          29,
          ["دورة Udemy", trackLinks.ops.stageTwo.instrumentationUdemyArabic],
          {
            bookNote: "كورس تطبيقي شامل باللغة العربية على منصة Udemy في هندسة أجهزة القياس (Instrumentation) في المنشآت النفطية والغازية ومحطات المعالجة والمصانع الكيميائية؛ يؤهل المهندسين لفهم وقياس متغيرات العمليات الأساسية وصمامات التحكم وأنظمة الأتمتة والـ DCS لضمان التشغيل الآمن والفعال.",
            sections: [
              {
                title: "أهم محاور ومحتويات الدورة",
                points: [
                  "مقدمة عن الـ Instrumentation: تعريفه ودوره في الصناعة، الفرق بين الأجهزة الذكية والتقليدية، ومفهوم الـ Process Variables.",
                  "المتغيرات الأساسية (Process Variables): قياس الضغط (Pressure)، الحرارة (Temperature)، التدفق (Flow)، المستوى (Level)، الكثافة (Density)، الأس الهيدروجيني (pH)، والتوصيلية (Conductivity).",
                  "أنواع الحساسات والمجسات (Sensors & Transmitters): أجهزة قياس كل متغير، مبادئ التشغيل، وتقنيات القياس المختلفة والمزايا والعيوب لكل منها.",
                  "المحولات والمشغلات (Actuators & Control Valves): أنواع الـ Actuators ووظيفتها، التحكم في التدفق، وتأثير اختيار الصمامات على أداء واستقرار المنظومة.",
                  "أنظمة التحكم وأنواع الإشارات: الفرق بين الإشارات التناظرية والرقمية (Analog vs Digital)، إشارة 4-20mA وبروتوكول HART، وأساسيات أنظمة الـ PLC والـ DCS وبروتوكولات الاتصال الصناعية."
                ]
              }
            ],
            tips: "تعتبر أجهزة القياس (Instrumentation) بمثابة عيون وحواس مهندس العمليات داخل المصنع، وإتقان أنواع الحساسات وإشارات التحكم هو المفتاح الأساسي للتشغيل الآمن وحل المشكلات التشغيلية (Troubleshooting)."
          }
        ),
        r(
          "حقيبة تدريب المصانع: أجهزة القياس والتحكم (Instrumentation)",
          "كورس",
          "i",
          53,
          ["تحميل المجلد", trackLinks.ops.stageTwo.plantInstrumentation],
          {
            bookNote: "مجلد تدريب المصانع العملي على أجهزة القياس والتحكم.. صور وفيديوهات ومذكرات التشغيل وصيانة أجهزة الـ Field Instruments في الموقع وتوصيل الإشارات لغرفة التحكم."
          }
        ),
        r(
          "Process Control (د. أحمد إسماعيل)",
          "كورس",
          "i",
          29,
          ["الجزء 1", trackLinks.ops.stageTwo.controlIsmail1],
          ["تكملة", trackLinks.ops.stageTwo.controlIsmail2],
          {
            bookNote: "شرح التحكم في العمليات لدكتور أحمد إسماعيل.. نظريات التحكم، الـ Transfer Functions، واستجابة النظم الديناميكية ومتحكمات PID واستقرار حلقات التحكم."
          }
        ),
        r(
          "مقدمة عن الـ DCS",
          "منشور",
          "b",
          29,
          trackLinks.ops.stageTwo.dcsPost,
          {
            bookNote: "منشور ومقدمة عن نظام التحكم الموزع (DCS) وكيفية إدارة ومراقبة المصنع بالكامل من شاشات غرفة التحكم، والفرق بينه وبين أنظمة الـ PLC والـ SCADA."
          }
        ),
        r("Process Control Design and Practice", "كورس", "i", 30, ["الموقع", trackLinks.ops.stageTwo.cePractice], ["يوتيوب", trackLinks.ops.stageTwo.cePracticeYT]),
        r(
          "Process Control (Eng. Mohamed Abdel Hamid)",
          "محاضرة",
          "b",
          29,
          ["سلايدز المحاضرة (PDF)", trackLinks.ops.stageTwo.processControlHamidPdf],
          ["تسجيل المحاضرة (MP4)", trackLinks.ops.stageTwo.processControlHamidVideo],
          ["مشاهدة (YouTube)", trackLinks.ops.stageTwo.processControlHamidYouTube],
          {
            bookNote: "محاضرة تطبيقية للمهندس محمد عبد الحميد تتناول نظم التحكم في العمليات البترولية والكيميائية (Process Control) وهندسة الأجهزة الدقيقة والحساسات وصمامات التحكم، والفرق بين منظومات التحكم المختلفة (DCS vs PLC vs ESD).",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "عناصر دائرة التحكم المغلقة (Sensor, Transmitter, Controller, Control Valve).",
                  "استراتيجيات التحكم: Feedback, Feedforward, Cascade, Split Range Control.",
                  "مقارنة عملية بين أنظمة التحكم (DCS) وأنظمة الإيقاف الاضطراري (ESD) ووحدات التحكم المنطقي (PLC).",
                  "تطبيقات التحكم في منسوب وضغط الأبراج وأوعية الفصل."
                ]
              }
            ],
            tips: "فهم دوائر التحكم وحركة الصمامات يمنحك سرعة هائلة في تشخيص أي اضطراب مفاجئ داخل الوحدة الإنتاجية."
          }
        ),
        r(
          "مقدمة Process Control (م. إيهاب عبده)",
          "فيديو",
          "b",
          29,
          ["مشاهدة (YouTube)", trackLinks.ops.stageTwo.processControlIhab],
          {
            bookNote: "محاضرة تطبيقية للمهندس إيهاب عبده ضمن سلسلة Friday Discussion (AIChE SUSC)، تقدم مدخلاً مبسطاً وشاملاً لأساسيات التحكم في العمليات (Process Control)، وحلقات التحكم المفتوحة والمغلقة، ووظائف الحساسات وصمامات التحكم، ودور أنظمة الأتمتة والتحكم في الحفاظ على استقرار وأمان المصانع البترولية والكيميائية.",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "المفاهيم الأساسية للمتغيرات التشغيلية (PV, SP, MV, Error).",
                  "حلقات التحكم المفتوحة والمغلقة (Open-loop vs Closed-loop Control).",
                  "مكونات حلقة التحكم: أجهزة القياس، المتحكم، وعنصر التحكم النهائي (Control Valve).",
                  "أهمية أنظمة التحكم في الحفاظ على السلامة وكفاءة التشغيل."
                ]
              }
            ],
            tips: "تعتبر هذه المحاضرة مقدمة تمهيدية ممتازة للمبتدئين لفهم فلسفة التحكم قبل دراسة التفاصيل الرياضية وديناميكا العمليات."
          }
        ),
        r(
          "Process Control & Instrumentation (Eng. Sarah Zidan)",
          "كورس",
          "b",
          29,
          ["مشاهدة القائمة", trackLinks.ops.stageTwo.processControlSarah],
          {
            bookNote: "شرح تطبيقي لأنظمة التحكم والأجهزة الدقيقة (Process Control & Instrumentation) للمهندسة سارة زيدان، يوضح عناصر دائرة التحكم وحساسات القياس وصمامات التحكم وضبط العمليات.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Correcting element, Actuators",
                  "2. Indicators, Recorders, Controllers",
                  "3. Transmitters and Signals",
                  "4. Sensors, Transducers, and converters",
                  "5. Process (variables, error, types, loop types)",
                  "6. Process Control Loop - Process Variables - Set point",
                  "7. Process control - definition and importance"
                ]
              }
            ]
          }
        ),
        r(
          "Process Control Fundamentals (Eng. Mohamed Ayman)",
          "محاضرة",
          "b",
          29,
          ["مشاهدة (YouTube)", trackLinks.ops.stageTwo.processControlFundamentalsAyman],
          {
            bookNote: "محاضرة للمهندس محمد أيمن تشرح أساسيات التحكم في العمليات الصناعية، نظرية التحكم، أنواع دوائر وحلقات التحكم (Control Loops)، وخوارزميات الضبط والـ Tuning للمتحكمات."
          }
        ),
        r(
          "Process Control Course (AIChE SUSC)",
          "كورس",
          "b",
          29,
          ["مشاهدة (YouTube)", trackLinks.ops.stageTwo.processControlAiche],
          {
            bookNote: "كورس تطبيقي في التحكم في العمليات (Process Control) من تنظيم فرع AIChE SUSC؛ يشرح أساسيات حلقات التحكم المغلقة والمفتوحة (Feedback Loops)، ودور أجهزة القياس وصمامات التحكم، وضبط المتحكمات للحفاظ على استقرار العمليات الصناعية."
          }
        ),
      ]),
      stage("مشاكل التشغيل", [
        r(
          "Distillation: Startup و Shutdown",
          "فيديو",
          "i",
          25,
          trackLinks.ops.stageThree.distStartup,
          {
            bookNote: "إجراءات بدء التشغيل (Startup) والإيقاف الآمن (Shutdown) لأبراج التقطير.. من أخطر المراحل التشغيلية التي تتطلب خطوات دقيقة للتطهير بالنيتروجين ورفع الضغط والتسخين التدريجي."
          }
        ),
        r(
          "Distillation: Operating Problems",
          "فيديو",
          "i",
          25,
          trackLinks.ops.stageThree.distProblems,
          {
            bookNote: "المشاكل التشغيلية الشائعة في أبراج التقطير واستكشاف الأخطاء وإصلاحها (Troubleshooting) كالغمر (Flooding) والتقطير المنخفض (Weeping) والرغوة (Foaming)."
          }
        ),
        r("Distillation: Control Systems", "فيديو", "i", 25, trackLinks.ops.stageThree.distControl),
        r(
          "Distillation Basics & Troubleshooting (Focus)",
          "فيديو",
          "i",
          25,
          ["مشاهدة (YouTube)", trackLinks.ops.stageThree.distillationBasicsFocus],
          {
            bookNote: "محاضرة تطبيقية تركز على مبادئ التقطير وتكوين البرج والأجزاء الداخلية والمكثفات والغلايات والـ Reflux، مع التركيز على استكشاف الأعطال وحل المشاكل التشغيلية (Troubleshooting).",
            sections: [
              {
                title: "فهرس ومحتويات المحاضرة (Contents)",
                points: [
                  "1. Principles of Distillation - مبادئ التقطير وتوازن البخار والسائل (VLE) والتطايرية النسبية",
                  "2. Distillation system configuration - التكوين العام لنظام ومعدات التقطير",
                  "3. Condenser configuration - تكوين وأنواع المكثفات العلوية وأوعية التكثيف",
                  "4. Reboiler configuration - تكوين وأنواع الغلايات السفلية وتوليد البخار",
                  "5. Distillation column configuration - تكوين البرج ومناطق التجريد والتخصيب",
                  "6. Column internals - الأجزاء الداخلية للأبراج: الصواني والحشوات والموزعات",
                  "7. Reflux - تيار الارتجاع والتحكم في نقاوة الفصل والموازين التشغيلية",
                  "8. Troubleshooting - تشخيص وحل مشاكل التشغيل (Flooding, Weeping, Foaming, Off-spec products)"
                ]
              }
            ]
          }
        ),
        r(
          "Process Troubleshooting & Root Cause Analysis Workshop — 2 Days (Eng. Ahmed Shafik Attia)",
          "ورشة عمل",
          "i",
          25,
          ["سلايدز اليوم 1 (PDF)", trackLinks.ops.stageThree.troubleshootingDay1Pdf],
          ["سلايدز اليوم 2 (PDF)", trackLinks.ops.stageThree.troubleshootingDay2Pdf],
          ["مشاهدة اليوم 1 (YouTube)", trackLinks.ops.stageThree.troubleshootingDay1YouTube],
          ["مشاهدة اليوم 2 (YouTube)", trackLinks.ops.stageThree.troubleshootingDay2YouTube],
          ["تحميل اليوم 1 (MP4)", trackLinks.ops.stageThree.troubleshootingDay1Video],
          ["تحميل اليوم 2 (MP4)", trackLinks.ops.stageThree.troubleshootingDay2Video],
          {
            bookNote: "ورشة عمل متكاملة وشاملة (يومان) للمهندس أحمد شفيق عطية، تبني المنهجية الهندسية والتحليل الجذري (Troubleshooting Methodology & RCA) لأعطال المصانع مع دراسات حالة واقعية (Case Studies) لمشاكل أبراج التقطير والمبادلات والمضخات.",
            sections: [
              {
                title: "محاور اليوم الأول: منهجية RCA وتشخيص المعدات الدوارة",
                points: [
                  "خطوات التحليل الجذري للمشكلة (Root Cause Analysis - RCA).",
                  "جمع البيانات الميدانية وقراءة الـ Trends التاريخية ومقارنتها بتصميم العملية.",
                  "التأكد من موازين المادة والحرارة حول المعدة المشتبه بها.",
                  "مشاكل المعدات الدوارة والهيدروليكا (المضخات، التكهف Cavitation، السدد الميكانيكي)."
                ]
              },
              {
                title: "محاور اليوم الثاني: دراسات حالة لأبراج التقطير والمبادلات",
                points: [
                  "تشخيص مشاكل الغمر (Flooding) والتدميع (Weeping) في صواني أبراج التقطير.",
                  "ظاهرة الرغوة (Foaming) وأسبابها وطرق مكافحتها بمضادات الرغوة وضبط الحرارة.",
                  "تحليل فرق الضغط (Differential Pressure - ΔP) عبر البرج وكشف تكسر الصواني أو انسدادها.",
                  "مشاكل تراكم الرواسب (Fouling) والتسريب الداخلي في شبكات المبادلات الحرارية."
                ]
              }
            ],
            tips: "لا تعتمد على مؤشر واحد أبداً؛ راقب فرق الضغط التفاضلي (ΔP) حول الأبراج وتحقق دائماً من القراءات المجاورة وظروف الخط قبل اتخاذ أي إجراء تشغيلي."
          }
        ),
      ]),
    ],
  };
