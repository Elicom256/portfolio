import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './frontend/Home';
import Resume from './pages/Resume';
import NavBar from './nav/NavBar';
import Footer from './frontend/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100'>
      <NavBar />

      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
