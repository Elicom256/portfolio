import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import eli3 from '../pics/pc.jpg';
import eli1 from '../pics/bg-null.png';

const Home = () => {
  return (
    <section className='relative min-h-screen overflow-hidden'>
      <div className='absolute inset-0 bg-slate-950/95' />
      <div className='absolute inset-0 bg-cover bg-center opacity-40' style={{ backgroundImage: `url(${eli3})` }} />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.24),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.93),rgba(15,23,42,0.9))]' />

      <div className='relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between'>
          <div className='max-w-2xl space-y-6 text-center lg:text-left'>
            <p className='text-sm uppercase tracking-[0.35em] text-amber-300/90'>Full-stack engineer</p>
            <h1 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Hi, I’m <span className='text-amber-300'>Elicom Elijah</span>, building secure and scalable Web2 systems.
            </h1>
            <div className='text-lg leading-8 text-slate-200 sm:text-xl'>
              <span>Creating resilient experiences with PERN, Prisma, APIs, and dynamic user interfaces.</span>
            </div>
            <div className='text-2xl font-semibold text-amber-300'>
              <TypeAnimation
                sequence={[
                  'PERN Developer',
                  2500,
                  'Secure Web App Architect',
                  2500,
                  'Fullstack Engineer',
                  2500,
                  'Web3 Explorer',
                  2500,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start'>
              <Link
                to='/projects'
                className='inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-400/20 transition hover:bg-amber-300'
              >
                View projects
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
              <Link
                to='/contact'
                className='inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-300 hover:text-amber-300'
              >
                Contact me
              </Link>
            </div>
          </div>

          <div className='mx-auto flex w-full max-w-xs justify-center lg:mx-0 lg:max-w-sm'>
            <div className='relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950/70 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl'>
              <img src={eli1} alt='Elicom' className='w-full rounded-3xl object-cover shadow-xl' />
            </div>
          </div>
        </div>

        <div className='mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 text-center shadow-xl shadow-slate-950/10 hover:scale-103 transition-all duration-300 ease-in-out'>
            <Link to='https://klassapp.xyz/' target='_blank'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Live Work</p>
              <p className='mt-3 text-base font-semibold text-white'>School management system</p>
            </Link>
          </div>
          <div className='rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 text-center shadow-xl shadow-slate-950/10 hover:scale-103 transition-all duration-300 ease-in-out'>
            <Link to='https://afro-invest.vercel.app/' target='_blank'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Live work</p>
              <p className='mt-3 text-base font-semibold text-white'>Afro Invest project</p>
            </Link>
          </div>
          <div className='rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 text-center shadow-xl shadow-slate-950/10 hover:scale-103 transition-all duration-300 ease-in-out'>
            <Link to='/'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Next milestone</p>
              <p className='mt-3 text-base font-semibold text-white'>Modern shop system</p>
            </Link>
          </div>
          <div className='rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 text-center shadow-xl shadow-slate-950/10 hover:scale-103 transition-all duration-300 ease-in-out'>
            <Link to='https://af4-gilt.vercel.app/' target='_blank'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>Currently building</p>
              <p className='mt-3 text-base font-semibold text-white'>Dating platform</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
