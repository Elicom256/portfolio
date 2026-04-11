import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaFacebookF, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-slate-950/95 border-t border-slate-800/80 text-slate-300'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid gap-10 md:grid-cols-3'>
          <div className='space-y-4'>
            <p className='text-sm uppercase tracking-[0.35em] text-amber-300/80'>Elicom</p>
            <h3 className='text-2xl font-semibold text-white'>Modern Web2 systems built for scale.</h3>
            <p className='text-slate-400'>
              Secure apps with clean APIs, professional workflows, and strong product foundations.
            </p>
          </div>

          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-white'>Quick links</h4>
            <div className='grid gap-3 text-slate-400'>
              <Link to='/' className='transition hover:text-amber-300'>
                Home
              </Link>
              <Link to='/about' className='transition hover:text-amber-300'>
                About
              </Link>
              <Link to='/projects' className='transition hover:text-amber-300'>
                Projects
              </Link>
              <Link to='/contact' className='transition hover:text-amber-300'>
                Contact
              </Link>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-white'>Connect</h4>
            <div className='flex flex-wrap items-center gap-3'>
              <a
                href='https://github.com/Elijah-ug'
                target='_blank'
                rel='noreferrer'
                className='inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-900/80 text-slate-200 transition hover:border-amber-300 hover:text-amber-300'
              >
                <FaGithub className='h-5 w-5' />
              </a>
              <a
                href='https://x.com/ElicomElijah'
                target='_blank'
                rel='noreferrer'
                className='inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-900/80 text-slate-200 transition hover:border-amber-300 hover:text-amber-300'
              >
                <FaXTwitter className='h-5 w-5' />
              </a>
              <a
                href='https://t.me/'
                target='_blank'
                rel='noreferrer'
                className='inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-900/80 text-slate-200 transition hover:border-amber-300 hover:text-amber-300'
              >
                <FaTelegramPlane className='h-5 w-5' />
              </a>
              <a
                href='https://discord.com/'
                target='_blank'
                rel='noreferrer'
                className='inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-900/80 text-slate-200 transition hover:border-amber-300 hover:text-amber-300'
              >
                <FaDiscord className='h-5 w-5' />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-slate-800/70 pt-6 text-center text-sm text-slate-500'>
          &copy; {new Date().getFullYear()} Elijah Mugisha Elicom. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
