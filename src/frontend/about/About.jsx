import React from 'react';

const About = () => {
  return (
    <section className='bg-slate-950/90 border border-slate-800/80 rounded-3xl px-3 py-5 lg:px-10 shadow-2xl shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-slate-950/50 ease-in-out'>
      <h2 className='text-3xl font-bold text-center mb-6 text-amber-300'>About Me</h2>
      <p className='text-lg leading-8 max-w-3xl mx-auto text-slate-200'>
        I'm a focused Software Engineer with solid understanding of Web architecture and with modern development
        patterns. I’ve gained strong skills through building projects, exploring new tools, engaging in constant
        learning and taking advantage of AI tools like Claude Code and Copilot. I enjoy collaboration and always seek ways to improve, especially when designing secure and scalable
        systems.
      </p>
      <div className='mt-6 text-center text-slate-300'>
        <h4 className='text-2xl font-semibold mb-2'>🚀 Current Exploration</h4>
        <p>Scaling KlassApp, which is a school management software system for Ugandan schools</p>
      </div>
    </section>
  );
};

export default About;
