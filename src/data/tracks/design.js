import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Process Design Engineer (design)
  // ==========================================
export const designTrack = {
    id: "design",
    title: "Project Engineer (Process Design)",
    desc: "معماري الصناعة الحديثة: من التصميم المفاهيمي (Conceptual) والـ FEED حتى المحاكاة والـ Sizing ودراسات السلامة والـ Optimization.",
    coverage: "ok",
    about: {
      study: [
        "قراءة وتفسير المخططات الهندسية التفصيلية (BFD, PFD, P&ID) ودورة حياة المشروعات من Conceptual حتى الـ FEED والهندسة التفصيلية والتشغيل.",
        "حسابات موازين المادة والطاقة (H&MB) وتحديد توازن الأطوار وسريان الموائع وشبكات الأنابيب.",
        "تحجيم وتصميم المعدات (Equipment Sizing): المضخات، الضواغط، المبادلات الحرارية، أبراج التقطير، وأوعية الفصل.",
        "الأكواد والمعايير العالمية المعتمدة في التصميم (API 520/521, ASME B31.3/Section VIII, TEMA).",
        "برمجيات المحاكاة والتصميم الهندسية: Aspen HYSYS, Aspen Plus, CHEMCAD, AutoCAD, SolidWorks, Python, Excel, Ansys Fluent CFD.",
        "تطبيقات الذكاء الاصطناعي (AI & Machine Learning) في تحسين كفاءة العمليات والصيانة التنبؤية."
      ],
      work: [
        "تصميم العمليات (Process Design): إعداد مخططات الـ PFDs والـ P&IDs وجداول مواصفات المعدات (Process Data Sheets).",
        "تحسين وتطوير العمليات (Optimization): تقليل استهلاك الطاقة والمرافق عبر تكنولوجيا الـ Pinch وتحليل الحساسية (Sensitivity Analysis).",
        "هندسة السلامة وإدارة المخاطر (Process Safety): المشاركة في دراسات PHA و HAZOP وأنظمة تنفيس الضغط وتحديد مستويات الأمان SIL.",
        "تكبير النطاق الصناعي (Scale-Up): نقل العمليات من النطاق المعملي للإنتاج الصناعي الضخم مع التحكم في ظواهر الهروب الحراري.",
        "التنسيق الفني المشترك مع التخصصات الهندسية (الميكانيكا، الكهرباء، والتحكم الآلي) لإنجاز حزم التصميم المتكاملة."
      ],
      workplaces: "شركات المقاولات والاستشارات الهندسية العالمية والمحلية (EPC) مثل: إنبي (Enppi)، بتروجت (Petrojet)، تيسين كروب (thyssenkrupp)، أونسبك (Onspec)، ومكاتب التصميم الفني، مجمعات البترول والتكرير والبتروكيماويات والغاز، وقطاعات الطاقة والبيئة، والصناعات الدوائية والغذائية.",
    },
    stages: [
      stage("قراءة الرسومات", [
        r(
          "Process Chemical Engineer: Architect of Modern Industry",
          "عرض تقديمي",
          "b",
          31,
          ["تحميل العرض التقديمي (Google Drive)", trackLinks.design.stageOne.processEngineerArchitectSlide],
          {
            summary: "عرض تقديمي تعريفي استكشافي (17 شريحة) للمهندس إسلام عبد الحميد، يوضح الهوية الهندسية لمهندس العمليات الكيميائية ومسؤولياته الأربعة الجوهرية، والأدوات البرمجية، وتطبيقات الذكاء الاصطناعي في الصناعة الحديثة.",
            bookNote: "مدخل استكشافي ممتاز ومبسط للتعرف على دور مهندس العمليات الكيميائية (Architect of Modern Industry)؛ يوضح كيف يربط بين الكيمياء والفيزياء والرياضيات لتحويل المواد الخام إلى منتجات صناعية، مع استعراض شامل للأركان الأربعة لوظيفته، أدوات المحاكاة، ونموذج تكامل أدوات الـ AI في بيئة العمل.",
            sections: [
              {
                title: "1. المفهوم والمسؤوليات الأربعة الكبرى (The 4 Pillars)",
                points: [
                  "التعريف الجوهري: مهندس بيحوّل المواد الخام لمنتجات قيّمة (كيماويات، وقود، أدوية، أغذية) باستخدام الكيمياء والفيزياء والرياضيات.",
                  "تصميم العمليات (Process Design): دورة حياة المشروع من Conceptual Design إلى FEED ثم Detailed Engineering ثم التشغيل (Commissioning)، مع دراسات HAZOP و SIL في مرحلة الـ Detailed.",
                  "تحسين العمليات (Optimization): موازين المادة والطاقة (Material & Energy Balance)، المحاكاة (Simulation)، تحليل الحساسية (Sensitivity Analysis)، تكنولوجيا الـ Pinch، ومنهجية Six Sigma.",
                  "السلامة الصناعية (Safety): ترسيخ ثقافة السلامة، فهم المخاطر وإدارتها هندسياً (PHA و HAZOP)، والتعلم المستمر من الحوادث.",
                  "تكبير النطاق (Scale-Up): نقل العمليات من المعمل إلى الإنتاج الصناعي الضخم مع مراعاة مخاطر الهروب الحراري (Thermal Runaway)."
                ]
              },
              {
                title: "2. الأدوات والمهارات الهندسية المطلوبة",
                points: [
                  "برمجيات المحاكاة والنمذجة: Aspen Plus, Aspen HYSYS, CHEMCAD, UniSim.",
                  "برمجيات الرسم والتصميم: AutoCAD P&ID, SolidWorks.",
                  "أدوات التحليل والبيانات: Excel, Python, Minitab, و Ansys Fluent (CFD).",
                  "الأساسيات التقنية: الديناميكا الحرارية، انتقال الحرارة والكتلة، ميكانيكا الموائع، وهندسة التفاعلات (Reaction Engineering).",
                  "المهارات الشخصية: التواصل الفعال (Communication)، حل المشكلات (Problem-Solving)، والعمل الجماعي (Teamwork)."
                ]
              },
              {
                title: "3. سوق العمل ومستقبل الذكاء الاصطناعي (AI)",
                points: [
                  "القطاعات الرئيسية: شركات التصميم والإنشاء (EPC)، الطاقة والبيئة، وصناعات الأغذية والأدوية، مع نمو عالمي متوقع في الطلب.",
                  "تطور الذكاء الاصطناعي: التحول من مجرد أداة حسابية مساعدة إلى محادثات تفاعلية وصولاً إلى وكلاء مستقلين (Autonomous AI Agents).",
                  "تطبيقات الـ AI: خوارزميات التعلم الآلي (Machine Learning) في الـ Optimization والصيانة التنبؤية، والذكاء الاصطناعي التوليدي في التنبؤ بالتفاعلات.",
                  "القاعدة المحورية: المهندس هو الذي يحدد المشكلة ويضع الفروض ويراجع النتائج هندسياً، بينما يتولى الذكاء الاصطناعي تسريع وحساب البيانات المعقدة."
                ]
              }
            ],
            tips: "ملف تمهيدي ممتاز لطلاب وحديثي التخرج لبناء صورة ذهنية شاملة عن تخصص مهندس العمليات ومساره الوظيفي قبل الخوض في التفاصيل الدقيقة للمخططات والحسابات."
          }
        ),
        r(
          "مقارنة المخططات الهندسية: BFD مقابل PFD مقابل P&ID",
          "مقارنة",
          "b",
          33,
          {
            bookNote: "مقارنة حاسمة ومفصلة توضح الفرق الجوهري بين المخطط الكتلي (BFD) ومخطط سريان العمليات (PFD) ورسم الأنابيب والأجهزة التفصيلي (P&ID)، وتدرج استخدام كل منها من دراسات الجدوى وحتى التشغيل الفعلي.",
            comparison: {
              title: "المقارنة الجوهرية بين المخططات الهندسية الثلاثة",
              items: [
                {
                  name: "1. Block Flow Diagram (BFD)",
                  tagline: "المخطط الكتلي المبدئي",
                  desc: "أبسط تمثيل تصويري للمصنع أو العملية الصناعية. يعبر عن كل وحدة أو خطوة إنتاجية بمستطيل أو مربع مع أسهم تربط بينها.",
                  points: [
                    "الاستخدام: في مرحلة دراسات الجدوى الأولية (Feasibility Study).",
                    "المحتوى: توضيح تدفق المواد الخام والمنتجات دون تفاصيل المعدات الداخلية.",
                    "المستهدف: الإدارة العليا والمستثمرون لفهم الفكرة العامة للمصنع بسرعة."
                  ]
                },
                {
                  name: "2. Process Flow Diagram (PFD)",
                  tagline: "مخطط سريان العمليات الأساسي",
                  desc: "المخطط المحوري لمهندس العمليات، يوضح المعدات التشغيلية الرئيسية وترابطها ومسار التحول الكيميائي والفيزيائي.",
                  points: [
                    "المحتوى الإلزامي: جدول موازين المادة والطاقة (Heat & Material Balance Summary).",
                    "الظروف التشغيلية: درجات الحرارة (T)، الضغوط (P)، ومعدلات التدفق (Flow rates) لكل تيار.",
                    "التحكم: يوضح حلقات التحكم الرئيسية فقط (Primary Control Loops) دون تفاصيل الصمامات الدقيقة."
                  ]
                },
                {
                  name: "3. Piping & Instrumentation Diagram (P&ID)",
                  tagline: "المخطط التنفيذي والتفصيلي الشامل",
                  desc: "الوثيقة الهندسية الأكثر أهمية وتفصيلاً، تُستخدم في الشراء، الإنشاء، التركيب، واختبارات السلامة والتشغيل اليومي.",
                  points: [
                    "الأنابيب: كل خط بأبعاده (Size)، رقمه، وفئة المواصفات (Piping Class).",
                    "المحابس: جميع الصمامات بمختلف أنواعها (Gate, Globe, Check, Control Valve, PSV).",
                    "الأجهزة والتحكم: حساسات الضغط والحرارة والتدفق والمستوى (PT, TT, FT, LT) وأنظمة DCS/PLC.",
                    "السلامة: مسارات الطوارئ (Interlocks)، صمامات التنفيس، وشبكة الشعلة (Flare Network)."
                  ]
                }
              ]
            },
            tips: "عند التحضير لمقابلات العمل (Technical Interviews)، احرص دائماً على شرح كيف يتحول الـ BFD إلى PFD بعد المحاكاة، ثم كيف يترجم الـ PFD إلى P&ID بإضافة الأجهزة والـ Piping Specs والأمان."
          }
        ),
        r(
          "مقدمة P&ID (م. شادي عثمان)",
          "فيديو",
          "b",
          31,
          ["مشاهدة (YouTube)", trackLinks.design.stageOne.pidShady],
          {
            bookNote: "محاضرة م. شادي عثمان ضمن سلسلة Friday Discussion (AIChE SUSC)؛ شرح عملي وتطبيقي مكثف يركز على قراءة لوحات الـ P&ID ورموز الأنابيب وأجهزة التحكم وصمامات الأمان ومفاتيح التشغيل بالمواقع الصناعية."
          }
        ),
        r(
          "P&ID Course (Eng. Sarah Zidan)",
          "كورس",
          "b",
          31,
          ["مشاهدة القائمة", trackLinks.design.stageOne.pidSarah],
          {
            bookNote: "سلسلة متكاملة للمهندسة سارة زيدان في قراءة وتفصيل رسومات الـ P&ID وأجهزة القياس والحماية والرموز القياسية (ISA Standards).",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Heat Exchanger P&ID",
                  "2. Compressors P&ID",
                  "3. Pumps P&ID",
                  "4. Valves P&ID symbols - رموز البلوف (المحابس) في الـ P&ID",
                  "5. Examples from real P&ID on instrument symbols - أمثلة على المعدات الموجودة في الـ P&ID",
                  "6. Analyzer instrument symbol at P&ID, pH, gas analyzer",
                  "7. Temperature symbols P&ID, Temp. gauge (bimetallic, filled), thermowell - التعبير عن الحرارة في الـ P&ID",
                  "8. Level instrument symbols at P&ID, level gauge, displacer bulb - التعبير عن مستوى المائع في الـ P&ID",
                  "9. Pressure instrument symbols at P&ID, Pressure (gauge, regulator and manometer) - الضغط في الـ P&ID",
                  "10. Flow instrument symbols at P&ID, flow elements - رموز السريان في الـ P&ID",
                  "11. P&ID instrument location field, DCS and PLC - معرفة أماكن المعدات من خلال الـ P&ID",
                  "12. P&ID instrument, equipment and piping symbols - الرموز المستخدمة في الـ P&ID",
                  "13. BFD, PFD, PFID and P&ID introduction - الفرق بين الطرق المختلفة للتعبير عن العملية بالرسم"
                ]
              }
            ]
          }
        ),
        r(
          "Piping & Instrumentation Diagrams (كتاب كريم سعيد)",
          "ملف",
          "i",
          32,
          ["تحميل", trackLinks.design.stageOne.pidBookKarim],
          {
            bookNote: "كتاب م. كريم سعيد في قراءة رسومات الـ P&ID.. كتاب عربي شهير ومرجع ممتاز يشرح الرموز القياسية وترقيم الخطوط والأجهزة والصمامات بالصور واللوحات الحقيقية لفك شفرات أي لوحة في المصنع بسهولة."
          }
        ),
        r(
          "كورس P&ID من شركة CB&I (شرح الرموز والمخططات)",
          "ملف",
          "b",
          31,
          ["عرض الملف", trackLinks.design.stageOne.pidCbi],
          {
            bookNote: "ملف عرض تقديمي تدريبي رسمي من شركة CB&I العالمية للمقاولات الهندسية (EPC)، يشرح أصول ومعايير قراءة المخططات وتسميات المعدات والأنابيب في المشاريع الكبرى."
          }
        ),
        r("AutoCAD Plant 3D P&ID", "كورس", "i", 31, trackLinks.design.stageOne.autocadPid),
        r(
          "P&ID (Eng. Kareem Gabr)",
          "محاضرة",
          "b",
          31,
          ["سلايدز المحاضرة (PDF)", trackLinks.design.stageOne.pidGabrPdf],
          ["تسجيل المحاضرة (MP4)", trackLinks.design.stageOne.pidGabrVideo],
          ["مشاهدة (YouTube)", trackLinks.design.stageOne.pidGabrYouTube],
          {
            bookNote: "محاضرة هندسية تطبيقية من نقابة المهندسين للمهندس كريم جبر، تشرح مخططات الأنابيب والأجهزة (P&ID) من منظور شركات التصميم الهندسي (EPC)، وتوضح الرموز القياسية العالمية، وقواعد ترقيم الخطوط، وتوصيف المحابس وصمامات التحكم ودوائر السلامة والإنترلوك.",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "معايير الأجهزة ورموزها القياسية وفق كود ISA 5.1 العالمي.",
                  "هيكلية ترقيم الخطوط (Line Sizing, Spec Break, Insulation Class).",
                  "صمامات التحكم (Control Valves) ووضعيات الأمان (Fail Open / Fail Close / Fail Locked).",
                  "قراءة المخطط وفهم دوائر التحكم والربط بين المعدات قبل مرحلة الـ Detail Engineering."
                ]
              }
            ],
            tips: "احرص على حفظ دلالات الحروف الأولى للأجهزة (P للضغط، T للحرارة، F للسريان، L للمنسوب) لفهم أي حلقة تحكم فور النظر إليها."
          }
        ),
        r(
          "PFD and P&ID Drawings (Eng. Mohamed Ayman)",
          "محاضرة",
          "b",
          31,
          ["مشاهدة (YouTube)", trackLinks.design.stageOne.pfdPidAyman],
          {
            bookNote: "شرح تطبيقي ومفصل للمهندس محمد أيمن لقراءة وفهم رسومات العمليات PFD ورسومات الأنابيب والأجهزة P&ID، ورموز المعدات والصمامات والأجهزة وفق المعايير العالمية."
          }
        ),
        r(
          "P&ID Symbols with Examples (م. أحمد يحيى - SOPC)",
          "ملف",
          "b",
          31,
          ["تحميل الكتيب (Google Drive)", trackLinks.design.stageOne.pidSymbolsYehia],
          {
            bookNote: "كتيب ودليل تطبيقي أعده المهندس أحمد يحيى (مهندس عمليات بشركة السويس لتصنيع البترول SOPC)، يشرح شفرات ورموز مخططات الأنابيب والأجهزة (P&ID Symbols) مع أمثلة عملية توضيحية لدوائر التحكم في التدفق والحرارة والمحابس الأوتوماتيكية والهوائية وإشارات الـ PLC و DCS.",
            sections: [
              {
                title: "أهم محتويات وأمثلة الكتيب",
                points: [
                  "شرح دوائر التحكم: Flow Indicating Controller (FIC) و Temperature Indicating Controller (TIC).",
                  "وحدات التحكم بالـ PLC وحواسيب مخرجات الحرارة (YIC و TY).",
                  "حساسات ومرسلات التدفق والحرارة (Flow & Temperature Transmitters - FT, TT).",
                  "أنواع الإشارات: الإشارات الكهربائية (Electrical Signal)، الإشارات الهوائية (Pneumatic Line)، وروابط البيانات (Data Link).",
                  "المحابس والمشغلات: المحابس التي تعمل بضغط الهواء (Pneumatically Actuated) والمحابس الكهربائية (Electrically Actuated)."
                ]
              }
            ],
            tips: "الكتيب يعتبر مرجعاً سريعاً ومركزاً جداً لمراجعة الرموز قبل مقابلات العمل في مصافي التكرير وشركات العمليات."
          }
        ),
        r(
          "Process Engineering Drawings — Book 2: Symbols & P&ID (سلسلة تكنولوجيا البترول)",
          "ملف",
          "i",
          32,
          ["تحميل المرجع (Google Drive)", trackLinks.design.stageOne.processEngDrawingsBook2],
          {
            bookNote: "مرجع هندسي تفصيلي ومعتمد ضمن سلسلة تكنولوجيا معالجة البترول (Petroleum Processing Technology Series - Book 2)؛ يغطي الرموز القياسية لخطوط الأنابيب والمعدات والصمامات، والتطبيقات العملية والـ Interlocks، ورسومات الـ P&ID المعيارية لمصافي النفط.",
            sections: [
              {
                title: "فهرس محتويات الكتاب (3 أقسام رئيسية)",
                points: [
                  "Section 1 - Symbols: Pipeline Symbols, Line Numbering & Identification, Product & System Designations, Pipeline Specifications & Insulation.",
                  "Pipe Fittings, Valves (On/Off, Control, One-Way, Special Duties), and Valve Actuators.",
                  "Equipment Identification: Tanks & Pressure Vessels, Filters, Pumps & Compressors, Heat Exchangers, and Metering Devices.",
                  "Section 2 - Practical Application of Symbols: Plate Type Heat Exchangers and Valve Interlocks.",
                  "Section 3 - Piping and Instrument Diagrams: لوحات ونماذج P&ID تطبيقية متكاملة (Figures 7 to 17)."
                ]
              }
            ]
          }
        ),
        r(
          "Know, Read & Understand P&IDs (Udemy — WR Training)",
          "كورس",
          "b",
          31,
          ["دورة Udemy", trackLinks.design.stageOne.pidUdemyWrTraining],
          {
            bookNote: "دورة تدريبية تطبيقية مميزة على منصة Udemy من WR Training؛ تشرح أصول وفهم مخططات الأنابيب وأجهزة القياس (P&IDs) من منظور البناء والتشييد (Construction) وتجارب التشغيل (Commissioning) والتشغيل الآمن والصيانة في المصانع الكيميائية ومصافي النفط.",
            sections: [
              {
                title: "أهم محاور وما تتعلمه في الدورة",
                points: [
                  "Understand and evaluate the purpose, content, and importance of P&IDs to construction, commissioning, safe operation and maintenance.",
                  "Learn how to read, interpret and successfully understand ALL P&IDs through numerous real industrial examples.",
                  "Identify the 5 key sections of your P&ID (title block, grid system, revision block, notes and legend, engineering drawing block).",
                  "Know and identify valve symbols on your P&IDs (gate, globe, ball, butterfly, needle...).",
                  "فهم وتفسير دوائر التحكم وأجهزة القياس ومسارات الأنابيب وتسميات الخطوط القياسية والأمان."
                ]
              }
            ],
            tips: "تعتبر هذه الدورة من أفضل الكورسات التطبيقية لمن يريد إتقان قراءة لوحات الـ P&ID بطلاقة واجتياز المقابلات الهندسية ومواقف العمل الميداني."
          }
        ),
      ]),
      stage("مراحل المشروع", [
        r(
          "دورة حياة المشروع ومراحل الـ FEED التفصيلية",
          "ملف",
          "b",
          35,
          ["كورس NPTEL لتصميم المصانع", trackLinks.design.stageThree.nptelDesign],
          ["مرجع Process Design Manual", trackLinks.design.stageThree.processDesignManual],
          {
            bookNote: "استعراض شامل لمسار المشروعات الهندسية الكبرى (EPC Projects) ومراحل التصميم الخمسة (Concept, Pre-FEED, FEED, Detailed EPC, Commissioning) ودور مهندس العمليات في إعداد الـ Deliverables وموازين المادة والـ Data Sheets.",
            sections: [
              {
                title: "المراحل الخمس لدورة حياة المشروع الهندسي",
                points: [
                  {
                    label: "1. Conceptual Design (التصميم المبدئي)",
                    desc: "دراسة الجدوى الفنية والاقتصادية (Techno-Economic Feasibility)، واختيار الموقع الجغرافي وتحديد الطاقة الإنتاجية والتكنولوجيا المرخصة."
                  },
                  {
                    label: "2. Pre-FEED (ما قبل التصميم الهندسي الأولي)",
                    desc: "تحديد المعالم الهندسية الأساسية وإعداد الـ BFD وتخطيط الميزانية التقديرية لرأس المال (CAPEX) بنسبة دقة تقريبية ±30%."
                  },
                  {
                    label: "3. FEED — Front-End Engineering Design (التصميم الهندسي الأولي)",
                    desc: "المرحلة الذهبية لمهندس العمليات! يتم فيها بناء نموذج المحاكاة الكامل (HYSYS/Aspen)، إعداد موازين المادة والطاقة (H&MB)، إصدار الـ PFDs والـ P&IDs الأولية، وتحديد مواصفات المعدات (Data Sheets) وحسابات الـ Sizing بدقة تكلفة ±10% إلى ±15% لطرح المناقصات."
                  },
                  {
                    label: "4. Detailed Engineering & EPC (الهندسة التفصيلية والإنشاءات)",
                    desc: "إعداد كافة المخططات التنفيذية الإنشائية والكهربائية والميكانيكية، وتوريد المعدات والشراء (Procurement) والبدء في بناء المصنع ميدانياً (Construction)."
                  },
                  {
                    label: "5. Pre-Commissioning & Commissioning (ما قبل التشغيل والتشغيل الفعلي)",
                    desc: "اختبارات الضغط والغسيل وعزل الخطوط (Flushing & Hydrotesting)، ثم تغذية المصنع بالمواد الكيميائية وبدء التشغيل التجريبي وتسليمه لفريق العمليات (Operations Team)."
                  }
                ]
              },
              {
                title: "أهم مخرجات مهندس العمليات في الـ FEED (Deliverables)",
                points: [
                  "Process Simulation Report & Heat and Material Balance (H&MB)",
                  "Process Flow Diagrams (PFD) and Utility Flow Diagrams (UFD)",
                  "Piping & Instrumentation Diagrams (P&ID)",
                  "Equipment Process Data Sheets (Pumps, Heat Exchangers, Vessels, Columns)",
                  "Process Description & Operating Philosophy",
                  "Cause & Effect Matrix and Safety Safeguards"
                ]
              }
            ],
            tips: "الـ FEED هي المرحلة التي تحدد نجاح أو فشل المشروع؛ فأي تعديل هندسي يُكتشف أثناء الـ FEED يكلف أضعافاً مضاعفة إذا تم اكتشافه لاحقاً أثناء الإنشاءات."
          }
        ),
      ]),
      stage("مراجع التصميم", [
        r(
          "Equipment Design: كورس تصميم معدات هندسة كيميائية وبترول (د. مصطفى عوض / نوفل)",
          "كورس",
          "i",
          38,
          ["مشاهدة القائمة (YouTube)", trackLinks.design.stageThree.equipmentDesignNofal],
          {
            bookNote: "كورس تطبيقي متكامل (11 فيديو) في تصميم معدات العمليات والتكرير يقدمه د. مصطفى عوض / نوفل (أستاذ هندسة التكرير وتصميم المعدات بجامعة السويس) عبر قناة Process Safety بالعربي؛ يجمع بين الأساسيات النظرية، المعادلات الهيدروليكية، وحسابات الـ Sizing الميكانيكية والتشغيلية لمختلف المعدات.",
            sections: [
              {
                title: "محاور ومحتويات الكورس (11 محاضرة تفصيلية)",
                points: [
                  "1. هندسة تصميم معدات البترول (محاضرة تمهيدية: أساسيات وتصنيف ومعايير تصميم المعدات)",
                  "2. تصميم الصواني المثقبة لأبراج التقطير (Sieve Tray Design - جزآن: مقدمة وتصميم تفصيلي وحسابات الفتحات والمصارف Downcomers)",
                  "3. تحسين أداء أبراج الحشو (Packed Columns) وطرق حل ومقاومة مشاكل الغمر (Flooding Mechanics)",
                  "4. أسرار تصميم المبادلات الحرارية الأنبوبية (Shell & Tube Heat Exchangers Design)",
                  "5. تصميم خزانات البترول وتحديد السماكات والأقطار ومعايير الأمان (Storage Tanks API 650)",
                  "6. تصميم مكثفات المياه وتطبيقات التبريد في العمليات (Water Condensers Design)",
                  "7. أساسيات وتصميم الضواغط الغازية (Compressors: أسس التصميم، أمثلة حسابية محلولة، وتطبيقات عملية - 3 محاضرات)"
                ]
              }
            ],
            tips: "كورس فائق القيمة لمهندسي التصميم والعمليات (Process Design & Operations Engineers) لربط نتائج برامج المحاكاة الهندسية (Simulation) بالحسابات الفعلية وتحديد أبعاد المعدات وأدائها الهيدروليكي بأمان."
          }
        ),
        r(
          "NPTEL: Principles and Practices of Process Equipment and Plant Design",
          "كورس",
          "i",
          38,
          trackLinks.design.stageThree.nptelDesign,
          {
            bookNote: "كورس معهد NPTEL الهندي.. كورس أكاديمي وتطبيقي عميق جداً في تصميم معدات العمليات والمصانع وحسابات الإجهادات والـ Sizing الميكانيكي والحراري للمفاعلات والمبادلات وأوعية الضغط وفق كود ASME."
          }
        ),
        r(
          "Process Design Engineering Manual",
          "كتاب",
          "a",
          38,
          ["تحميل", trackLinks.design.stageThree.processDesignManual],
          {
            bookNote: "مانيوال شامل في هندسة التصميم وتجهيز حسابات المعدات وإعداد الـ Process Data Sheets للمضخات والضواغط والفواصل وشبكات الأنابيب وفق المعايير الاستشارية العالمية."
          }
        ),
        r(
          "Rules of Thumb for Chemical Engineers",
          "كتاب",
          "i",
          40,
          ["تحميل الكتاب", trackLinks.design.stageThree.rulesOfThumbBook],
          ["رأي د. أحمد جابر في الكتاب", trackLinks.design.stageThree.gaberRulesOfThumb],
          {
            bookNote: "كتاب القواعد الذهبية لـ Carl Branan ومراجعة د. أحمد جابر لأهميته.. يمنحك التقديرات السريعة لأبعاد وسعات المعدات قبل الحسابات المفصلة للتدقيق على نتائج المحاكاة وحسابات التحجيم السريعة في المقابلات والموقع."
          }
        ),
        r(
          "Process Sizing Criteria",
          "ملف",
          "i",
          39,
          ["تحميل", trackLinks.design.stageThree.processSizingCriteria],
          {
            bookNote: "ملف معايير تحجيم المعدات الهندسية (Process Sizing Criteria).. يحتوي على سرعات السريان الموصى بها وهبوط الضغط المسموح الذي يستند إليه مهندس التصميم لتحديد أبعاد المعدات وأقطار الأنابيب."
          }
        ),
        r(
          "Heat Integration in Refineries (Eng. Ahmed Elkholy)",
          "محاضرة",
          "a",
          38,
          ["سلايدز المحاضرة (PPTX)", trackLinks.design.stageThree.heatIntegrationKholyPdf],
          ["تسجيل المحاضرة (MP4)", trackLinks.design.stageThree.heatIntegrationKholyVideo],
          ["مشاهدة (YouTube)", trackLinks.design.stageThree.heatIntegrationKholyYouTube],
          {
            bookNote: "محاضرة تخصصية متقدمة من نقابة المهندسين للمهندس أحمد الخولي تتناول التكامل الحراري في وحدات التقطير الجوي والتفريغي (CDU / VDU) بمصافي تكرير البترول باستخدام تكنولوجيا البنش (Pinch Technology). توضح استرجاع الطاقة بين تيارات المنتجات الساخنة وتيار الزيت الخام لتقليل استهلاك الوقود والانبعاثات.",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "مبادئ تقنية البنش وحساب الفرق الحراري الأصغر (ΔTmin).",
                  "رسم المنحنيات المركبة (Composite Curves & Grand Composite Curve).",
                  "تصميم وتحسين شبكات المبادلات الحرارية (HEN Design) في وحدات التكرير.",
                  "حساب وفر الوقود وتكلفة الطاقة في أفران التقطير الجوي والتفريغي."
                ]
              }
            ],
            tips: "التكامل الحراري هو الركيزة الأساسية لخفض تكلفة التشغيل (OPEX) في معامل التكرير الحديثة."
          }
        ),
        r(
          "Process Integration (AICHE 2025 - Eng. Mohamed Ayman)",
          "محاضرة",
          "i",
          38,
          ["مشاهدة (YouTube)", trackLinks.design.stageThree.processIntegrationAiche],
          {
            bookNote: "محاضرة قيمة يقدمها المهندس محمد أيمن بالتعاون مع AICHE 2025، تتناول تكامل العمليات الكيميائية (Process Integration)، وتكوين عمليات التكرير (Refining Process Configuration)، ومفاهيم تحسين العمليات (Process Optimization)، ومسؤوليات مهندس العمليات في تكامل الأنظمة الصناعية."
          }
        ),
        r(
          "Reactors and Chemical Reaction (Eng. Sarah Zidan)",
          "كورس",
          "i",
          38,
          ["مشاهدة القائمة", trackLinks.design.stageThree.reactorsSarah],
          {
            bookNote: "سلسلة تفاعلات وتصميم المفاعلات الكيميائية للمهندسة سارة زيدان، تغطي حركية التفاعلات الكيميائية (Reaction Kinetics)، وتصميم أنواع المفاعلات الصناعية، وموازين المادة والحرارة حول المفاعل.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Material balance, Neutralization and combustion reaction",
                  "2. Exothermal, Endothermal, Replacement reaction - التفاعل الطارد والماص والاستبدال",
                  "3. Reactors: definition, types and some factors that affect reaction"
                ]
              }
            ]
          }
        ),
      ]),
      stage("الهيدروليكا والأكواد", [
        r(
          "Sizing procedure for liquid service",
          "فيديو",
          "i",
          9,
          trackLinks.design.stageFour.sizingLiquid,
          {
            bookNote: "خطوات حساب أقطار الأنابيب لسريان السوائل وهبوط الضغط وسرعات السريان الموصى بها لمنع التآكل والترسب وتطبيق معادلة دارسي-فايسباخ لاختيار القطر الاقتصادي."
          }
        ),
        r("Flow measuring devices", "كورس", "i", 9, trackLinks.design.stageFour.flowMeasuring),
        r(
          "Kolmetz: Piping Hydraulics, Line Sizing",
          "ملف",
          "i",
          41,
          ["تحميل", trackLinks.design.stageFour.kolmetzPiping],
          {
            bookNote: "مرجع وحسابات Kolmetz الهندسية لحساب أقطار الأنابيب وهبوط الضغط واختيار جداول المواسير (Pipe Schedules) وحسابات السريان أحادي وثنائي الطور والسرعات المسموحة (Erosional Velocity)."
          }
        ),
        r("موقع حسابات هندسية", "موقع", "i", 42, trackLinks.design.stageFour.codeCalc),
      ]),
    ],
  };
