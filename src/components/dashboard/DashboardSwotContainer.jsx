import React from "react";
import swot from "../../assets/swat.svg";
import { dashboard_data_1 } from "../../mock_data/dashboardData";

const DashboardSwotContainer = () => {
  return (
    <section className="p-5">
      <div className=" relative xl:hidden pb-5">
        <img
          src={swot}
          alt="swot analysis"
          className="hidden sm:block w-full max-w-xs mx-auto"
        />
        <div className=" absolute inset-0 flex justify-center items-center">
          <h1 className="text-3xl font-bold text-[#3D3C73]">SWOT ANALYSIS</h1>{" "}
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-5 p-5">
        <div className="flex flex-col gap-5 flex-1 ">
          {dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.swot_data?.map(
            (swot_data, swot_index) => {
              if (swot_index < 2)
                return (
                  <div
                    key={swot_data?.title}
                    className=" px-5  flex-1 rounded-lg border"
                  >
                    <h1 className="text-xl font-medium p-3 text-[#3D3C73]">
                      {swot_data?.title}
                    </h1>
                    <ul className="pl-5 ">
                      {swot_data?.bullet_points?.map((bullet_point, ind) => {
                        return (
                          <li key={ind} className="list-disc mb-2">
                            {bullet_point}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
            }
          )}
        </div>
        <div className="flex-1 relative hidden xl:block">
          <img src={swot} alt="swot analysis" className="w-full" />
          <div className=" absolute inset-0 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-[#3D3C73]">SWOT ANALYSIS</h1>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1">
          {dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.swot_data?.map(
            (swot_data, swot_index) => {
              if (swot_index > 1)
                return (
                  <div
                    key={swot_data?.title}
                    className=" px-5  flex-1 rounded-lg border"
                  >
                    <h1 className="text-2xl font-medium p-3 text-[#3D3C73]">
                      {swot_data?.title}
                    </h1>
                    <ul className="pl-5 ">
                      {swot_data?.bullet_points?.map((bullet_point, ind) => {
                        return (
                          <li key={ind} className="list-disc mb-2">
                            {bullet_point}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default DashboardSwotContainer;
