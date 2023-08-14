import React from "react";
import { dashboard_data_1 } from "../helpers/dashboardData";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardSuggestionContainer from "../components/dashboard/DashboardSuggestionContainer";

const DashboardPage = () => {
  return (
    <div className="pr-5 pb-10">
      {/* pageName */}
      <h1 className="text-gray-400 p-2 px-5">{dashboard_data_1?.pageName}</h1>
      <DashboardHeader />
      <DashboardSuggestionContainer />
    </div>
  );
};

export default DashboardPage;
