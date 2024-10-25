import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import energyData from "../../data.json" ; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({dataPoints}) => {
  const data = {
    labels: energyData.hours.slice(0, dataPoints),
    datasets: [
      {
        label: "Optimized",
        data: energyData.optimized.slice(0, dataPoints),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4, 
      },
      {
        label: "Baseline",
        data: energyData.baseline,
        borderColor: "#adb5bd",
        backgroundColor: "#adb5bd",
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Energy Consumption',
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

  return <Line data={data} options={options} />;
};

export default LineChart;