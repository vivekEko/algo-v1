import React from "react";
import { dashboard_data_1 } from "../../mock_data/dashboardData";
import action_icon from "../../assets/action_icon.svg";
import GraphsContainer from "./GraphsContainer";

const DashboardSuggestionContainer = () => {
  return (
    <div className=" mt-5 ">
      <section className="w-full  h-full flex flex-col xl:flex-row  gap-5 mb-5">
        <GraphsContainer />
        <section className="w-full xl:max-w-[350px]  h-full flex flex-col sm:flex-row xl:flex-col gap-5">
          {/* actions */}
          <div className="border rounded-2xl overflow-hidden flex-1 ">
            <div className="flex gap-5 items-center justify-start bg-[#3D3C73] p-3 px-5">
              <div className="bg-white w-3 rounded-full aspect-square "></div>
              <h1 className="text-lg font-semibold text-white">
                Actions Required
              </h1>
            </div>

            <div className="divide-y-2 divide-gray-100">
              {dashboard_data_1?.all_branch_data?.[0]?.specific_branch_data?.actions_required?.map(
                (actions_data, action_index) => {
                  return (
                    <li
                      key={action_index}
                      className="p-2 px-4 text-base marker:text-[#3633b4]"
                    >
                      {actions_data}
                    </li>
                  );
                }
              )}
            </div>
          </div>
          {/* topics */}
          <div className="border rounded-2xl overflow-hidden  flex-1">
            <div className="flex gap-5 items-center justify-start bg-[#3D3C73] p-3 px-5">
              <div className="bg-white w-3 rounded-full aspect-square "></div>
              <h1 className="text-lg font-semibold text-white">Topics</h1>
            </div>

            <div className="divide-y-2 divide-gray-100">
              {dashboard_data_1?.all_branch_data?.[0]?.specific_branch_data?.topics?.map(
                (topics_data, topics_index) => {
                  return (
                    <li
                      key={topics_index}
                      className="p-3 px-5 text-base marker:text-[#3633b4]"
                    >
                      {topics_data}
                    </li>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DashboardSuggestionContainer;
