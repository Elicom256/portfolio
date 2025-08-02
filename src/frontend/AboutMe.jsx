import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import TechStack from './TechStack';
import Journey from './Journey';
import Footer from './Footer';

export default function AboutMe() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <About />
      <Skills />
      <TechStack />
      <Journey />
    </div>
  );
}
