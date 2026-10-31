import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tracks } from "../data/tracks.js";
import { companies } from "../data/companies.js";
import { scholarships } from "../data/scholarships.js";
import { channels } from "../data/channels.js";
import { trackLinks } from "../data/links.js";
import { collegeCurriculum } from "../data/collegeCourses.js";
import "../styles/search.css";

// دالة لتنظيف وتوحيد الحروف العربية والإنجليزية للبحث الذكي
function normalize(str = "") {
  return String(str)
    .toLowerCase()
    .replace(/[أإآءئ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[\u064B-\u065F]/g, "") // إزالة التشكيل
    .replace(/[-_/:,.;()&"'+]/g, " ") // تحويل علامات الترقيم لمسافات
    .replace(/\s+/g, " ")
    .trim();
}

// دالة لفحص مطابقة الكلمة مع دعم إزالة ال التعريف (ال)
function tokenMatches(targetText, token) {
  if (!token) return true;
  if (targetText.includes(token)) return true;
  // في حال بدأت الكلمة بـ "ال" وطولها أكبر من 3 حروف
  if (token.startsWith("ال") && token.length > 3) {
    const stripped = token.slice(2);
    if (targetText.includes(stripped)) return true;
  }
  return false;
}

// فحص مطابقة كل الكلمات المفتاحية
function matchTokens(searchableText, tokens) {
  if (!tokens.length) return false;
  return tokens.every((token) => tokenMatches(searchableText, token));
}

// دالة مساعدة لتحويل أي قيمة (مصفوفة، نص، كائن) لنص مفرد بأمان تام ودون رمي أخطاء join
function safeJoin(val, delimiter = " ") {
  if (!val) return "";
  if (Array.isArray(val)) {
    return val
      .map((item) => {
        if (!item) return "";
        if (typeof item === "object") return safeJoin(Object.values(item), delimiter);
        return String(item);
      })
      .filter(Boolean)
      .join(delimiter);
  }
  if (typeof val === "object") {
    return safeJoin(Object.values(val), delimiter);
  }
  return String(val);
}

// مراجع وزتونة هندسية سريعة
const ENGINEERING_GUIDES = [
  {
    id: "zatona-interview",
    title: "ملف الزتونة الشامل: Technical Interview Preparation for ChE",
    author: "تجميع أسئلة ومفاهيم مقابلات العمل الفنية (ديناميكا، موائع، تقطير، مضخات)",
    url: trackLinks.career?.stageOne?.interviewPrepBook || "",
    type: "ملف زتونة PDF",
  },
  {
    id: "dawood-questions",
    title: "مرجع الأسئلة الفنية: Technical Questions [Oil & Gas - Chemical]",
    author: "م. مسعد مسعد داود (Process Engineer at GUPCO) - 9 فصول شاملة",
    url: trackLinks.career?.stageOne?.technicalQuestionsDawood || "",
    type: "مرجع فني PDF",
  },
  {
    id: "zatona-cheme",
    title: "ملف Zatona of Chemical Engineering (زتونة الهندسة الكيميائية)",
    author: "ملخص مركز للأبواب الهندسية وتكرير البترول وبنك أسئلة إنترفيو لكل قسم",
    url: trackLinks.career?.stageOne?.zatonaCheme || "",
    type: "ملف زتونة PDF",
  },
  {
    id: "job-prep-ibrahim",
    title: "Job Preparation (م. إبراهيم فريد السيد - Enppi)",
    author: "م. إبراهيم فريد السيد (Enppi) - أسئلة ومعدات التشغيل والـ Pre-commissioning",
    url: trackLinks.career?.stageOne?.jobPreparationIbrahim || "",
    type: "مرجع فني PDF",
  },
  {
    id: "refining-yehia",
    title: "مراجعة أسئلة تكرير البترول والهندسة الكيميائية (م. أحمد يحيى)",
    author: "م. أحمد يحيى (AIM Chemical Engineer) - أسئلة مقابلات مصافي التكرير والتشغيل",
    url: trackLinks.career?.stageOne?.refiningQuestionsYehia || "",
    type: "ملف مراجعة PDF",
  },
  {
    id: "fayed-interview",
    title: "Top Interview Questions for ChE Graduates (م. أحمد الفايد)",
    author: "م. أحمد الفايد (هندسة إسكندرية) - بنك أسئلة مقابلات العمل لحديثي التخرج",
    url: trackLinks.career?.stageOne?.topInterviewGraduatesFayed || "",
    type: "أسئلة إنترفيو PDF",
  },
  {
    id: "process-50-chem123",
    title: "Top 50 Process Engineer Interview Questions (Chemical123)",
    author: "Chemical123 - 50 سؤالاً نموذجياً بالإجابات لمهندسي العمليات والتصميم",
    url: trackLinks.career?.stageOne?.top50ProcessQuestions || "",
    type: "بنك أسئلة PDF",
  },
  {
    id: "sarah-interview",
    title: "Interview Questions and Answers (Eng. Sarah Zidan)",
    author: "م. سارة زيدان - أسئلة الإنترفيو الشائعة وإجاباتها النموذجية",
    url: trackLinks.career?.stageOne?.interviewQuestionsSarah || "",
    type: "سلسلة يوتيوب",
  },
  {
    id: "fe-exam-prep",
    title: "FE Chemical Exam Preparation (التحضير لشهادة FE العالمية)",
    author: "م. سارة زيدان - تأهيل متكامل لاجتياز اختبار أساسيات الهندسة",
    url: trackLinks.career?.stageTwo?.feExamSarah || "",
    type: "سلسلة يوتيوب",
  },
];

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // فهرسة عميقة وشاملة لجميع الكورسات والمصادر والنقاط الفرعية
  const allResources = useMemo(() => {
    const list = [];
    if (!Array.isArray(tracks)) return list;

    tracks.forEach((t) => {
      if (!t || !Array.isArray(t.stages)) return;
      t.stages.forEach((s, stageIdx) => {
        if (!s || !Array.isArray(s.resources)) return;
        s.resources.forEach((r) => {
          if (!r) return;

          // جمع نصوص كافة الفصول والأقسام والنقاط الفرعية
          const sectionsText = Array.isArray(r.details?.sections)
            ? r.details.sections
                .map((sec) => `${sec?.title || ""} ${safeJoin(sec?.points)}`)
                .join(" ")
            : safeJoin(r.details?.sections);

          const tipsText = safeJoin(r.details?.tips);

          const comparisonText = r.details?.comparison
            ? `${r.details.comparison.title || ""} ${
                Array.isArray(r.details.comparison.items)
                  ? r.details.comparison.items
                      .map(
                        (it) =>
                          `${it?.name || ""} ${it?.tagline || ""} ${it?.desc || ""} ${safeJoin(it?.points)}`
                      )
                      .join(" ")
                  : safeJoin(r.details.comparison.items)
              }`
            : "";

          const linksText = [
            ...(Array.isArray(r.links) ? r.links : []).map((l) => `${l?.label || ""} ${l?.url || ""}`),
            ...(Array.isArray(r.details?.links) ? r.details.links : []).map((l) => `${l?.label || ""} ${l?.url || ""}`),
          ].join(" ");

          const toolsText = safeJoin(r.details?.tools);

          const fullNote = [
            r.details?.bookNote || "",
            r.details?.summary || "",
            r.details?.explanation || "",
          ].join(" ");

          // استخراج أسماء المحاضرين أو القنوات من العناوين أو الروابط
          const presenters = (Array.isArray(r.links) ? r.links : [])
            .map((l) => l?.label || "")
            .filter((lbl) => /د\.|م\.|دكتور|مهندس|eng|dr/i.test(lbl))
            .join(" ");

          // أول رابط فعلي للوصول المباشر (يوتيوب أو درايف)
          const primaryUrl = (Array.isArray(r.links) ? r.links : []).find((l) => l?.url && l.url !== "#")?.url || "";

          // النص الشامل القابل للبحث
          const searchable = normalize(
            `${r.title || ""} ${r.type || ""} ${t.title || ""} ${s.name || ""} ${fullNote} ${sectionsText} ${tipsText} ${comparisonText} ${toolsText} ${linksText}`
          );

          list.push({
            title: r.title,
            type: r.type,
            level: r.level,
            trackId: t.id,
            trackTitle: t.title,
            stageName: s.name,
            stageIndex: stageIdx + 1,
            primaryUrl,
            presenters,
            searchableText: searchable,
            rawResource: r,
          });
        });
      });
    });
    return list;
  }, []);

  // فهرسة قنوات اليوتيوب والمحاضرين
  const allChannels = useMemo(() => {
    if (!Array.isArray(channels)) return [];
    return channels.map((ch) => {
      const topicsText = safeJoin(ch.topics);
      const searchable = normalize(
        `${ch.name || ""} ${ch.arabicName || ""} ${ch.badge || ""} ${ch.featuredBadge || ""} ${topicsText}`
      );
      return {
        ...ch,
        searchableText: searchable,
      };
    });
  }, []);

  // فهرسة مراجع وزتونة المقابلات
  const allGuides = useMemo(() => {
    return ENGINEERING_GUIDES.map((g) => ({
      ...g,
      searchableText: normalize(`${g.title} ${g.author} ${g.type}`),
    }));
  }, []);

  // نتائج البحث الذكية والترتيب حسب الصلة
  const results = useMemo(() => {
    const qNorm = normalize(query);
    if (!qNorm) {
      return {
        tracks: [],
        resources: [],
        companies: [],
        channels: [],
        guides: [],
        scholarships: [],
        total: 0,
      };
    }

    const tokens = qNorm.split(/\s+/).filter(Boolean);

    // 1. المسارات (Tracks)
    const matchedTracks = tracks.filter((t) => {
      const text = normalize(`${t.title} ${t.desc} ${t.id}`);
      return matchTokens(text, tokens);
    });

    // 2. الكورسات والمصادر (Resources) مع نظام نقاط الأهمية والصلة
    const scoredResources = [];
    allResources.forEach((r) => {
      if (matchTokens(r.searchableText, tokens)) {
        let score = 0;
        const titleNorm = normalize(r.title);

        if (titleNorm === qNorm) score += 1000;
        else if (titleNorm.startsWith(qNorm)) score += 600;
        else if (titleNorm.includes(qNorm)) score += 400;

        // مطابقة جميع التوكنز في العنوان
        if (tokens.every((t) => tokenMatches(titleNorm, t))) score += 250;
        tokens.forEach((t) => {
          if (tokenMatches(titleNorm, t)) score += 80;
        });

        // مطابقة في اسم المحاضر
        if (r.presenters && tokenMatches(normalize(r.presenters), qNorm)) score += 180;

        // مطابقة في اسم المسار أو المرحلة
        if (tokenMatches(normalize(r.trackTitle), qNorm)) score += 60;
        if (tokenMatches(normalize(r.stageName), qNorm)) score += 40;

        // مطابقة في الشرح والتفاصيل
        if (r.searchableText.includes(qNorm)) score += 30;

        scoredResources.push({ ...r, score });
      }
    });

    scoredResources.sort((a, b) => b.score - a.score);
    // إرجاع ما يصل إلى 25 نتيجة كورس مع الـ scroll
    const matchedResources = scoredResources.slice(0, 25);

    // 3. الشركات والمصانع (Companies)
    const matchedCompanies = companies
      .filter((c) => {
        const text = normalize(
          `${c.name} ${c.nameEn || ""} ${c.sector || ""} ${c.activity || ""} ${c.address || ""} ${c.governorate || ""}`
        );
        return matchTokens(text, tokens);
      })
      .slice(0, 12);

    // 4. القنوات والمحاضرين (Channels)
    const matchedChannels = allChannels
      .filter((ch) => matchTokens(ch.searchableText, tokens))
      .slice(0, 8);

    // 5. المراجع والزتونة الهندسية (Guides)
    const matchedGuides = allGuides
      .filter((g) => matchTokens(g.searchableText, tokens))
      .slice(0, 6);

    // 6. المنح الدراسية (Scholarships)
    const matchedScholarships = scholarships
      .filter((s) => {
        const text = normalize(
          `${s.title} ${s.program} ${s.university} ${s.country} ${s.overview} منحة منح scholarships kfupm سعداوي ماجستير`
        );
        return matchTokens(text, tokens);
      })
      .slice(0, 5);

    // 7. مواد الكلية (College Courses)
    const matchedCourses = collegeCurriculum
      .filter((c) => {
        const text = normalize(
          `${c.name} ${c.nameEn} ${c.desc} ${c.tracks.map((t) => t.name).join(" ")} مواد الكلية لائحة السويس`
        );
        return matchTokens(text, tokens);
      })
      .slice(0, 6);

    const total =
      matchedTracks.length +
      matchedResources.length +
      matchedCompanies.length +
      matchedChannels.length +
      matchedGuides.length +
      matchedScholarships.length +
      matchedCourses.length;

    return {
      tracks: matchedTracks,
      resources: matchedResources,
      companies: matchedCompanies,
      channels: matchedChannels,
      guides: matchedGuides,
      scholarships: matchedScholarships,
      courses: matchedCourses,
      total,
    };
  }, [query, allResources, allChannels, allGuides]);

  // إغلاق القائمة عند النقر بالخارج أو الضغط على Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectTrack = (trackId) => {
    setIsOpen(false);
    setQuery("");
    navigate(`/tracks/${trackId}`);
  };

  // الانتقال المباشر للكورس وفتح تفاصيله والنزول لمكانه بالمسار
  const handleSelectResource = (resource) => {
    setIsOpen(false);
    setQuery("");
    navigate(`/tracks/${resource.trackId}?course=${encodeURIComponent(resource.title)}&open=1`);
  };

  const handleSelectCompany = (company) => {
    setIsOpen(false);
    setQuery("");
    navigate(`/companies?q=${encodeURIComponent(company.name.split(" ")[0])}`);
  };

  const handleSelectChannel = (channel) => {
    setIsOpen(false);
    setQuery("");
    navigate(`/channels?q=${encodeURIComponent(channel.arabicName || channel.name)}`);
  };

  const handleSelectGuide = () => {
    setIsOpen(false);
    setQuery("");
    navigate("/tips");
  };

  const handleSelectScholarship = () => {
    setIsOpen(false);
    setQuery("");
    navigate("/scholarships");
  };

  const handleSelectCourse = () => {
    setIsOpen(false);
    setQuery("");
    navigate("/curriculum");
  };

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="global-search-box" ref={containerRef}>
      <div className="search-input-wrapper">
        <span className="search-icon" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          type="search"
          className="search-input"
          placeholder="ابحث عن كورس، محاضر، شركة، أو موضوع..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (query.trim()) setIsOpen(true);
          }}
          aria-label="البحث في الكورسات والشركات والمسارات"
        />
        {query && (
          <button className="clear-btn" onClick={handleClear} aria-label="مسح البحث" title="مسح">
            ×
          </button>
        )}
      </div>

      {isOpen && query.trim().length > 0 && (
        <div className="search-dropdown">
          {results.total === 0 ? (
            <div className="no-results">
              <span className="no-res-icon">🔍</span>
              <span>
                لا توجد نتائج مطابقة لـ <strong>"{query}"</strong>
              </span>
              <small>جرّب البحث بكلمات أخرى مثل اسم معدة، مصفاة، أو برنامج محاكاة.</small>
            </div>
          ) : (
            <div className="results-scroll">
              {/* قسم الكورسات والمصادر */}
              {results.resources.length > 0 && (
                <div className="result-group">
                  <div className="group-header">
                    <span>🎓 الكورسات والمصادر ({results.resources.length})</span>
                  </div>
                  {results.resources.map((r, i) => (
                    <div
                      key={r.trackId + r.title + i}
                      className="result-item"
                      onClick={() => handleSelectResource(r)}
                      title="انتقل للكورس وافتح التفاصيل والدروس مباشرة في المسار"
                    >
                      <div className="result-main">
                        <span className="result-title">{r.title}</span>
                        <div className="result-sub">
                          <span className="track-badge">{r.trackTitle}</span>
                          <span className="stage-badge">{r.stageName}</span>
                          <span className="type-tag">{r.type}</span>
                        </div>
                      </div>

                      <div className="result-actions">
                        {r.primaryUrl && (
                          <a
                            href={r.primaryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`result-direct-btn ${
                              r.primaryUrl.includes("drive.google") ? "drive-btn" : ""
                            }`}
                            onClick={(e) => e.stopPropagation()}
                            title="فتح الرابط الأصلي مباشرة في تبويب جديد"
                          >
                            {r.primaryUrl.includes("drive.google") ? "📥 فتح الملف ↗" : "▶ فتح الرابط ↗"}
                          </a>
                        )}
                        <span className="result-goto-btn">عرض الكورس ←</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* قسم القنوات والمحاضرين */}
              {results.channels.length > 0 && (
                <div className="result-group">
                  <div className="group-header">
                    <span>📺 القنوات والمحاضرين ({results.channels.length})</span>
                  </div>
                  {results.channels.map((ch) => (
                    <div
                      key={ch.id}
                      className="result-item"
                      onClick={() => handleSelectChannel(ch)}
                      title="عرض سلاسل ودورات القناة في دليل القنوات"
                    >
                      <div className="result-main">
                        <span className="result-title">
                          {ch.avatarIcon || "🎥"} {ch.arabicName} ({ch.name})
                        </span>
                        <div className="result-sub">
                          {ch.badge && <span className="channel-badge">{ch.badge}</span>}
                          {ch.coursesCount && (
                            <span className="stage-badge">{ch.coursesCount}+ سلسلة</span>
                          )}
                        </div>
                      </div>
                      <div className="result-actions">
                        {ch.channelUrl && (
                          <a
                            href={ch.channelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="result-direct-btn"
                            onClick={(e) => e.stopPropagation()}
                            title="زيارة القناة على يوتيوب مباشرة"
                          >
                            ▶ القناة ↗
                          </a>
                        )}
                        <span className="channel-tag">عرض الدليل ←</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* قسم المراجع والزتونة الهندسية */}
              {results.guides.length > 0 && (
                <div className="result-group">
                  <div className="group-header">
                    <span>📑 مراجع وزتونة هندسية ({results.guides.length})</span>
                  </div>
                  {results.guides.map((g) => (
                    <div
                      key={g.id}
                      className="result-item"
                      onClick={handleSelectGuide}
                      title="فتح صفحة الخلاصة والنصائح الهندسية"
                    >
                      <div className="result-main">
                        <span className="result-title">⚡ {g.title}</span>
                        <div className="result-sub">
                          <span className="guide-badge">{g.type}</span>
                          <span className="loc-badge">{g.author}</span>
                        </div>
                      </div>
                      <div className="result-actions">
                        {g.url && (
                          <a
                            href={g.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="result-direct-btn drive-btn"
                            onClick={(e) => e.stopPropagation()}
                            title="تحميل/مشاهدة المرجع مباشرة"
                          >
                            📥 فتح الملف ↗
                          </a>
                        )}
                        <span className="guide-tag">صفحة الخلاصة ←</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* قسم الشركات والمصانع */}
              {results.companies.length > 0 && (
                <div className="result-group">
                  <div className="group-header">
                    <span>🏢 الشركات والمصانع ({results.companies.length})</span>
                  </div>
                  {results.companies.map((c) => (
                    <div
                      key={c.id}
                      className="result-item"
                      onClick={() => handleSelectCompany(c)}
                    >
                      <div className="result-main">
                        <span className="result-title">{c.name}</span>
                        <div className="result-sub">
                          <span className="sector-badge">{c.sector}</span>
                          {c.address && <span className="loc-badge">{c.address.split("/")[0]}</span>}
                        </div>
                      </div>
                      <span className="company-tag">عرض الشركة ←</span>
                    </div>
                  ))}
                </div>
              )}

              {/* قسم المنح الدراسية */}
              {results.scholarships.length > 0 && (
                <div className="result-group">
                  <div className="group-header">
                    <span>🎓 المنح الدراسية ({results.scholarships.length})</span>
                  </div>
                  {results.scholarships.map((s) => (
                    <div
                      key={s.id}
                      className="result-item"
                      onClick={handleSelectScholarship}
                    >
                      <div className="result-main">
                        <span className="result-title">{s.title}</span>
                        <div className="result-sub">
                          <span className="track-badge">منحة كاملة</span>
                          <span className="loc-badge">{s.university}</span>
                        </div>
                      </div>
                      <span className="track-tag">عرض تفاصيل المنحة ←</span>
                    </div>
                  ))}
                </div>
              )}

              {/* قسم مواد الكلية */}
              {results.courses && results.courses.length > 0 && (
                <div className="result-group">
                  <div className="group-header">
                    <span>📚 مواد الكلية ولائحة السويس ({results.courses.length})</span>
                  </div>
                  {results.courses.map((course) => (
                    <div
                      key={course.id}
                      className="result-item"
                      onClick={handleSelectCourse}
                      title="فتح صفحة مواد الكلية"
                    >
                      <div className="result-main">
                        <span className="result-title">📚 {course.name}</span>
                        <div className="result-sub">
                          <span className="track-badge">{course.nameEn}</span>
                          <span className="loc-badge">{course.year} – {course.term}</span>
                        </div>
                      </div>
                      <span className="track-tag">عرض تفاصيل المقرر ←</span>
                    </div>
                  ))}
                </div>
              )}

              {/* قسم المسارات */}
              {results.tracks.length > 0 && (
                <div className="result-group">
                  <div className="group-header">
                    <span>🧭 المسارات ({results.tracks.length})</span>
                  </div>
                  {results.tracks.map((t) => (
                    <div
                      key={t.id}
                      className="result-item"
                      onClick={() => handleSelectTrack(t.id)}
                    >
                      <div className="result-main">
                        <span className="result-title">{t.title}</span>
                        <span className="result-desc">{t.desc}</span>
                      </div>
                      <span className="track-tag">دخول المسار ←</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
