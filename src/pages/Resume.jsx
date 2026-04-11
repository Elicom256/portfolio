// import resume from '../pics/resume.pdf';
import { Link } from 'react-router-dom';
import SectionHeader from '../frontend/SectionHeader';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <section className='px-4 py-12 md:px-10 pt-24'>
      <SectionHeader
        accent='Resume'
        title='Download my professional resume'
        subtitle='Get a full overview of my experience, skills, and recent roles in a printable format.'
      />

      <div className='mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-8 text-center shadow-2xl shadow-slate-950/20'>
        <p className='text-slate-300'>
          The resume includes a summary of my technical skills, project highlights, and experience in secure Web2 and
          full-stack engineering.
        </p>

        {/* <a href={resume} download className='inline-flex w-full justify-center sm:w-auto'>
          <Button variant='default' className='rounded-full px-8 py-3 text-sm font-semibold'>
            Download Resume
          </Button>
        </a> */}
        <Link className='rounded-full px-8 py-3 text-sm font-semibold bg-white/8 hover:bg-white/10' to='/elijah-resume'>Check my resume here</Link>
      </div>
    </section>
  );
};

export default Resume;
