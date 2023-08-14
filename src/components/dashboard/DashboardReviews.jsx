import React from "react";
import { dashboard_data_1 } from "../../helpers/dashboardData";
import starIcon from "../../assets/star.svg";

const DashboardReviews = () => {
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
  const colorArray = [
    "#1ab3c0",
    "#94f088",
    "#b39e7b",
    "#2d403f",
    "#4e036d",
    "#8e94c9",
    "#a568d2",
    "#6cfc3b",
    "#f16027",
    "#ea8177",
  ];
  return (
    <div className="border rounded-2xl ">
      <div className="flex gap-5 items-center justify-between bg-gradient-to-tr from-[#3633b4] to-[#3D3C73] p-3 px-5 border rounded-t-2xl">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-semibold text-white">Reviews</h1>
        </div>

        <div className="">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 px-3 bg-white outline-none border-0 rounded-lg w-full"
          />
        </div>
      </div>

      <div className="px-3 p-2 text-gray-500">
        <div className="grid grid-cols-10">
          <h1>Date</h1>
          <h1>Sentiment</h1>
          <h1 className="col-span-8">Review</h1>
        </div>
      </div>

      <div className="min-h-[400px] divide-y-2 divide-gray-50 overflow-y-auto">
        {dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.reviews?.map(
          (review_data) => {
            return (
              <div key={review_data?.id} className="grid grid-cols-10 px-3 p-2">
                <h1>{review_data?.date}</h1>
                <h1>{review_data?.sentiment}</h1>
                <div className="col-span-8">
                  <h1>{review_data?.comment}</h1>
                  <div className="flex gap-2 mt-1 ">
                    <div className=" flex justify-center items-center">
                      <div className="flex justify-center items-center w-8 aspect-square rounded-full bg-[#3633b4] text-white">
                        <span>{review_data?.name?.split("")[0]}</span>
                      </div>
                    </div>
                    <div>
                      <h1>{review_data?.name}</h1>
                      <div className="flex gap-2 items-center">
                        <h1>{review_data?.rating} </h1>
                        <img src={starIcon} alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default DashboardReviews;
