// Dependencies
import React from "react";

// UI dependencies
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

// Config
import { getOptions } from "./options";

// Register ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ datasets, legend }) => {
  return <Line options={getOptions(legend)} data={datasets} />;
};

export default LineChart;
