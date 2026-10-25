import { Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ArrowLeft, Download } from 'lucide-react';
import { ElijahResume, ResumeDocument } from './pdf/ElijahResume';

const Resume = () => {
  return (
    <section className='flex min-h-screen flex-col px-4 pb-10 pt-24 md:px-10'>
      <div className='mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-4'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.4em] text-amber-300/90'>Resume</p>
          <h1 className='mt-2 text-2xl font-semibold text-white sm:text-3xl'>
            Mugisha Elijah — Resume
          </h1>
        </div>

        <div className='flex items-center gap-3'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-amber-300 hover:text-amber-300'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to portfolio
          </Link>
          <PDFDownloadLink
            document={<ResumeDocument />}
            fileName='Mugisha_Elijah_Resume.pdf'
            className='inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-400/20 transition hover:bg-amber-300'
          >
            {({ loading }) => (loading ? 'Preparing…' : (
              <>
                <Download className='h-4 w-4' />
                Download PDF
              </>
            ))}
          </PDFDownloadLink>
        </div>
      </div>

      <div className='mx-auto mt-8 w-full max-w-4xl flex-1 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/90 shadow-2xl shadow-slate-950/30'>
        <ElijahResume />
      </div>
    </section>
  );
};

export default Resume;
