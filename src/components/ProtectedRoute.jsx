import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isGuest } = useAuth();
  const location = useLocation();

  // فحص احتياطي متزامن من localStorage لتفادي أي وميض أو تأخير زمني في مزامنة الحالة
  let hasStoredAuth = false;
  try {
    hasStoredAuth =
      !!localStorage.getItem("chem_current_user_id") ||
      localStorage.getItem("chem_guest_mode") === "true";
  } catch {}

  if (!isAuthenticated && !isGuest && !hasStoredAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

