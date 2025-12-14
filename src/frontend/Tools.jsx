import { FaCss3, FaHardHat } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import {
  SiChainlink,
  SiEthers,
  SiExpress,
  SiJavascript,
  SiOpenzeppelin,
  SiPostgresql,
  SiSolidity,
  SiTailwindcss,
} from "react-icons/si";

const Tools = () => {
  return (
    <div className="py-10 px-3 md:px-10  pt-23   ">
      <div className="">
        <h2 className="head font-bold text-4xl capitalize text-center ">Skills and Tools</h2>
        <div className="flex flex-col items-center ">
          <p className="text-center my-2">
            These're the technologies that gear my Full stack development blockchain development
          </p>

          <div className="grid lg:grid-cols-3 gap-3 w-full pt-10">
            <div className="w-full px-7 py-4 bg-gray-700 rounded  transition-all duration-300 hover:scale-102 ease-in-out">
              <h3 className="head font-semi-bold text-xl my-2 capitalize  text-amber-400 ">Frontend</h3>
              <ul className="list-none">
                <li className="flex items-center gap-2">
                  <SiJavascript className="text-amber-400" /> <span>Javascript (React.js)</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCss3 className="text-blue-400" /> <span>CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <SiTailwindcss className="text-blue-400" /> <span>Tailwindcss</span>
                </li>
              </ul>
            </div>

            <div className=" w-full  px-7 py-4  bg-gray-700 rounded  transition-all duration-300 hover:scale-102 ease-in-out">
              <h3 className="head font-semi-bold text-xl my-2 capitalize text-amber-400 ">Backend </h3>
              <ul className="list-none">
                <li className="flex items-center gap-2">
                  <FaNodeJs className="text-green-600" /> <span>NodeJs</span>
                </li>
                <li className="flex items-center gap-2">
                  <SiExpress className="text-gray-950" /> <span>ExpressJs</span>
                </li>
                <li className="flex items-center gap-2">
                  <SiPostgresql className="text-blue-400" /> <span>PostgreSQL</span>
                </li>
              </ul>
            </div>

            <div className="w-full  px-7 py-4 bg-gray-700 rounded  transition-all duration-300 hover:scale-102 ease-in-out">
              <h3 className="head font-semi-bold text-xl my-2 capitalize  text-amber-400">Blockchain</h3>
              <ul className="list-none">
                <li className="flex items-center gap-2">
                  <SiSolidity className="text-blue-500" /> <span>Solidity</span>
                </li>
                <li className="flex items-center gap-2">
                  <SiEthers className="text-indigo-400" /> <span>EthersJs</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaHardHat className="text-yellow-600" /> <span>EthersJs</span>
                </li>
                <li className="flex items-center gap-2">
                  <SiChainlink className="text-blue-400" /> <span>Chainlink</span>
                </li>
                <li className="flex items-center gap-2">
                  <SiOpenzeppelin className="text-blue-400" /> <span>Chainlink</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
