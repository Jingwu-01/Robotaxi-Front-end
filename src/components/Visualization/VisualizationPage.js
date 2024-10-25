import React, { useState } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import "./VisualizationPage.css";

const VisualizationPage = () => {
  const [dataPoints, setDataPoints] = useState(5);

  const handleAddData = () => {
    setDataPoints((prev) => prev + 1);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Simulation Visualization</h1>
      <button onClick={handleAddData} className="btn btn-primary mb-5">
        Add Data
      </button>

      <div className="row">
        <h3>Line Chart</h3>
        <div className="col-md-12 d-flex justify-content-center chart">
          <LineChart dataPoints={dataPoints}/>
        </div>
      </div>

      <div className="row">
        <h3>Bar Chart</h3>
        <div className="col-md-12 d-flex justify-content-center chart">
          <BarChart dataPoints={dataPoints}/>
        </div>
      </div>

      <div className="row">
        <h3>Pie Chart</h3>
        <div className="col-md-12 d-flex justify-content-center chart">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default VisualizationPage;
