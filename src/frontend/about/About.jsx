import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-700 rounded p-5 transition-all duration-300 hover:scale-103 ease-in-out">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-600">About Me</h2>
      <p className="text-lg leading-8 max-w-3xl mx-auto">
        I'm a focused junior Software Engineer with a solid understanding of frontend development patterns. I’ve gained
        strong skills through building projects, exploring new tools, and engaging in constant learning. I enjoy
        collaboration and always seek ways to improve, especially in Web3 and smart contract development.
      </p>
      <div className="mt-6 text-center text-gray-100">
        <h4 className="text-2xl font-semibold mb-2">🚀 Current Exploration</h4>
        <p>
          Building and deploying EVM-compatible smart contracts with a focus on scalability and real-world use cases.
        </p>
      </div>
    </section>
  );
};

export default About;
