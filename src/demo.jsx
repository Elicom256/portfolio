import React, { useState } from 'react'
import "./App.css"
import HeroSection from './frontend/HeroSection'
import About from './frontend/About'
import Tools from './frontend/Tools'
import Contact from './frontend/Contact'
import Home from './frontend/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import { Route, Routes } from 'react-router-dom'
import NavBar from './nav/NavBar'
import Footer from './frontend/Footer'
import AboutMe from './frontend/AboutMe'
const App = () => {
  const [isChecked, setIsChecked] = useState( true)
  return (
    <div data-theme={isChecked ? "dark" : "light"} className={`flex flex-col min-h-screen bg-[#121212] `}>
      <div>
  <NavBar />
  <label htmlFor="theme-toggle" className="flex items-center gap-2 absolute top-4 right-4">
  {/* <span className="text-sm text-yellow-400">Dark Mode</span> */}
  <div className="relative inline-block w-12 h-6 cursor-pointer">
    <input id="theme-toggle" type="checkbox" className="sr-only peer " checked={isChecked} onChange={() => setIsChecked(!isChecked)}
    />
    <div className="w-12 h-6 bg-yellowgreen rounded-full peer-checked:bg-yellow-500 transition-colors"></div>
    <div className="absolute top-0.5 left-1 w-5 h-5 bg-yellow-300 rounded-full transition-transform peer-checked:translate-x-6"></div>
  </div>
</label>


  {/* Main route area */}
  <div className="flex-grow">
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
        {/* Footer */}
  <footer className="">
    <Footer />
  </footer>
        </div>


</div>

  )
}

export default App
