import React from 'react';

const skills = [
  'React',
  'TailwindCSS',
  'Solidity',
  'Express.js',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Chainlink',
  'Hardhat',
];

const Skills = () => {
  return (
    <section className='bg-slate-950/90 border border-slate-800/80 rounded-3xl p-5 shadow-2xl shadow-slate-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-slate-950/50 ease-in-out'>
      <h2 className='text-3xl font-bold text-center text-amber-300 mb-6'>💡 My Core Skills</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {skills.map((skill, index) => (
          <span
            key={index}
            className='bg-slate-900/80 text-slate-100 px-4 py-2 rounded-full shadow-sm shadow-slate-950/30 text-sm font-semibold'
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
