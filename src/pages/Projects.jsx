import React from 'react';
import AllProjects from '../frontend/AllProjects';
import SectionHeader from '../frontend/SectionHeader';

const Projects = () => {
  return (
    <div className='px-4 py-10 md:px-10 pt-24'>
      <SectionHeader
        accent='Projects'
        title='Selected work and case studies'
        subtitle='A curated collection of secure web apps, scalable systems, and modern integrations built with the PERN stack.'
      />
      <div className='mt-12 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/30'>
        <AllProjects />
      </div>
    </div>
  );
};

export default Projects;
