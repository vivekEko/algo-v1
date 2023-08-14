import React from "react";
import { dashboard_data_1 } from "../../helpers/dashboardData";
import action_icon from "../../assets/action_icon.svg";
import DashboardReviews from "./DashboardReviews";

const DashboardSuggestionContainer = () => {
  return (
    <div className="flex pl-5 gap-5">
      <section className="w-full  h-full">
        <DashboardReviews />
      </section>
      <section className="w-full max-w-[350px]  h-full  ">
        {/* actions */}
        <div className="border rounded-2xl overflow-hidden mb-10">
          <div className="flex gap-5 items-center justify-start bg-gradient-to-tr from-[#3633b4] to-[#3D3C73] p-3 px-5">
            <div className="bg-white w-5 rounded-full aspect-square "></div>
            <h1 className="text-2xl font-semibold text-white">
              Actions Required
            </h1>
          </div>

          <div className="divide-y-2 divide-gray-100">
            {dashboard_data_1?.all_branch_data?.[0]?.specific_branch_data?.actions_required?.map(
              (actions_data, action_index) => {
                return (
                  <li
                    key={action_index}
                    className="p-3 px-5 text-lg marker:text-[#3633b4]"
                  >
                    {actions_data}
                  </li>
                );
              }
            )}
          </div>
        </div>
        {/* topics */}
        <div className="border rounded-2xl overflow-hidden sticky top-20 ">
          <div className="flex gap-5 items-center justify-start bg-gradient-to-tr from-[#3633b4] to-[#3D3C73] p-3 px-5">
            <div className="bg-white w-5 rounded-full aspect-square "></div>
            <h1 className="text-2xl font-semibold text-white">Topics</h1>
          </div>

          <div className="divide-y-2 divide-gray-100">
            {dashboard_data_1?.all_branch_data?.[0]?.specific_branch_data?.topics?.map(
              (topics_data, topics_index) => {
                return (
                  <li
                    key={topics_index}
                    className="p-3 px-5 text-lg marker:text-[#3633b4]"
                  >
                    {topics_data}
                  </li>
                );
              }
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardSuggestionContainer;
