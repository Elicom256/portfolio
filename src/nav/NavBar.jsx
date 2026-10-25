import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FileText, Github, Menu, X } from 'lucide-react';

const sections = [
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className='fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-slate-950/20'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-3'>
          <a href='#home' className='text-lg font-semibold tracking-wide text-slate-100'>
            Elicom
          </a>
          <a
            href='https://github.com/Elicom256'
            target='_blank'
            rel='noreferrer'
            className='text-slate-100/80 transition hover:text-amber-300'
          >
            <Github className='h-5 w-5' />
          </a>
        </div>

        <div className='hidden items-center gap-7 md:flex'>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium capitalize transition ${
                active === id ? 'text-amber-300' : 'text-slate-100/80 hover:text-amber-300'
              }`}
            >
              {label}
            </a>
          ))}
          <Link
            to='/resume'
            className='inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300'
          >
            <FileText className='h-4 w-4' />
            Resume
          </Link>
        </div>

        <button
          type='button'
          className='inline-flex items-center justify-center rounded-md p-2 text-slate-100 transition hover:text-amber-300 md:hidden'
          onClick={() => setOpen((prev) => !prev)}
          aria-label='Toggle navigation menu'
        >
          {open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='md:hidden border-t border-slate-800/70 bg-slate-950/98'
          >
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className='block border-b border-slate-800/70 px-5 py-4 text-base text-slate-100/80 transition hover:text-amber-300'
              >
                {label}
              </a>
            ))}
            <Link
              to='/resume'
              onClick={() => setOpen(false)}
              className='block px-5 py-4 text-base font-semibold text-amber-300'
            >
              Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
