import React from "react";
import { dashboard_data_1 } from "../../mock_data/dashboardData";

import starIcon from "../../assets/star.svg";

const DashboardReviews = (props) => {
  console.log("props?.:", props?.reviews);
  if (props?.reviews)
    return (
      <div className="border rounded-2xl ">
        <div className="flex gap-5 items-center justify-between bg-purple-50 p-3 px-5 border rounded-t-2xl">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl font-semibold text-[#3633b4]">
              {props?.heading}
            </h1>
          </div>

          <div className="hidden">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 px-3 bg-white outline-none border-0 rounded-lg w-full"
            />
          </div>
        </div>

        <div className="hidden md:block px-3 p-2 text-gray-500">
          <div className="grid grid-cols-10">
            <h1>Date</h1>
            <h1>Sentiment</h1>
            <h1 className="col-span-8">Review</h1>
          </div>
        </div>

        <div className="h-[500px] divide-y-2 divide-gray-100 overflow-y-auto">
          {props?.reviews?.map((review_data) => {
            return (
              <div
                key={review_data?.id}
                className="md:grid grid-cols-10 px-3 py-5  md:p-3 "
              >
                <h1>{review_data?.date}</h1>
                <h1>{review_data?.sentiment}</h1>
                <div className="col-span-8">
                  <h1>{review_data?.review}</h1>
                  <div className="flex gap-2 mt-1 ">
                    <div className=" flex justify-center items-center">
                      <div className="flex justify-center items-center w-8 aspect-square rounded-full bg-[#3633b4] text-white">
                        <span>{review_data?.name?.split("")[0]}</span>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-gray-500 capitalize">
                        {review_data?.name}
                      </h1>
                      <div className="flex gap-2 items-center">
                        <h1 className="text-gray-500">
                          {review_data?.rating}{" "}
                        </h1>
                        <img src={starIcon} alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default DashboardReviews;
