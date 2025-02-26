import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Componets/Navbar/Navbar";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Project from "./Componets/Projects/Project";
import Contact from "./Componets/Contact/Contact";
import Footer from "./Componets/Footer/Footer";
import "./App.css";

const Spinner = () => {
  return <div className="spinner">
    <div className="spinner_one"></div>
    <div className="spinner_two"></div>
    <div className="spinner_three"></div>
    <div className="spinner_four"></div>
  </div>;
};


const PageWrapper = ({ children }) => {
  const location = useLocation(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1550); 

    return () => clearTimeout(timer);
  }, [location.pathname]); 

  return loading ? <Spinner /> : children;
};

function App() {
  return (
    <Router>
       <PageWrapper>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      <Footer />
      </PageWrapper>
    </Router>
  );
}

export default App;
