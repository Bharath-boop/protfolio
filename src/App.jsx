import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="*" element={Navigate('/')} /> */}
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
