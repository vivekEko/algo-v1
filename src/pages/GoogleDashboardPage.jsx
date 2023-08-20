import React from "react";
import { GoogleDasboardResponse } from "../mock_data/GoogleDashboardData";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import DashboardReviews from "../components/dashboard/DashboardReviews";

const GoogleDashboardPage = () => {
  return (
    <div className="px-5 space-y-5">
      {/* pageName */}
      <h1 className="text-gray-400 p-2 ">{GoogleDasboardResponse?.pageName}</h1>
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
