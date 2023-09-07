import React from "react";
import swot from "../../assets/swat.svg";
import { dashboard_data_1 } from "../../mock_data/dashboardData";

const DashboardSwotContainer = () => {
  return (
    <section className="p-5">
      <div className="flex flex-col md:flex-row  gap-5 p-5">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-5 flex-1 ">
          {dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.swot_data?.map(
            (swot_data, swot_index) => {
              return (
                <div
                  key={swot_data?.title}
                  style={{
                    color: swot_data?.color,
                    backgroundColor: swot_data?.bg,
                  }}
                  className=" px-5  flex-1 rounded-lg border relative"
                >
                  <h1
                    className={`hidden md:block text-6xl font-medium opacity-20 absolute top-[50%]  -translate-y-[50%] right-5 -z-10 `}
                  >
                    {swot_data?.title?.split("")[0]}
                  </h1>

                  <h1 className="text-2xl font-medium p-3 ">
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
