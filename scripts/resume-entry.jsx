// Headless entry for rendering the resume to a PDF file (used by scripts/render-resume.mjs)
import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import { ResumeDocument } from '../src/pages/pdf/ElijahResume.jsx';

const out = process.argv[2] || 'resume.pdf';

renderToFile(React.createElement(ResumeDocument), out)
  .then(() => console.log(`PDF written to ${out}`))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
