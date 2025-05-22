import React, { useState } from 'react'
import "./App.css"
import HeroSection from './components/HeroSection'
import About from './components/About'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import { Route, Routes } from 'react-router-dom'
import NavBar from './nav/NavBar'
import Container from './components/Container'
import Footer from './components/Footer'
const App = () => {
  const [isChecked, setIsChecked] = useState( true)
  return (
    <div data-theme={isChecked ? "dark" : "light"} className={`min-h-screen flex flex-col bg-[#121212] `}>
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
      <Route path="about" element={<About />} />
      <Route path="hero-section" element={<HeroSection />} />
      <Route path="tools" element={<Tools />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  </div>

  {/* Footer */}
  <footer className=" p-4 mt-auto">
    <Footer />
  </footer>
</div>



    // <div data-theme={isChecked ? "dark" : "light"} className='theme'>
    // <div className="cont">
    //   <NavBar />
    //     {/* <Container/> */}
    //     <div className="tog">
    //       <input type="checkbox" name="check" id="check" className='toggle' onChange={() => setIsChecked(!isChecked)} />
    //           <label htmlFor="check"></label>
    //     </div>
    //     <div className="mb-10 ">
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='about' element={<About />}/>
    //     <Route path='hero-section' element={<HeroSection />}/>
    //     <Route path='tools' element={<Tools />}/>
    //     <Route path='contact' element={<Contact />}/>
    //     <Route path='projects' element={<Projects />}/>
    //     <Route path='resume' element={<Resume/>}/>
    //       </Routes>
    //     </div>
    //     <div className="footer">
    //   <Footer/>
    //   </div>
    //   </div>

    //   </div>
  )
}

export default App
