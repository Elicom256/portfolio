import React from 'react';

const skills = ['React', 'TailwindCSS', 'Solidity', 'Express.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Chainlink', 'Hardhat'];

const Skills = () => {
  return (
    <section className="bg-gray-600 px-6 py-10 mx-4 md:mx-20 rounded-xl mt-10 shadow-sm">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">💡 My Core Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full shadow text-sm font-semibold">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
