import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

const sections = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { href: 'https://github.com/Elicom256', icon: <FaGithub className='h-5 w-5' />, label: 'GitHub' },
  { href: 'https://x.com/ElicomElijah', icon: <FaXTwitter className='h-5 w-5' />, label: 'X' },
  {
    href: 'https://www.linkedin.com/in/mugisha-elijah-88a291239/',
    icon: <FaLinkedin className='h-5 w-5' />,
    label: 'LinkedIn',
  },
  {
    href: 'https://wa.me/256781490899/?text=Hello%20Elicom',
    icon: <FaWhatsapp className='h-5 w-5' />,
    label: 'WhatsApp',
  },
  { href: 'mailto:elicomelijah@gmail.com', icon: <Mail className='h-5 w-5' />, label: 'Email' },
];

const Footer = () => {
  return (
    <footer className='bg-slate-950/95 border-t border-slate-800/80 text-slate-300'>
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <div className='grid gap-10 md:grid-cols-3'>
          <div className='space-y-4'>
            <p className='text-sm uppercase tracking-[0.35em] text-amber-300/80'>Elicom</p>
            <h3 className='text-lg font-semibold text-white'>
              Full-stack product engineering — Laravel, Node.js, React & PostgreSQL.
            </h3>
            <p className='italic leading-6 text-slate-400'>
              Co-founder of KlassApp. Founder of AfroDuuka. I design, build and run
              SaaS that real schools and businesses depend on every day — from
              database schema to deployment to production support.
            </p>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-white'>Explore</h4>
            <div className='grid gap-3 text-slate-400'>
              {sections.map((section) => (
                <a key={section.href} href={section.href} className='transition hover:text-amber-300'>
                  {section.label}
                </a>
              ))}
              <Link to='/resume' className='transition hover:text-amber-300'>
                Resume
              </Link>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-white'>Connect</h4>
            <div className='flex flex-wrap items-center gap-3'>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel='noreferrer'
                  className='inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-900/80 text-slate-200 transition hover:border-amber-300 hover:text-amber-300'
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='italic mt-10 border-t border-slate-800/70 pt-6 text-center text-sm text-slate-500'>
          &copy; {new Date().getFullYear()} Elijah Mugisha Elicom. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
