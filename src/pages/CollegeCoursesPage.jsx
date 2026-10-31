import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { collegeCurriculum, trackMapping } from "../data/collegeCourses.js";
import useSEO from "../hooks/useSEO.js";
import "../styles/curriculum.css";

export default function CollegeCoursesPage() {
  useSEO({
    title: "دليل مقررات الكلية وسوق العمل",
    description: "مقررات ومواد كلية هندسة البترول والتعدين وتكرير البترول والبتروكيماويات وربطها المباشر بالمسارات المهنية وسوق العمل الصناعي.",
  });

  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTrack, setSelectedTrack] = useState("all");

  const filteredCourses = useMemo(() => {
    return collegeCurriculum.filter((course) => {
      // فلتر الفرقة
      if (selectedYear !== "all") {
        if (course.yearNum !== Number(selectedYear)) return false;
      }

      // فلتر التراك
      if (selectedTrack !== "all") {
        const hasTrack = course.tracks.some((t) => t.id === selectedTrack);
        if (!hasTrack) return false;
      }

      // فلتر البحث
      if (search.trim()) {
        const query = search.trim().toLowerCase();
        const matchName = course.name.toLowerCase().includes(query);
        const matchNameEn = course.nameEn.toLowerCase().includes(query);
        const matchDesc = course.desc.toLowerCase().includes(query);
        const matchTrack = course.tracks.some((t) => t.name.toLowerCase().includes(query));
        if (!matchName && !matchNameEn && !matchDesc && !matchTrack) {
          return false;
        }
      }

      return true;
    });
  }, [search, selectedYear, selectedTrack]);

  // تجميع المواد حسب الترم
  const groupedByTerm = useMemo(() => {
    const groups = {};
    filteredCourses.forEach((c) => {
      if (!groups[c.termNum]) {
        groups[c.termNum] = {
          termName: c.term,
          yearName: c.year,
          courses: [],
        };
      }
      groups[c.termNum].courses.push(c);
    });
    return groups;
  }, [filteredCourses]);

  const sortedTermNums = Object.keys(groupedByTerm).map(Number).sort((a, b) => a - b);

  return (
    <div className="curriculum-page wrap">
      {/* البانر التعريفي الرئيسي */}
      <section className="curriculum-hero page-hero-banner">
        <div className="page-hero-badge">
          <span className="page-badge-dot"></span>
          <span>🎓 هندسة تكرير البترول والبتروكيماويات — جامعة السويس</span>
        </div>
        <h1>
          <span>📚 مواد الكلية وخريطة المسارات المهنية</span>
        </h1>
        <p className="lead">
          دليل مقررات قسم هندسة تكرير البترول والبتروكيماويات وربطها بالمسارات وسوق العمل.
        </p>

        <div className="curriculum-stats-bar">
          <div className="curriculum-stat-box">
            <span className="curriculum-stat-val">{collegeCurriculum.length}</span>
            <span className="curriculum-stat-lbl">مقرراً دراسياً</span>
          </div>
          <div className="curriculum-stat-box">
            <span className="curriculum-stat-val">4</span>
            <span className="curriculum-stat-lbl">فرق دراسية (السنوات الأربع)</span>
          </div>
          <div className="curriculum-stat-box">
            <span className="curriculum-stat-val">15</span>
            <span className="curriculum-stat-lbl">مساراً مهنياً بسوق العمل</span>
          </div>
        </div>
      </section>

      {/* عناصر التحكم والفلاتر */}
      <section className="curriculum-controls">
        <div className="curriculum-search-box">
          <input
            type="text"
            className="curriculum-search-input"
            placeholder="ابحث باسم المادة (عربي أو إنجليزي) أو التراك المهني المرتبط..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="curriculum-search-icon">🔍</span>
        </div>

        {/* فلاتر الفرق الدراسية */}
        <div className="curriculum-filter-tabs">
          <button
            className={`filter-pill ${selectedYear === "all" ? "active" : ""}`}
            onClick={() => setSelectedYear("all")}
          >
            جميع المقررات ({collegeCurriculum.length})
          </button>
          <button
            className={`filter-pill ${selectedYear === "1" ? "active" : ""}`}
            onClick={() => setSelectedYear("1")}
          >
            الفرقة الأولى
          </button>
          <button
            className={`filter-pill ${selectedYear === "2" ? "active" : ""}`}
            onClick={() => setSelectedYear("2")}
          >
            الفرقة الثانية
          </button>
          <button
            className={`filter-pill ${selectedYear === "3" ? "active" : ""}`}
            onClick={() => setSelectedYear("3")}
          >
            الفرقة الثالثة
          </button>
          <button
            className={`filter-pill ${selectedYear === "4" ? "active" : ""}`}
            onClick={() => setSelectedYear("4")}
          >
            الفرقة الرابعة
          </button>
        </div>

        {/* فلاتر فرعية: تصفية حسب المسار المهني */}
        <div className="curriculum-subfilters">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="subfilter-label">تصفية حسب المسار المهني:</span>
            <select
              className="subfilter-select"
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
            >
              <option value="all">كل المسارات والتراكات</option>
              {Object.values(trackMapping).map((tr) => (
                <option key={tr.id} value={tr.id}>
                  {tr.name}
                </option>
              ))}
            </select>
          </div>

          {(search || selectedTrack !== "all") && (
            <button
              className="filter-pill"
              style={{ padding: "4px 10px", fontSize: "0.8rem", background: "rgba(239, 68, 68, 0.2)", color: "#f87171" }}
              onClick={() => {
                setSearch("");
                setSelectedTrack("all");
              }}
            >
              إعادة ضبط ↺
            </button>
          )}
        </div>
      </section>

      {/* عرض المقررات مقسمة حسب الفصول الدراسية */}
      <section className="curriculum-terms-container">
        {sortedTermNums.length === 0 ? (
          <div className="card" style={{ textAlign: "center", padding: "40px" }}>
            <h3>لا توجد مواد مطابقة للبحث أو الفلاتر المحددة</h3>
            <p style={{ color: "#94a3b8", marginTop: "10px" }}>
              جرب تغيير خيارات البحث أو إعادة ضبط الفلاتر لاستعراض المقررات.
            </p>
          </div>
        ) : (
          sortedTermNums.map((tNum) => {
            const group = groupedByTerm[tNum];
            return (
              <div key={tNum} className="term-section">
                <div className="term-header">
                  <h3 className="term-title">
                    <span>🗓️ {group.yearName} – {group.termName}</span>
                  </h3>
                </div>

                <div className="courses-grid">
                  {group.courses.map((course) => (
                    <div key={course.id} className="course-card">
                      <div className="course-card-top">
                        <h4 className="course-name-ar">{course.name}</h4>
                      </div>

                      <div className="course-name-en">{course.nameEn}</div>

                      <div className="course-tracks-container">
                        <span className="course-tracks-label">
                          🚀 يخدم ويدخل في المسار المهني:
                        </span>
                        <div className="course-tracks-chips">
                          {course.tracks.map((t) => (
                            <Link
                              key={t.id}
                              to={`/tracks/${t.id}`}
                              className="course-track-chip"
                              title={`اضغط للانتقال لمحتويات وكورسات تراك ${t.name}`}
                            >
                              <span>🎯 {t.name}</span>
                              <span style={{ fontSize: "0.75rem" }}>←</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
}
