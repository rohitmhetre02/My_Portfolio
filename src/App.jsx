import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Componets/Home/HomePage";
import AllProjects from "./Componets/Projects/AllProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/all" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
