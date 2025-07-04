import React from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Navbar from "./Componets/Navbar/Navbar";
import HomePage from "./Componets/Home/HomePage";
import Footer from "./Componets/Footer/Footer";
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;
