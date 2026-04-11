import React from 'react';

const About = () => {
  return (
    <section className='bg-slate-950/90 border border-slate-800/80 rounded-3xl px-3 py-5 lg:px-10 shadow-2xl shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-slate-950/50 ease-in-out'>
      <h2 className='text-3xl font-bold text-center mb-6 text-amber-300'>About Me</h2>
      <p className='text-lg leading-8 max-w-3xl mx-auto text-slate-200'>
        I'm a focused junior Software Engineer with a solid understanding of Web2 architecture and frontend development
        patterns. I’ve gained strong skills through building projects, exploring new tools, and engaging in constant
        learning. I enjoy collaboration and always seek ways to improve, especially when designing secure and scalable
        systems.
      </p>
      <div className='mt-6 text-center text-slate-300'>
        <h4 className='text-2xl font-semibold mb-2'>🚀 Current Exploration</h4>
        <p>Building stable PERN applications with Prisma ORM, scalable APIs, and solid backend architecture.</p>
      </div>
    </section>
  );
};

export default About;
