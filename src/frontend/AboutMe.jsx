import React from 'react';
import HeroSection from './about/HeroSection';
import Skills from './about/Skills';
import TechStack from './about/TechStack';
import Journey from './about/Journey';
import About from './about/About';

export default function AboutMe() {
  return (
    <div className="min-h-screen px-4 py-10 md:px-10 flex flex-col gap-5 pt-23">
      <HeroSection />
      <About />
      <Skills />
      <TechStack />
      <Journey />
    </div>
  );
}
