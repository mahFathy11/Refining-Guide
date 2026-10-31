import { Link } from "react-router-dom";
import { intro } from "../data/intro.js";
import { STATS } from "../data/stats.js";
import UserTrackBanner from "../components/UserTrackBanner.jsx";
import useSEO from "../hooks/useSEO.js";
import "../styles/home.css";

export default function Home() {
  useSEO({
    title: "الرئيسية",
    description: intro.definition,
    ogImage: "/refinery-engineer.jpg",
  });

  const doesIcons = ["📐", "🎛️", "⚡", "🛡️", "🔧", "🧪"];

  return (
    <>
      <UserTrackBanner />
      <div className="home-page-wrapper">
        <section className="home-hero">
          <div className="home-hero-text">
            <div className="home-badge-pill">
              <span className="home-badge-dot"></span>
              <span>دليل وخارطة طريق مهندسي العمليات والتكرير</span>
            </div>
            <h1>{intro.title}</h1>
            <p className="lead">{intro.definition}</p>

            <div className="home-hero-stats">
              <div className="home-stat-chip">
                <span>المسارات التخصصية:</span>
                <strong>{STATS.tracksCount} مساراً</strong>
              </div>
              <div className="home-stat-chip">
                <span>شركات التوظيف:</span>
                <strong>{STATS.companiesCount}+ شركة</strong>
              </div>
              <div className="home-stat-chip">
                <span>مقررات الكلية:</span>
                <strong>{STATS.curriculumCount}+ مقرر</strong>
              </div>
            </div>
          </div>

          <div className="home-hero-image-card">
            <img
              src="/refinery-engineer.jpg"
              alt="مهندس عمليات وتكرير أمام وحدات مصفاة البترول"
              className="home-hero-img"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              width="600"
              height="400"
            />
          </div>
        </section>

        <section className="home-does-section">
          <h2 className="home-section-title">
            <span>⚙️</span> {intro.doesTitle}
          </h2>
          <div className="home-does-grid">
            {intro.does.map((d, idx) => (
              <div className="home-does-item" key={d}>
                <span className="home-does-icon">{doesIcons[idx % doesIcons.length]}</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* شبكة كروت الموقع الرئيسية بالترتيب المطلوب */}
        <section className="home-cards-section">
          <div className="featured-cards-grid">
            {/* 1. التراكات */}
            <Link to="/tracks" className="card big card-featured-tracks">
              <div className="featured-badge-row">
                <span className="tag ok">🧭 المسارات المهنية</span>
                <span className="tag">{STATS.tracksCount} مسارات</span>
              </div>
              <strong>التراكات والشغل</strong>
              <p>
                اختار مسارك، وشوف المراحل والكورسات والكتب ومصادر المذاكرة العملية بالترتيب.
              </p>
              <div className="featured-card-footer">
                <span className="featured-action">استعراض المسارات المهنية ←</span>
              </div>
            </Link>

            {/* 2. الخلاصة */}
            <Link to="/tips" className="card big card-featured-tips">
              <div className="featured-badge-row">
                <span className="tag warn">⚡ الزتونة</span>
              </div>
              <strong>الخلاصة والنصائح الهندسية</strong>
              <p>
                ملف الزتونة، مراجعة التكرير، نماذج التقديم، وأسئلة المقابلات الفنية الأكثر تكراراً.
              </p>
              <div className="featured-card-footer">
                <span className="featured-action">دخول صفحة الخلاصة ←</span>
              </div>
            </Link>

            {/* 3. الشركات */}
            <Link to="/companies" className="card big card-featured-companies">
              <div className="featured-badge-row">
                <span className="tag ok">🏢 دليل الشركات والمصانع</span>
                <span className="tag">{STATS.companiesCount}+ شركة</span>
              </div>
              <strong>الشركات وطريقة التقديم</strong>
              <p>
                الشركات والمصانع المتاحة، خطوات التقديم، قوالب الإيميل، وإيميلات مسؤولي التوظيف.
              </p>
              <div className="featured-card-footer">
                <span className="featured-action">دليل الشركات والتقديم ←</span>
              </div>
            </Link>

            {/* 4. المنح */}
            <Link to="/scholarships" className="card big card-featured-scholarships">
              <div className="featured-badge-row">
                <span className="tag ok">🎓 الدراسات العليا</span>
              </div>
              <strong>دليل المنح والماجستير</strong>
              <p>
                منحة جامعة الملك فهد للبترول والمعادن (KFUPM): الشروط والمزايا وخطوات القبول.
              </p>
              <div className="featured-card-footer">
                <span className="featured-action">تفاصيل المنحة والتقديم ←</span>
              </div>
            </Link>

            {/* 5. مواد */}
            <Link to="/curriculum" className="card big card-featured-curriculum">
              <div className="featured-badge-row">
                <span className="tag ok">📚 لائحة السويس</span>
                <span className="tag">{STATS.curriculumCount}+ مقرر</span>
              </div>
              <strong>مواد الكلية</strong>
              <p>
                مقررات هندسة التكرير والبتروكيماويات من الفرقة الأولى للرابعة وربطها بالمسارات المهنية.
              </p>
              <div className="featured-card-footer">
                <span className="featured-action">استعراض مواد الكلية ←</span>
              </div>
            </Link>

            {/* 6. قنوات اليوتيوب */}
            <Link to="/channels" className="card big card-featured-channels">
              <div className="featured-badge-row">
                <span className="tag yt">🔴 يوتيوب</span>
                <span className="tag">{STATS.channelsCount} قناة</span>
              </div>
              <strong>قنوات يوتيوب المعتمدة</strong>
              <p>
                أبرز قنوات المهندسين والمحاضرين المعتمدين في شرح محتوى المسارات.
              </p>
              <div className="featured-card-footer">
                <span className="featured-action">استعراض القنوات ←</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

