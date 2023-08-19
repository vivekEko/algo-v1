// routing
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// pages
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Sidebar from "./components/global/Sidebar";
import GoogleDashboardPage from "./pages/GoogleDashboardPage";
import ProtectedRoutes from "./utils/routing/ProtectedRoutes";
import ProtectedFromUser from "./utils/routing/ProtectedFromUser";

function App() {
  // local variables
  const location = useLocation();
  return (
    <div>
      <Sidebar />

      <main
        className={` ${
          location?.pathname !== "/login" ? "pl-16" : ""
        }  text-gray-800 `}
      >
        <Routes>
          <Route element={<ProtectedFromUser />}>
            <Route path="/" element={<Navigate to="/login" replace={true} />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/google-dashboard" element={<GoogleDashboardPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
