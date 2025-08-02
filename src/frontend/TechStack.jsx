import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHardHat, FaGithub, FaCss3Alt } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMongodb, SiPostgresql, SiSolidity, SiChainlink, SiEthers, SiExpress } from 'react-icons/si';

const TechStack = () => {
  return (
    <section className="mt-10 px-6 py-10 mx-4 md:mx-20 bg-gray-600 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-4">🛠 My Tech Stack</h2>
      <p className="text-center mb-8">
        Tools and technologies I use to build full-stack and blockchain solutions.
      </p>

      <div className="flex justify-center">
        <div>
         {/* Frontend */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🎨 Web Frontend</h3>
        <div className="flex flex-wrap gap-6 ">
          <div className='flex items-center gap-2' title="React"><FaReact className="hover:text-blue-500" /><span>React.JS</span></div>
          <div className='flex items-center gap-2' title="Redux Toolkit"><SiRedux className="hover:text-purple-600" /><span>RTK</span></div>
          <div className='flex items-center gap-2' title="Tailwind CSS"><SiTailwindcss className="hover:text-cyan-500" /><span>Tailwindcss</span></div>
        </div>
      </div>

      {/* Backend */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🧠 Web Backend</h3>
        <div className="flex  gap-6">
          <div className='flex items-center gap-2' title="Node.js"><FaNodeJs className="hover:text-green-600" /><span>Node.Js</span></div>
          <div className='flex items-center gap-2' title="Express.js"><SiExpress className="hover:text-gray-800" /><span>Express.Js</span></div>
          <div className='flex items-center gap-2' title="PostgreSQL"><SiPostgresql className="hover:text-blue-700" /><span>PostgreSql</span></div>
        </div>
      </div>

      {/* Blockchain */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🔗 Blockchain</h3>
        <div className="flex flex-wrap gap-6 text-gray-100">
          <div className='flex items-center gap-2' title="Solidity"><SiSolidity className="hover:text-green-400" /><span>Solidity</span></div>
          <div className='flex items-center gap-2' title="Chainlink"><SiChainlink className="hover:text-blue-400" /><span>Chainlink</span></div>
          <div className='flex items-center gap-2' title="Hardhat"><FaHardHat className="hover:text-yellow-600" /><span>Hardhat</span></div>
          <div className='flex items-center gap-2' title="Ethers.js"><SiEthers className="hover:text-indigo-500" /><span>Ethers</span></div>
        </div>
      </div>

      {/* Currently Learning */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">📚 Currently Learning</h3>
        <p className="text-blue-300 text-lg">Next.js, ZK (Zero Knowledge Proofs), DevOps (Docker + CI/CD)</p>
          </div>
          </div>
     </div>
    </section>
  );
};

export default TechStack;
