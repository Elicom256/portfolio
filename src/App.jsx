import React, { useState } from "react";
import "./App.css";
import Tools from "./frontend/Tools";
import Contact from "./frontend/Contact";
import Home from "./frontend/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { Route, Routes } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Footer from "./frontend/Footer";
import AboutMe from "./frontend/AboutMe";
import { MobileNav } from "./nav/MobileNav";
const App = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main route area */}
      <div className="flex-grow">
        <NavBar />
       <div className="">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          {/* <Route path="hero-section" element={<HeroSection />} /> */}
          <Route path="tools" element={<Tools />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
       </div>
      </div>
      {/* Footer */}
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
