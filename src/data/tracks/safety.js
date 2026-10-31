import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Process Safety / HSE (safety)
  // ==========================================
export const safetyTrack = {
    id: "safety",
    title: "Process Safety Engineer (Loss Prevention)",
    desc: "سلامة العمليات، منع الخسائر، دراسات PSM و HAZOP و HAZID، والوقاية من الحوادث الصناعية.",
    coverage: "ok",
    about: {
      study: [
        "Process Safety Management (PSM وفق معايير OSHA 1910.119).",
        "منهجيات تقييم المخاطر وتحديد الأخطار: HAZID, HAZOP, What-If, QRA, LOPA.",
        "تحليل الكوارث الكيميائية والبترولية الكبرى واستخلاص الدروس المستفادة.",
        "تصميم شبكات الإغاثة وصمامات الأمان وشبكات Relief & Flare Systems."
      ],
      work: [
        "العمل كـ Process Safety / Loss Prevention Engineer وتأمين منشآت النفط والغاز.",
        "قيادة وتنظيم جلسات HAZOP والتأكد من توافر أنظمة الحماية الهندسية الكافية.",
        "مراجعة تصاريح العمل (Permit to Work - PTW) وإدارة التغيير الهندسي (MOC).",
        "تقييم سلامة خطوط الأنابيب والمعدات لمنع حوادث الانفجار والتسربات السامة."
      ],
      workplaces: "شركات استشارات السلامة (بتروسيف Petrosafe)، المكاتب الاستشارية (Enppi)، وكافة شركات قطاع البترول والغاز والتكرير والبتروكيماويات.",
    },
    stages: [
      stage("الأساس", [
        r(
          "مقارنة دراسات السلامة: HAZID مقابل HAZOP",
          "مقارنة",
          "b",
          62,
          {
            bookNote: "مقارنة منهجية وتفصيلية بين أهم دراستين لتقييم المخاطر في المصانع؛ HAZID للمسح المبكر للأخطار العامة، و HAZOP للفحص المنهجي الدقيق للـ P&IDs باستخدام الكلمات الدليلية (Guide Words).",
            comparison: {
              title: "المقارنة الجوهرية بين دراستي HAZID و HAZOP",
              items: [
                {
                  name: "1. HAZID — Hazard Identification",
                  tagline: "تحديد المخاطر في المراحل المبكرة",
                  desc: "جلسة عصف ذهني هندسية شاملة تُعقد في بداية المشروع لتحديد الأخطار المحيطة بالمصنع بشكل عام.",
                  points: [
                    "التوقيت: تُجرى في المراحل الأولى (Conceptual أو Pre-FEED) قبل تثبيت التفاصيل الهندسية.",
                    "النطاق: مسح عام للموقع، الزلازل، المناخ، قرب المصنع من التجمعات السكانية، وطبيعة المواد الخطرة العامة.",
                    "المنهجية: استخدام قوائم مراجعة قياسية (Checklists) لتفادي المفاجآت الكبرى في المخططات العامة للمصنع."
                  ]
                },
                {
                  name: "2. HAZOP — Hazard & Operability Study",
                  tagline: "دراسة المخاطر وقابلية التشغيل الدقيقة",
                  desc: "فحص تقني دقيق ومنهجي صارم يقوده مهندس متخصص (HAZOP Leader) لفحص كل خط ومعدة بالتفصيل.",
                  points: [
                    "التوقيت: تُجرى بعد اكتمال واعتماد الـ P&IDs في مرحلة الـ FEED و Detailed Design.",
                    "النطاق: تقسيم المصنع إلى عقد هندسية (Nodes) وفحص كل عقدة على حدة باستخدام الكلمات الدليلية.",
                    "الكلمات الدليلية (Guide Words): (No Flow, High Flow, High Pressure, Low Pressure, High Temp, Reverse Flow, Contamination).",
                    "المخرجات: تحديد الأسباب (Causes)، الآثار الناتجة (Consequences)، وسائل الحماية القائمة (Safeguards)، وإصدار توصيات إلزامية لتعديل التصميم لضمان الأمان التام."
                  ]
                }
              ]
            },
            tips: "مهندس العمليات (Process Engineer) هو الركيزة الأساسية في جلسات الـ HAZOP؛ لأنه المسؤول عن شرح سيناريوهات السريان والضغط والحرارة للفريق."
          }
        ),
        r(
          "سلسلة أساسيات سلامة العمليات — Process Safety Fundamentals (Process Talks بالمصري)",
          "كورس",
          "b",
          62,
          ["قائمة التشغيل الكاملة (42 فيديو على YouTube)", trackLinks.safety.stageOne.processSafetyFundamentalsPlaylist],
          ["مقدمة السلسلة والفرق بين السلامتين", trackLinks.safety.stageOne.psfIntro],
          ["العناصر العشرون لإدارة PSM", trackLinks.safety.stageOne.psfTwentyElements],
          ["فك شفرة HAZID (وزارة البترول المصرية)", trackLinks.safety.stageOne.psfEgyptianPetroleumHazid],
          ["دراسات السلامة لوزارة البترول", trackLinks.safety.stageOne.psfEgyptianPetroleumStudies],
          ["تصنيف المناطق الخطرة (HAC)", trackLinks.safety.stageOne.psfHac],
          ["مبدأ تخفيض المخاطر (ALARP)", trackLinks.safety.stageOne.psfAlarp],
          {
            bookNote: "سلسلة تدريبية متكاملة وشاملة باللغة العربية تضم 42 محاضرة فيديو مرئية من قناة «Process Talks بالمصري»؛ تعد المرجع الأفضل والأحدث في أساسيات سلامة العمليات (Process Safety Fundamentals) وإدارة PSM وفق منظومة CCPS (العناصر الـ 20) ومعايير OSHA، مع ربط مباشر ومميز بمتطلبات وزارة البترول والثروة المعدنية المصرية لمهندسي المشروعات والتصميم والعمليات.",
            sections: [
              {
                title: "1. المفاهيم الأساسية ونشأة سلامة العمليات (Fundamentals & Risk)",
                points: [
                  "الفرق الجوهري بين السلامة الشخصية المهنية (Personal Safety) التي تركز على السقوط والتعثر ومعدات الوقاية (PPE)، وسلامة العمليات (Process Safety) التي تركز على منع تسرب المواد الخطرة واحتواء الطاقة ومنع الانفجارات الكارثية.",
                  "التعريف الهندسي لمفهومي الخطر الكامن (Hazard) ومستوى المخاطرة والاحتمالية (Risk) وكيفية التعامل مع مصفوفة المخاطر الصناعية وتقييم الشدة والتكرار.",
                  "التطور التاريخي لسلامة العمليات والدروس المستفادة من الكوارث المفصلية (Flixborough 1974, Seveso 1976, Bhopal 1984, Texas City 2005)."
                ]
              },
              {
                title: "2. العناصر العشرون لإدارة سلامة العمليات (20 PSM Elements - CCPS System)",
                points: [
                  "ركيزة الالتزام بثقافة السلامة (Commit to Process Safety): ثقافة سلامة العمليات (Culture)، والامتثال للأكواد والمعايير القياسية (Compliance with Standards)، وبناء الكفاءة الهندسية وتأهيل المهندسين (Competency)، ومشاركة العاملين (Workforce Involvement)، والتواصل المجتمعي مع المعنيين (Stakeholder Outreach).",
                  "ركيزة فهم الأخطار والمخاطر (Understand Hazards and Risk): إدارة معرفة العمليات وبيانات التصميم (Process Knowledge Management - PKM)، وتحديد الأخطار وتحليل المخاطر (Hazard Identification & Risk Analysis - HIRA عبر دراسات HAZID, HAZOP, What-If).",
                  "ركيزة إدارة المخاطر (Manage Risk): إجراءات التشغيل القياسية (SOP)، ممارسات العمل الآمن وتصاريح العمل (Safe Work Practices & PTW)، سلامة المعدات والنزاهة الميكانيكية والاعتمادية (Asset Integrity & Reliability)، إدارة المقاولين (Contractor Management)، وبرامج التدريب وضمان الأداء (Training & Performance Assurance).",
                  "إدارة التغيير والجاهزية للتشغيل: التحكم في التغييرات الهندسية والتنظيمية (Management of Change - MOC)، ومراجعة سلامة ما قبل التشغيل (Operational Readiness & PSSR)، والانضباط التشغيلي (Conduct of Operations)، وخطط وإجراءات الاستجابة للطوارئ (Emergency Response Plan - ERP).",
                  "ركيزة التعلم من الخبرة (Learn from Experience): التحقيق المنهجي في الحوادث وشبه الحوادث (Incident Investigation & Root Cause Analysis)، ومؤشرات قياس الأداء الرائدة والتابعة (Measurements & Metrics)، وتدقيق السلامة الفني (Auditing)، والمراجعة الإدارية للتحسين المستمر (Management Review & Continuous Improvement)."
                ]
              },
              {
                title: "3. سلامة العمليات للتخصصات الهندسية المختلفة (Cross-Disciplinary PSM)",
                points: [
                  "دور مهندسي العمليات (Process)، الميكانيكا (Mechanical)، والكهرباء والأجهزة (Electrical & Instrumentation) في تأمين وحماية حواجز السلامة (Safety Barriers).",
                  "إدارة وثائق التصميم الهندسي (P&IDs, PFDs, Cause & Effect Diagrams, Equipment Datasheets) كحجر زاوية لمعرفة العمليات.",
                  "تطبيق إجراءات إدارة التغيير (MOC) قبل تعديل أي معدة أو خط أنابيب أو تغيير ظروف التشغيل (P, T, Flow)."
                ]
              },
              {
                title: "4. دراسات سلامة العمليات وتطبيقات قطاع البترول المصري (Safety Studies in Egyptian Oil & Gas)",
                points: [
                  "فك شفرة ومنهجية دراسة تحديد الأخطار (HAZID) طبقاً لمتطلبات وأدلة وزارة البترول والثروة المعدنية المصرية.",
                  "دراسات تقييم المخاطر المتكاملة وتحديد قابلية التشغيل (HAZOP) والتقييم الكمي للمخاطر (QRA) وتحليل طبقات الحماية (LOPA).",
                  "تصنيف المناطق الخطرة (Hazardous Area Classification - HAC) ومناطق Zone 0, Zone 1, Zone 2 واختيار المعدات الكهربائية المقاومة للانفجار (Explosion-Proof).",
                  "تطبيق مبدأ خفض المخاطر إلى أدنى مستوى معقول عملياً (ALARP - As Low As Reasonably Practicable) وإدارة المقايضات الهندسية والاقتصادية."
                ]
              },
              {
                title: "5. تحليل الكوارث الصناعية الكبرى (Industrial Disaster Case Studies)",
                points: [
                  "كارثة بوبال بالهند (Bhopal 1984): سيناريو تفاعل الماء مع غاز MIC، وانهيار أنظمة الأمان المتعددة وسقوط آلاف الضحايا.",
                  "انفجار مصفاة تكساس سيتي (BP Texas City 2005): فشل مؤشرات المنسوب وامتلاء برج التقطير وتنفيس الهيدروكربونات إلى الهواء ووجود كبائن المقاولين في المنطقة الخطرة.",
                  "كارثة ديبووتر هورايزون (Macondo 2010): فشل عزل الأسمنت ومانع الانفجار BOP وسوء تقدير اختبارات الضغط السلبية.",
                  "كارثة منصة بايبر ألفا (Piper Alpha 1988): انعدام التواصل في تسليم الورديات وتشغيل مضخة تم فك صمام أمانها مسبقاً بدون عزل أعمى.",
                  "كارثة مستودعات بانسفيلد (Buncefield 2005): تعطل مفتاح المنسوب التلقائي وفيضان البنزين وتكوّن سحابة بخارية غير محصورة أدت لأكبر انفجار في أوروبا وقت السلم."
                ]
              }
            ],
            tips: "يُنصح بمشاهدة السلسلة بالترتيب: ابدأ بفيديو المقدمة وفهم معنى الخطر والمخاطرة، ثم خصص وقتاً لكل عنصر من عناصر الـ 20 PSM، وركز بوجه خاص على فيديوهات دراسات وزارة البترول المصرية وتصنيف المناطق الخطرة HAC ودراسات الحوادث الكبرى."
          }
        ),
        r(
          "أساسيات ومعايير سلامة العمليات (PSM & OSHA)",
          "كورس",
          "b",
          62,
          ["كورس أساسيات PSM (م. السيد عامر)", trackLinks.safety.stageOne.psmIntroAmer],
          ["معايير OSHA 1910.119", trackLinks.safety.stageOne.osha1910],
          ["كتاب CCPS لإدارة السلامة", trackLinks.safety.stageOne.ccpsBook],
          {
            bookNote: "حزمة تأسيسية متكاملة في إدارة سلامة العمليات الكيميائية (PSM) وتطبيق معايير OSHA 1910.119 الإلزامية وكتاب مركز سلامة العمليات الكيميائية CCPS للوقاية من الحوادث الكبرى."
          }
        ),
        r(
          "Process Safety Management — PSM (م. أحمد شفيق)",
          "فيديو",
          "i",
          61,
          ["مشاهدة (YouTube)", trackLinks.safety.stageOne.psmShafik],
          {
            bookNote: "محاضرة متخصصة للمهندس أحمد شفيق عطية تشرح أركان إدارة سلامة العمليات (Process Safety Management - PSM)؛ تتناول متطلبات الـ OSHA ومعايير تقييم المخاطر وتجنب الكوارث الكيميائية والتسريبات في مصانع البترول والغاز."
          }
        ),
        r(
          "PSSR — Pre-Startup Safety Review (م. أحمد شفيق)",
          "فيديو",
          "i",
          61,
          trackLinks.safety.stageOne.pssr,
          {
            bookNote: "فيديو م. أحمد شفيق لمراجعة السلامة قبل بدء التشغيل (PSSR).. أحد أهم عناصر الـ PSM الإلزامية للتأكد من اكتمال الإنشاءات والمحابس وخطوط الإغاثة وفق المواصفات المعتمدة قبل تدفق المواد الخطرة."
          }
        ),
        r(
          "Can We Do Without a Flare (Eng. Mohamed Helmy Abu Zahra)",
          "محاضرة",
          "i",
          62,
          ["سلايدز المحاضرة (PDF)", trackLinks.safety.stageOne.flareAbuZahraPdf],
          ["تسجيل المحاضرة (MP4)", trackLinks.safety.stageOne.flareAbuZahraVideo],
          ["مشاهدة (YouTube)", trackLinks.safety.stageOne.flareAbuZahraYouTube],
          {
            bookNote: "محاضرة مميزة من نقابة المهندسين للمهندس محمد حلمي أبو زهرة، تجيب هندسياً وعملياً على تساؤل: «هل يمكن تشغيل منشأة بترولية أو غازية بدون شعلة؟»، وتستعرض تصميم شبكات التنفيس وأبراج الشعلة (Flare Systems) وصمامات الأمان، وتقنيات الحد من الحرق واسترجاع غازات الشعلة (Zero Flaring & FGRU).",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "دور منظومة الشعلة كخط دفاع أخير لحماية المنشأة من الانفجار وارتفاع الضغط.",
                  "مكونات شبكة الشعلة: Blowdown Drums, Knockout Drum, Water Seal, Flare Tip.",
                  "صمامات تصريف الضغط والضغط الزائد (PSVs, BDVs, Rupture Discs).",
                  "الضوابط البيئية ومبادرة وقف الحرق الروتيني وتقنيات وحدات استرجاع الغاز (FGRU)."
                ]
              }
            ],
            tips: "الشعلة ليست مجرد مدخنة لحرق الغازات، بل هي نظام أمان هندسي معقد ومصمم لاستيعاب أقصى سيناريو طوارئ في المصنع."
          }
        ),
        r(
          "Safety Awareness in Oil and Gas Industry (Eng. Mohamed Ayman)",
          "محاضرة",
          "b",
          62,
          ["مشاهدة (YouTube)", trackLinks.safety.stageOne.safetyAwarenessAyman],
          {
            bookNote: "محاضرة توعوية للمهندس محمد أيمن تتناول إجراءات السلامة الصناعية والتوعية بمخاطر العمليات في قطاع البترول والغاز ومعايير الحماية الشخصية والميدانية."
          }
        ),
        r(
          "Introduction to Process Safety (م. سيد عمار)",
          "محاضرة",
          "b",
          62,
          ["مشاهدة (YouTube)", trackLinks.safety.stageOne.psmIntroAmmar],
          {
            bookNote: "محاضرة تأسيسية من تدريبات SPE Suez يقدمها م. سيد عمار، تتناول مدخل إدارة سلامة العمليات (Process Safety Management - PSM)، والفرق بين السلامة المهنية وسلامة العمليات ومفاهيم تقييم المخاطر في منشآت النفط والغاز."
          }
        ),
      ]),
      stage("دراسات حوادث", [
        r(
          "BP Texas City 2005 — Process Safety Culture",
          "فيديو",
          "i",
          59,
          ["إنجليزي (CSB)", trackLinks.safety.stageTwo.psmBpTexas],
          ["مترجم (CSB)", trackLinks.safety.stageTwo.psmBpTexasAr],
          ["تحليل بالعربي (Process Talks)", trackLinks.safety.stageTwo.psfTexasCityAr],
          {
            bookNote: "تحليل كارثة مصفاة تكساس سيتي 2005 من مجلس السلامة الكيميائية (CSB).. يوضح عواقب ملء برج التقطير واختلال أجهزة القياس وغياب ثقافة سلامة العمليات، وأهمية عدم الاعتماد على مؤشر قياس وحيد."
          }
        ),
        r(
          "BP Macondo 2010 — Failure to Learn",
          "فيديو",
          "i",
          60,
          ["فيديو الكارثة (CSB)", trackLinks.safety.stageTwo.psmMacondo],
          ["تحليل بالعربي (Process Talks)", trackLinks.safety.stageTwo.psfMacondoAr],
          {
            bookNote: "كارثة منصة ديب ووتر هورايزون (Macondo 2010).. أكبر تسرب نفطي في التاريخ وتحليل أسباب فشل مانع الانفجار (BOP) وتجاهل مؤشرات الضغط وأهمية إدارة التغيير (MOC)."
          }
        ),
        r(
          "Piper Alpha 1988 — Safe Work Practices (مدبلج)",
          "فيديو",
          "i",
          60,
          ["فيديو الكارثة (مدبلج)", trackLinks.safety.stageTwo.psmPiper],
          ["تحليل بالعربي (Process Talks)", trackLinks.safety.stageTwo.psfPiperAr],
          {
            bookNote: "كارثة منصة بايبر ألفا 1988 في بحر الشمال.. أسوأ كارثة في تاريخ المنصات البحرية ودرس قاسٍ في تصاريح العمل (Permit to Work) والتواصل بين الورديات بعد تشغيل مضخة صمام أمانها مفكوك."
          }
        ),
        r(
          "Bhopal 1984",
          "فيديو",
          "i",
          60,
          ["فيديو الكارثة (CSB)", trackLinks.safety.stageTwo.psmBhopal],
          ["تحليل بالعربي (Process Talks)", trackLinks.safety.stageTwo.psfBhopalAr],
          {
            bookNote: "كارثة بوبال 1984 بالهند.. أكبر وأسوأ حادث كيميائي وصناعي في التاريخ نتيجة تسرب غاز ميثيل إيزوسيانات (MIC) القاتل من مصنع يونيون كاربايد، وتوضح أهمية أنظمة التبريد والغسيل والتصميم الآمن المتأصل (Inherently Safer Design)."
          }
        ),
        r(
          "Buncefield 2005 — Overfill & Vapor Cloud Explosion",
          "فيديو",
          "i",
          60,
          ["تحليل الكارثة بالعربي (Process Talks)", trackLinks.safety.stageTwo.psfBuncefieldAr],
          {
            bookNote: "تحليل كارثة انفجار مستودعات تخزين الوقود في بانسفيلد ببريطانيا عام 2005.. دراسة أسباب فيضان صهاريج البنزين وفشل مفاتيح المنسوب العالي (High Level Switches) وتكوّن سحابة بخار هيدروكربونية غير محصورة (VCE) والدروس المستفادة في أنظمة الحماية التلقائية وعزل المنشآت."
          }
        ),
        r("Port Neal 1994 — Operating Procedures", "فيديو", "i", 60, trackLinks.safety.stageTwo.psmPortNeal),
        r("Esso Longford 1998 — Hazard Identification", "فيديو", "i", 59, ["1", trackLinks.safety.stageTwo.psmEsso1], ["2", trackLinks.safety.stageTwo.psmEsso2]),
        r("ARCO Channelview 1990 — Asset Integrity", "فيديو", "i", 59, trackLinks.safety.stageTwo.psmArco),
        r("NASA Columbia 2003", "فيديو", "i", 59, trackLinks.safety.stageTwo.psmColumbia),
        r("Concept Sciences 1999 — Process Knowledge", "فيديو", "i", 59, trackLinks.safety.stageTwo.psmConceptSciences),
        r("Partridge Raleigh 2006 — Contractor Management", "فيديو", "i", 60, ["إنجليزي", trackLinks.safety.stageTwo.psmPartridge], ["مترجم", trackLinks.safety.stageTwo.psmPartridgeAr]),
        r("Formosa Plastics 2004 — Conduct of Operations", "فيديو", "i", 60, trackLinks.safety.stageTwo.psmFormosa),
        r("Sandoz 1986 — Emergency Management", "فيديو", "i", 60, trackLinks.safety.stageTwo.psmSandoz),
        r("Exxon Valdez 1989", "فيديو", "i", 60, trackLinks.safety.stageTwo.psmExxonValdez),
      ]),
    ],
  };
