import React from 'react';

const Journey = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-slate-950/90 border border-slate-800/80 rounded-3xl p-5 shadow-2xl shadow-slate-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-slate-950/50 ease-in-out'>
      <h2 className='text-3xl font-bold text-amber-300 mb-6'>📅 My Journey</h2>
      <ul className='space-y-4 text-slate-200'>
        <li>
          <strong>2022:</strong> Started self-teaching HTML and CSS focusing on responsive web structuring
        </li>
        <li>
          <strong>2023:</strong> Started learning Javascript and ReactJs and built some dynamic projects
        </li>
        <li>
          <strong>2024:</strong> Went deep into frontend development patterns and global state management
        </li>
        <li>
          <strong>2025:</strong> Started mastering PERN and Prisma ORM, building secure web applications and scalable
          backend systems.
        </li>
      </ul>
    </section>
  );
};

export default Journey;
