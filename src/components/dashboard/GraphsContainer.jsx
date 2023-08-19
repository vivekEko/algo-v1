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
    <div className="flex gap-5">
      <div className="flex-1">
        <h1>Data visualization</h1>
        {/* Graph */}
        <div className="flex gap-2">
          {dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.client_analysis?.map(
            (graphs) => {
              return (
                <div key={graphs?.heading} className="w-full z-[-10]">
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart
                      // key={graphName}
                      data={graphs?.graph_data}
                      margin={{ top: 0, right: 20, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="nssGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#6f2da8"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#6f2da8"
                            stopOpacity={0.05}
                          />
                        </linearGradient>
                      </defs>
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
                      <Tooltip cursor={false} />

                      <Bar
                        stackId="a"
                        barSize={20}
                        name="sentiments score"
                        dataKey="value"
                        fill="#0094E0"
                        radius={[5, 5, 0, 0]}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* ################### */}
      <div className="flex-1">
        <h1>Competitors Data visualization</h1>
        {/* Graph */}
        <div className="flex gap-2">
          {dashboard_data_1?.all_branch_data[0]?.specific_branch_data?.competitor_analysis?.map(
            (graphs) => {
              return (
                <div key={graphs?.heading} className="w-full  z-[-10]">
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart
                      // key={graphName}
                      data={graphs?.graph_data}
                      margin={{ top: 0, right: 20, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="nssGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#6f2da8"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#6f2da8"
                            stopOpacity={0.05}
                          />
                        </linearGradient>
                      </defs>
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
                      <Tooltip cursor={false} />

                      <Bar
                        stackId="a"
                        barSize={20}
                        name="sentiments score"
                        dataKey="value"
                        fill="#0094E0"
                        radius={[5, 5, 0, 0]}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* ###################### */}
      <div className="flex-1 hidden">
        <h1>Competitor's data visualization</h1>
        <div className="flex gap-2">Abc</div>
      </div>
    </div>
  );
};

export default GraphsContainer;
