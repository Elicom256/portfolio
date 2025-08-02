import React from 'react';

const Journey = () => {
  return (
    <section className="flex flex-col justify-center items-center  bg-gray-600 px-6 py-10 mx-4 md:mx-20 mt-10 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold  text-yellow-600 mb-6">📅 My Journey</h2>
      <ul className="space-y-4 text-gray-100-700">
        <li><strong>2022:</strong> Started self-teaching HTML, CSS, and JavaScript</li>
        <li><strong>2023:</strong> Built several web2 apps & moved to backend (Node/Express)</li>
        <li><strong>2024:</strong> Entered Web3 space, learned Solidity, Chainlink, and EVM</li>
        <li><strong>2025:</strong> Building full-stack blockchain-powered applications</li>
      </ul>
    </section>
  );
};

export default Journey;
