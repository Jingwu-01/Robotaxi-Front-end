import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    city: "",
    simulationTime: "",
    electricityRate: "",
    electricityPrice: "",
    robotaxiCount: "",
    chargingStationCount: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    navigate("/visualization");
  };

  const handleReset = () => {
    setFormData({
      city: "",
      simulationTime: "",
      electricityRate: "",
      electricityPrice: "",
      robotaxiCount: "",
      chargingStationCount: "",
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Simulation Initialization</h1>
      <p className="text-center">
        Please enter the following information to initialize the simulation.
      </p>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">City</label>
          <div className="form-check">
            {["Houston", "Los Angeles", "Chicago"].map((city) => (
              <div key={city} className="form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="city"
                  value={city}
                  checked={formData.city === city}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label me-5">{city}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="simulationTime" className="form-label">
            Simulation Time (hours)
          </label>
          <input
            type="number"
            id="simulationTime"
            name="simulationTime"
            min="1"
            className="form-control"
            placeholder="Please enter simulation time in hours"
            value={formData.simulationTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Electricity Rate</label>
          <div className="form-check">
            {["fixed", "variable"].map((rate) => (
              <div key={rate} className="form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="electricityRate"
                  value={rate}
                  checked={formData.electricityRate === rate}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label me-5">
                  {rate.charAt(0).toUpperCase() + rate.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="electricityPrice" className="form-label">
            Electricity Price ($/kWh)
          </label>
          <input
            type="number"
            id="electricityPrice"
            name="electricityPrice"
            min="0"
            step="0.01"
            className="form-control"
            placeholder="Please enter electricity price"
            value={formData.electricityPrice}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="robotaxiCount" className="form-label">
            Number of Robotaxis
          </label>
          <input
            type="number"
            id="robotaxiCount"
            name="robotaxiCount"
            min="1"
            className="form-control"
            placeholder="Please enter number of robotaxis"
            value={formData.robotaxiCount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="chargingStationCount" className="form-label">
            Number of Charging Stations
          </label>
          <input
            type="number"
            id="chargingStationCount"
            name="chargingStationCount"
            min="1"
            className="form-control"
            placeholder="Please enter number of charging stations"
            value={formData.chargingStationCount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="reset" className="btn btn-secondary" onClick={handleReset}>
            Clear
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;