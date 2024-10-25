import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CHART_COLORS, transparentize } from '../../utils/Utils'
import energyData from "../../data.json" ; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ dataPoints }) => {
  const data = {
    labels: energyData.hours.slice(0, dataPoints),
    datasets: [
      {
        label: "Energy Saved",
        data: energyData.baseline.map((value, index) => value - energyData.optimized[index]).slice(0, dataPoints),
        backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
        borderColor: CHART_COLORS.blue,
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Hour", 
        },
      },
      y: {
        title: {
          display: true,
          text: "Energy (kWh)", 
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;