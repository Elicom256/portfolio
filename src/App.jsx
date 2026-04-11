import './App.css';
import { Route, Routes } from 'react-router-dom';
import Tools from './frontend/Tools';
import Contact from './frontend/Contact';
import Home from './frontend/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './nav/NavBar';
import Footer from './frontend/Footer';
import AboutMe from './frontend/AboutMe';
import { ElijahResume } from './pages/pdf/ElijahResume';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100'>
      <NavBar />

      <main className='flex-grow pt-24'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<AboutMe />} />
          <Route path='tools' element={<Tools />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Projects />} />
          <Route path='resume' element={<Resume />} />
          <Route path='elijah-resume' element={<ElijahResume />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
