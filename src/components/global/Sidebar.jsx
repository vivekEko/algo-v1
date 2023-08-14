import React from "react";
import { Link, useLocation } from "react-router-dom";
// assets
import google_icon from "../../assets/google_icon.svg";
import dashboard_icon from "../../assets/dashboard_icon.svg";
import logout_icon from "../../assets/logout_icon.svg";
import algoLogo from "../../assets/algo_logo.svg";

const Sidebar = () => {
  // local variables
  const location = useLocation();
  const sidebarLinks = [
    { id: 1, name: "Dashboard", path: "/dashboard", logo: dashboard_icon },
    {
      id: 2,
      name: "Google Dashboard",
      path: "/google-dashboard",
      logo: google_icon,
    },
  ];

  if (location?.pathname !== "/login")
    return (
      <div className="bg-gradient-to-tr from-[#3633b4] to-[#3D3C73] fixed h-screen left-0 p-2 flex justify-between items-center flex-col">
        <div>
          <div className="mt-4">
            <img src={algoLogo} alt="algospace" className="w-12" />
          </div>
          <div className="flex flex-col gap-8 items-center mt-16">
            {sidebarLinks?.map((sidebar_data) => {
              return (
                <Link to={sidebar_data?.path} key={sidebar_data?.id}>
                  <img
                    src={sidebar_data?.logo}
                    alt={sidebar_data?.name}
                    title={sidebar_data?.name}
                    className="w-10 aspect-square "
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="pb-4">
          <Link to="/login">
            <img
              src={logout_icon}
              alt={"Logout"}
              title="Logout"
              className="w-10 aspect-square "
            />
          </Link>
        </div>
      </div>
    );
};

export default Sidebar;
