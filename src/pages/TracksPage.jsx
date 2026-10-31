import { tracks } from "../data/tracks.js";
import { trackLinks } from "../data/links.js";
import TrackCard from "../components/TrackCard.jsx";
import useProgress, { trackCount } from "../hooks/useProgress.js";
import useSEO from "../hooks/useSEO.js";

export default function TracksPage() {
  useSEO({
    title: "المسارات المهنية والتخصصية (16 مساراً)",
    description: "خارطة طريق تفصيلية وتطبيقية لكل تخصص في الهندسة الكيميائية والبترولية بمصادر مجانية وشروحات عملية من مهندسي المصافي والمصانع.",
  });

  const { done } = useProgress();

  return (
    <div className="tracks-page-wrapper">
      <div className="tracks-header page-hero-banner">
        <div className="page-hero-badge">
          <span className="page-badge-dot"></span>
          <span>🧭 مسارات العمل والتخصص المهني</span>
        </div>
        <h1>المسارات المهنية والتخصصية</h1>
        <p className="tracks-hero-lead">
          خارطة طريق تفصيلية وتطبيقية لكل تخصص في الهندسة الكيميائية والبترولية، بمصادر دراسية مجانية وشروحات عملية من مهندسي المصافي والمصانع.
        </p>
      </div>

      {/* بطاقة ومصادر التوجيه العام لشرح التراكات واختيار المسار */}
      <section className="tracks-intro-guidance-card" aria-label="مصادر توجيهية لفهم التراكات">
        <div className="guidance-header">
          <div className="guidance-badge">
            <span className="guidance-dot"></span>
            <span>🧭 توجيه وإرشاد مهني</span>
          </div>
          <h2>إرشادات ومحاضرات توجيهية لفهم مسارات سوق العمل</h2>
        </div>

        <div className="guidance-videos-grid">
          <a
            href={trackLinks.career.stageOne.fieldsYehia}
            target="_blank"
            rel="noopener noreferrer"
            className="guidance-video-card"
          >
            <div className="video-icon-badge" aria-hidden="true">▶️</div>
            <div className="video-info">
              <h4>مجالات وتراكات عمل المهندس الكيميائي</h4>
              <span className="video-author">🎙️ م. أحمد يحيى</span>
              <p>شرح مجالات العمل والمسارات المتاحة وكيفية اختيار مجالك المهني.</p>
            </div>
            <div className="video-action-btn">
              <span>مشاهدة الفيديو (YouTube)</span>
              <span className="btn-arrow">↗</span>
            </div>
          </a>

          <a
            href={trackLinks.career.stageOne.jobSearchAyman}
            target="_blank"
            rel="noopener noreferrer"
            className="guidance-video-card"
          >
            <div className="video-icon-badge" aria-hidden="true">▶️</div>
            <div className="video-info">
              <h4>المسارات الوظيفية لحديثي التخرج وسوق العمل</h4>
              <span className="video-author">🎙️ م. محمد أيمن</span>
              <p>دليل شامل للمسارات الوظيفية لمهندس العمليات وواقع سوق العمل الفعلي.</p>
            </div>
            <div className="video-action-btn">
              <span>مشاهدة المحاضرة (YouTube)</span>
              <span className="btn-arrow">↗</span>
            </div>
          </a>

          <a
            href={trackLinks.career.stageOne.whatToLearnBalal}
            target="_blank"
            rel="noopener noreferrer"
            className="guidance-video-card is-linkedin"
          >
            <div className="video-icon-badge" aria-hidden="true">💼</div>
            <div className="video-info">
              <h4>ما المطلوب منك كمهندس تكرير وكيمياء؟</h4>
              <span className="video-author">✍️ م. عبد الرحمن بلال</span>
              <p>ترتيب حاسم لأولويات التعلم: الأساسيات، المعدات، الـ PFD، المحاكاة (HYSYS)، والتحكم بالعمليات.</p>
            </div>
            <div className="video-action-btn">
              <span>قراءة المنشور (LinkedIn)</span>
              <span className="btn-arrow">↗</span>
            </div>
          </a>
        </div>
      </section>

      {/* شبكة المسارات */}
      <div className="tracks-grid">
        {tracks.map((t) => (
          <TrackCard key={t.id} track={t} progress={trackCount(t, done)} />
        ))}
      </div>
    </div>
  );
}

