import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data1 = {
  labels: ["Margin Available", "Margin Used"],
  datasets: [
    {
      label: "# of Votes",
      data: [7730, 10330],
      backgroundColor: ["#A2D2FF", "#CDB4DB"],
      borderColor: "#fff",
      borderWidth: 1,
    },
  ],
};

export const data2 = {
  labels: ["Investment", "Profit"],
  datasets: [
    {
      label: "# of Votes",
      data: [29880, 1550],
      backgroundColor: ["#BDE0FE", "#FFAFCC"],
      borderColor: "#fff",
      borderWidth: 1,
    },
  ],
};


export function SummaryPieChartPosition() {
  return <Pie data={data1}/>;
}

export function SummaryPieChartHolding() {
  return <Pie data={data2}  />;
}