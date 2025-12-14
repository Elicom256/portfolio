import React from "react";

const skills = [
  "React",
  "TailwindCSS",
  "Solidity",
  "Express.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Chainlink",
  "Hardhat",
];

const Skills = () => {
  return (
    <section className="bg-gray-700 rounded p-5 transition-all duration-300 hover:scale-101 ease-in-out">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">💡 My Core Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full shadow text-sm font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
