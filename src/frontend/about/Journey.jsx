import React from 'react';

const Journey = () => {
  return (
    <section className="flex flex-col justify-center items-center  bg-gray-700 rounded shadow-sm p-5 transition-all duration-300 hover:scale-103 ease-in-out">
      <h2 className="text-3xl font-bold  text-yellow-600 mb-6">📅 My Journey</h2>
      <ul className="space-y-4 text-gray-100-700">
        <li>
          <strong>2022:</strong> Started self-teaching HTML and CSS focusing on responsive web structuring
        </li>
        <li>
          <strong>2023:</strong> Started learning Javascript and ReactJs and built some dynamic projects
        </li>
        <li>
          <strong>2024:</strong> Went deep into frontend development patterns and global state management
        </li>
        <li>
          <strong>2025:</strong> Started learning NodeJS and blockchain and Built full-stack blockchain-powered applications
        </li>
      </ul>
    </section>
  );
};

export default Journey;
