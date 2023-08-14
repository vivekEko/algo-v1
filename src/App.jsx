// routing
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// pages
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Sidebar from "./components/global/Sidebar";
import GoogleDashboardPage from "./pages/GoogleDashboardPage";

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
          <Route path="/" element={<Navigate to="/login" replace={true} />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/google-dashboard" element={<GoogleDashboardPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
