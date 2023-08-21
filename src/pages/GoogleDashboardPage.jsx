import React from "react";
import { GoogleDasboardResponse } from "../mock_data/GoogleDashboardData";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import DashboardReviews from "../components/dashboard/DashboardReviews";
import Google_graphs from "../components/google_dashboard/Google_graphs";

const GoogleDashboardPage = () => {
  return (
    <div className="px-5 space-y-5">
      {/* pageName */}
      <h1 className="text-gray-400 p-2 ">{GoogleDasboardResponse?.pageName}</h1>
      <Google_graphs />
      <DashboardReviews
        reviews={
          GoogleDasboardResponse?.all_branch_data[0]?.specific_branch_data
            ?.reviews
        }
        heading="Reviews"
      />

      <DashboardReviews
        reviews={
          GoogleDasboardResponse?.all_branch_data[0]?.specific_branch_data
            ?.alerts
        }
        heading="Alerts"
      />
      <DashboardFooter />
    </div>
  );
};

export default GoogleDashboardPage;
