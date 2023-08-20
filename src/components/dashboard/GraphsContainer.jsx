import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashboard_data_1 } from "../../mock_data/dashboardData";

const GraphsContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row   gap-5 flex-1">
      <div className="flex-1">
        <h1 className="p-2 w-full bg-violet-100 text-center font-semibold rounded-md ">
          Srinidhi's Google Reviews
        </h1>
        {/* Graph */}
        <div className="flex flex-col gap-2">
          {dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.client_analysis?.map(
            (graphs, graphs_index) => {
              return (
                <div key={graphs?.heading} className="w-full ">
                  <h1 className="text-2xl font-semibold capitalize py-2">
                    {graphs?.heading}
                  </h1>
                  <div className="bg-purple-50 p-2 rounded-lg">
                    <ResponsiveContainer width="100%" height={300}>
                      <ComposedChart
                        // key={graphName}
                        data={graphs?.graph_data}
                        margin={{ top: 0, right: 20, left: -20, bottom: 0 }}
                      >
                        <CartesianGrid
                          vertical={false}
                          horizontal={false}
                          opacity={0.5}
                        />
                        <XAxis
                          dataKey="title"
                          fontSize={12}
                          axisLine={false}
                          tickLine={false}
                          tickCount={6}
                          angle={0}
                          textAnchor="middle"
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          fontSize={12}
                          tickCount={4}
                          tickFormatter={(number) => `${number}`}
                          margin={{ right: 20 }}
                        />
                        <Tooltip cursor={false} content={<CustomTooltip />} />

                        <Bar
                          stackId="a"
                          barSize={20}
                          name={graphs?.heading}
                          dataKey="value"
                          fill="#3D3C73"
                          radius={[5, 5, 0, 0]}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* ################### */}
      <div className="flex-1">
        <h1 className="p-2 w-full bg-violet-100 text-center font-semibold rounded-md ">
          Competitors Google Reviews
        </h1>
        {/* Graph */}
        <div className="flex flex-col  gap-2">
          {dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.competitor_analysis?.map(
            (graphs) => {
              return (
                <div key={graphs?.heading} className="w-full ">
                  <h1 className="text-2xl font-semibold capitalize py-2">
                    {graphs?.heading}
                  </h1>

                  <div className="bg-purple-50 p-2 rounded-lg">
                    <ResponsiveContainer width="100%" height={300}>
                      <ComposedChart
                        // key={graphName}
                        data={graphs?.graph_data}
                        margin={{ top: 0, right: 20, left: -20, bottom: 0 }}
                      >
                        <CartesianGrid
                          vertical={false}
                          horizontal={false}
                          opacity={0.5}
                        />
                        <XAxis
                          dataKey="title"
                          fontSize={12}
                          axisLine={false}
                          tickLine={false}
                          tickCount={6}
                          angle={0}
                          textAnchor="middle"
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          fontSize={12}
                          tickCount={4}
                          tickFormatter={(number) => `${number}`}
                          margin={{ right: 20 }}
                        />
                        <Tooltip cursor={false} content={<CustomTooltip />} />

                        <Bar
                          barSize={20}
                          name={graphs?.heading}
                          dataKey="value"
                          fill="#3D3C73"
                          radius={[5, 5, 0, 0]}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default GraphsContainer;

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="rounded-md bg-[#fafafa] text-[#1a1a1a] p-[1rem] shadow-2xl shadow-[#000000]">
        <h1 className="capitalize mr-2 text-lg mb-2 font-bold ">
          {payload[0]?.name}
        </h1>
        {payload?.map((data) => {
          return (
            <div key={Math?.random()} className="">
              <div className="flex justify-start items-center ">
                <div
                  style={{ background: data?.color }}
                  className={`h-[5px] w-[5px] rounded-full mr-2 `}
                ></div>
                <div className="flex justify-between items-center  w-full">
                  <span className=" mr-2 text-base font-semibold capitalize">
                    {data?.payload?.title}:
                  </span>
                  <span className="text-base font-semibold">{data?.value}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}
