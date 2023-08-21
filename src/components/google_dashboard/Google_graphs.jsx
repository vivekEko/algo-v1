import React, { useEffect, useState } from "react";
import { GoogleDasboardResponse } from "../../mock_data/GoogleDashboardData";
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
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const Google_graphs = () => {
  const [activeGraph, setActiveGraph] = useState([
    "Average Rating",
    "Positives",
  ]);
  const [graphName, setGraphName] = useState();
  const graphs = ["Average Rating", "Positives", "Neutrals", "Negatives"];
  const [showGraphSelection, setShowGraphSelection] = useState(false);

  return (
    <section>
      <div className="flex flex-col gap-2">
        <div className="w-full bg-purple-50 p-2 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold capitalize py-2">Trends</h1>

            {/* select graph */}
            <div className="relative min-w-[10rem]">
              <button
                onClick={() => setShowGraphSelection(!showGraphSelection)}
                className="flex justify-between items-center gap-2 text-sm text-gray-500 border rounded-lg px-3 py-2 w-full border-blue-800 border-2"
              >
                <span>Select Graph</span>
                <span>
                  {" "}
                  <ArrowDropDownRoundedIcon />
                </span>
              </button>

              {showGraphSelection && (
                <div className="absolute text-sm bg-white border z-10 shadow-md text-gray-700 w-full">
                  {graphs?.map((mapedGraphName, i) => {
                    return (
                      <div
                        key={i}
                        className="cursor-pointer p-2 flex items-center gap-2"
                        onClick={() => {
                          setGraphName(mapedGraphName);

                          if (activeGraph?.includes(mapedGraphName)) {
                            activeGraph?.length > 1 &&
                              setActiveGraph(
                                activeGraph.filter((filtered_graphName) => {
                                  return filtered_graphName !== mapedGraphName;
                                })
                              );
                          } else {
                            setActiveGraph([...activeGraph, mapedGraphName]);
                          }
                        }}
                      >
                        <span>
                          {activeGraph?.includes(mapedGraphName) ? (
                            <CheckCircleOutlineRoundedIcon
                              fontSize="small"
                              className="text-blue-500"
                            />
                          ) : (
                            <RadioButtonUncheckedRoundedIcon fontSize="small" />
                          )}
                        </span>
                        <span> {mapedGraphName}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {showGraphSelection && (
                <div
                  onClick={() => setShowGraphSelection(false)}
                  className="fixed inset-0 z-[5]"
                ></div>
              )}
            </div>
          </div>

          <div className=" p-2 rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                // key={graphName}
                data={
                  GoogleDasboardResponse?.all_branch_data[0]
                    ?.specific_branch_data?.rating_over_time
                }
                margin={{ top: 0, right: 20, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="positiveGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#00ac69" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#00ac69" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <defs>
                  <linearGradient
                    id="negativeGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#FF0000" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FF0000" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <defs>
                  <linearGradient
                    id="neutralGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#808080" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#808080" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  vertical={false}
                  horizontal={false}
                  opacity={0.5}
                />
                <XAxis
                  dataKey="month"
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

                {activeGraph?.includes("Average Rating") && (
                  <Bar
                    barSize={20}
                    name="Average rating"
                    dataKey="avg_rating"
                    fill="#3D3C73"
                    radius={[5, 5, 0, 0]}
                  />
                )}

                {activeGraph?.includes("Positives") && (
                  <Area
                    type="monotone"
                    name="Positives"
                    dataKey="positive"
                    stroke="#00ac69"
                    dot={false}
                    strokeWidth={4}
                    fill="url(#positiveGradient)"
                  />
                )}

                {activeGraph?.includes("Negatives") && (
                  <Area
                    type="monotone"
                    name="Negatives"
                    dataKey="negative"
                    stroke="#FF0000"
                    dot={false}
                    strokeWidth={4}
                    fill="url(#negativeGradient)"
                  />
                )}

                {activeGraph?.includes("Neutrals") && (
                  <Area
                    type="monotone"
                    name="Neutrals"
                    dataKey="neutral"
                    stroke="#808080"
                    dot={false}
                    strokeWidth={4}
                    fill="url(#neutralGradient)"
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Google_graphs;

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="rounded-md bg-[#fafafa] text-[#1a1a1a] p-[1rem] shadow-2xl shadow-[#000000]">
        <h1 className="capitalize mr-2 text-lg mb-2 font-bold ">
          Sentiment Analysis
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
                    {data?.name}:
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
