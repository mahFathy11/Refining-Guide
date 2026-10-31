import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Code splitting with React.lazy to eliminate monolithic initial bundle
const Home = lazy(() => import("./pages/Home.jsx"));
const TracksPage = lazy(() => import("./pages/TracksPage.jsx"));
const TrackDetail = lazy(() => import("./pages/TrackDetail.jsx"));
const CompaniesPage = lazy(() => import("./pages/CompaniesPage.jsx"));
const TipsPage = lazy(() => import("./pages/TipsPage.jsx"));
const ScholarshipsPage = lazy(() => import("./pages/ScholarshipsPage.jsx"));
const ChannelsPage = lazy(() => import("./pages/ChannelsPage.jsx"));
const CollegeCoursesPage = lazy(() => import("./pages/CollegeCoursesPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const InterviewStagePage = lazy(() => import("./pages/InterviewStagePage.jsx"));
const JobTemplatePage = lazy(() => import("./pages/JobTemplatePage.jsx"));

function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        gap: "14px",
        color: "var(--muted, #94a3b8)",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          border: "3px solid rgba(59, 130, 246, 0.2)",
          borderTopColor: "#3b82f6",
          borderRadius: "50%",
          animation: "pageSpin 0.8s linear infinite",
        }}
      />
      <span style={{ fontSize: "0.88rem" }}>جاري تحميل الصفحة...</span>
      <style>{`
        @keyframes pageSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* صفحة إعداد الملف الشخصي للمهندس */}
        <Route path="/login" element={<LoginPage />} />

        {/* المسارات المحمية ضمن المخطط الرئيسي */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="tracks" element={<TracksPage />} />
          <Route path="tracks/:id" element={<TrackDetail />} />
          <Route path="curriculum" element={<CollegeCoursesPage />} />
          <Route path="college-courses" element={<CollegeCoursesPage />} />
          <Route path="companies" element={<CompaniesPage />} />
          <Route path="tips" element={<TipsPage />} />
          <Route path="tips/interview/:stageId" element={<InterviewStagePage />} />
          <Route path="interview/:stageId" element={<InterviewStagePage />} />
          <Route path="tips/templates/:templateId" element={<JobTemplatePage />} />
          <Route path="templates/:templateId" element={<JobTemplatePage />} />
          <Route path="scholarships" element={<ScholarshipsPage />} />
          <Route path="channels" element={<ChannelsPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
