import React from "react";
import LandingPage from "./components/Initialization/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import VisualizationPage from "./components/Visualization/VisualizationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/visualization" element={<VisualizationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;