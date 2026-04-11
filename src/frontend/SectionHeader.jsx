import React from 'react';

const SectionHeader = ({ accent, title, subtitle, description }) => {
  return (
    <div className='mx-auto max-w-6xl text-center px-4 sm:px-6 lg:px-8'>
      {accent && <p className='text-sm font-semibold uppercase tracking-[0.4em] text-amber-300/90'>{accent}</p>}
      <h2 className='mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight'>{title}</h2>
      {subtitle && <p className='mt-3 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto'>{subtitle}</p>}
      {description && <p className='mt-4 text-sm sm:text-base text-slate-400 max-w-3xl mx-auto'>{description}</p>}
    </div>
  );
};

export default SectionHeader;
