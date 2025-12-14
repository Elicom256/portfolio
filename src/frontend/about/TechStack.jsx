import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaHardHat, FaGithub, FaCss3Alt } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiSolidity,
  SiChainlink,
  SiEthers,
  SiExpress,
  SiCss3,
} from "react-icons/si";

const TechStack = () => {
  return (
    <section className="bg-gray-700 rounded p-5 transition-all duration-300 hover:scale-101 ease-in-out">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-4">🛠 My Tech Stack</h2>
      <p className="text-center mb-8">Tools and technologies I use to build full-stack and blockchain solutions.</p>

      <div className="flex flex-col  gap-6">
        {/* <div> */}
        {/* Frontend */}
        <div className="mb-6 ">
          <h3 className="text-xl font-semibold mb-2">🎨 Web Frontend</h3>
          <div className="flex flex-wrap gap-6 ">
            <div className="flex items-center gap-2" title="React">
              <FaReact className="text-blue-500" />
              <span>React.JS</span>
            </div>
            <div className="flex items-center gap-2" title="Redux Toolkit">
              <SiRedux className="text-purple-600" />
              <span>RTK</span>
            </div>
            <div className="flex items-center gap-2" title="Tailwind CSS">
              <SiTailwindcss className="text-cyan-500" />
              <span>Tailwindcss</span>
            </div>
            <div className="flex items-center gap-2" title="Tailwind CSS">
              <SiCss3 className="text-cyan-500" />
              <span>CSS</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">🧠 Web Backend</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2" title="Node.js">
              <FaNodeJs className="text-green-600" />
              <span>Node.Js</span>
            </div>
            <div className="flex items-center gap-2" title="Express.js">
              <SiExpress className="text-gray-950" />
              <span>Express.Js</span>
            </div>
            <div className="flex items-center gap-2" title="PostgreSQL">
              <SiPostgresql className="text-blue-500" />
              <span>PostgreSql</span>
            </div>
          </div>
        </div>

        {/* Blockchain */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">🔗 Blockchain</h3>
          <div className="flex flex-wrap gap-6 text-gray-100">
            <div className="flex items-center gap-2" title="Solidity">
              <SiSolidity className="text-blue-500" />
              <span>Solidity</span>
            </div>
            <div className="flex items-center gap-2" title="Chainlink">
              <SiChainlink className="text-blue-400" />
              <span>Chainlink</span>
            </div>
            <div className="flex items-center gap-2" title="Hardhat">
              <FaHardHat className="text-yellow-600" />
              <span>Hardhat</span>
            </div>
            <div className="flex items-center gap-2" title="Ethers.js">
              <SiEthers className="text-indigo-400" />
              <span>Ethers</span>
            </div>
          </div>
          {/* </div> */}

          {/* Currently Learning */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">📚 Currently Learning</h3>
            <p className="text-blue-300 text-lg">Systems design and PHP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
