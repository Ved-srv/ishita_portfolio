import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import "./App.css";
import Psychology from "./components/Psychology/Psychology";
import Process from "./components/Process/process";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Psychology />
                <Process />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
