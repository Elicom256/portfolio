import React from 'react'
import resume from '../pics/resume.pdf';
import { Link } from 'react-router-dom';
const Resume = () => {
  return (
    <div>
      <h2>Here Is My Resume</h2>
      <div className="">
        <a href={resume}>res</a>
      </div>
    </div>
  );
};

export default Resume
