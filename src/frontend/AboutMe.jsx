import HeroSection from './about/HeroSection';
import Skills from './about/Skills';
import TechStack from './about/TechStack';
import Journey from './about/Journey';
import About from './about/About';
import SectionHeader from './SectionHeader';

export default function AboutMe() {
  return (
    <div className='min-h-screen px-4 py-10 md:px-10 pt-8 flex flex-col gap-8'>
      <SectionHeader
        accent='About'
        title='A modern look at my experience and growth'
        subtitle='A scalable component structure with clean sections that keep the portfolio readable and consistent.'
      />

      <div className='grid gap-6'>
        <HeroSection />
        <About />
        <div className='grid gap-6 lg:grid-cols-2'>
          <Skills />
          <TechStack />
        </div>
        <Journey />
      </div>
    </div>
  );
}
