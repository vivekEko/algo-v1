import React from "react";
import { dashboard_data_1 } from "../mock_data/dashboardData";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardSuggestionContainer from "../components/dashboard/DashboardSuggestionContainer";
import DashboardSwotContainer from "../components/dashboard/DashboardSwotContainer";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import DashboardReviews from "../components/dashboard/DashboardReviews";

const DashboardPage = () => {
  return (
    <div className=" px-5">
      {/* pageName */}
      <h1 className="text-gray-400 p-2">{dashboard_data_1?.pageName}</h1>
      <DashboardHeader />
      <DashboardSuggestionContainer />
      <DashboardReviews
        reviews={
          dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.reviews
        }
        heading="Reviews"
      />

      <DashboardSwotContainer />
      <DashboardFooter />
    </div>
  );
};

export default DashboardPage;
