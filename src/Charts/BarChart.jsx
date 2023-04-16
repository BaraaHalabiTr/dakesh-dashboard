import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["_", ""],
  ["Jan", 42],
  ["Feb", 66],
  ["Oct ", 51],
 
];

export const options = {
  chart: {
    title: "Best Performance",
    subtitle: " Exchange/Month",
  },
  colors:["#85586f"]
};

export  default function Barchart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
