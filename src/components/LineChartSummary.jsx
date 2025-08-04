import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 12,
        },
        boxWidth: 10,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
        },
        maxTicksLimit: 4, // ✅ Show only 4 evenly spaced labels
      },
    },
    y: {
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};


const labels = [
  "Jan 17",
  "Feb 17",
  "Mar 17",
  "Apr 17",
  "May 17",
  "Jun 17",
  "Jul 17",
  "Aug 17",
  "Sep 17",
  "Oct 17",
  "Nov 17",
  "Dec 17",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Nifty 50",
      data: [1.0, 1.5, 1.3, 1.7, 2.2, 2.0, 2.5, 2.8, 2.6, 3.0, 2.7, 3.1],
      borderColor: "rgb(34, 155, 236)",
      backgroundColor: "rgb(34, 155, 236)",
      pointRadius: 0,
      tension: 0.4, // smooth curves
      borderWidth: 5,
    },
  ],
};


export function LineChartSummary() {
  return (
    <div style={{ height: "200px" }}>
      {" "}
      {/* or 150px, 180px */}
      <Line options={options} data={data} />
    </div>
  );
}
