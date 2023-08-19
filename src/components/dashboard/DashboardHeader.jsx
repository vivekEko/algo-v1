import React from "react";
import { dashboard_data_1 } from "../../mock_data/dashboardData";
import client_1_logo from "../../assets/client_1_logo.png";
import zomato_logo from "../../assets/zomato_logo.svg";
import swiggy_logo from "../../assets/swiggy_logo.svg";
import google_logo from "../../assets/google_logo.svg";

const DashboardHeader = () => {
  const logoArr = [google_logo, swiggy_logo, zomato_logo];
  return (
    <header className="flex gap-5  justify-between items-center divide-x-2 pl-3 sticky top-0 bg-white drop-shadow-sm pb-2">
      {/* stats */}
      <div className="flex items-center justify-between w-full  gap-5 ">
        {dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.stats?.map(
          (stats_data, stats_index) => {
            return (
              <div key={stats_data?.name} className="w-full max-w-[300px]  ">
                <div className="flex gap-4 items-center">
                  <img
                    src={logoArr[stats_index]}
                    alt={stats_data?.name}
                    className="w-full"
                  />

                  <div className="w-max flex items-end">
                    <h1 className="text-5xl font-medium">
                      {stats_data?.rating}{" "}
                    </h1>
                    <h2 className="text-gray-500 text-xl">/5</h2>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* branch selector */}

      <div className=" pl-5 flex items-center gap-4 flex-none">
        <div>
          <img src={client_1_logo} alt="Srinidhi Delux" className="w-32" />
        </div>
        <div className="inline-block min-w-[200px]">
          <label
            htmlFor="branch"
            className="block mb-1 text-sm font-medium text-gray-500 "
          >
            Select a branch
          </label>
          <select
            id="branches"
            className=" border-[#3633b4] bg-[#3633b4] bg-opacity-10 border-2 text-gray-900 text-sm rounded-lg focus:ring-[#3D3C73] focus:border-[#3D3C73]  w-full p-2.5 cursor-pointer "
          >
            {dashboard_data_1?.all_branch_data?.map((branch_data) => {
              return (
                <option
                  key={branch_data?.branch_name}
                  defaultValue={
                    branch_data?.branch_name == "overall" ? true : false
                  }
                  value={branch_data?.branch_name}
                >
                  {branch_data?.branch_name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
