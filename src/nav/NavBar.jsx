import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Tools', to: '/tools' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
    { label: 'Resume', to: '/resume' },
  ];

  const linkClass = ({ isActive }) =>
    `capitalize transition ${isActive ? 'text-amber-300 font-semibold' : 'text-slate-100/80 hover:text-amber-300'}`;

  return (
    <nav className='fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-slate-950/20'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-3'>
          <a href='/' className='text-lg font-semibold tracking-wide text-slate-100'>
            Elicom
          </a>
          <a
            href='https://github.com/Elijah-ug'
            target='_blank'
            rel='noreferrer'
            className='text-slate-100/80 transition hover:text-amber-300'
          >
            <Github className='h-5 w-5' />
          </a>
        </div>

        <div className='hidden items-center gap-6 md:flex'>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
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
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block border-b border-slate-800/70 px-5 py-4 text-base ${
                    isActive ? 'text-amber-300' : 'text-slate-100/80 hover:text-amber-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
