import React from "react";
import { TypeAnimation } from "react-type-animation";
import eli3 from "../pics/pc.jpg";
import eli1 from "../pics/bg-null.png";

const Home = () => {
  return (
    <div className="">
      <div
        className="relative  w-full min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${eli3})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-800/90"></div>

        <div className="relative z-10 flex sm:flex-row flex-col  justify-center pt-23">
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-lg lg:text-6xl font-bold mb-4">Hey, I'm Elicom Elijah</h1>
            <p className="max-w-xl text-xl md:text-xl opacity-90">I'm a</p>
            <TypeAnimation
              sequence={["Blockchain Dev", 3000, "Smart Contract Dev", 3000, "Fullstack dev", 3000]}
              wrapper="span"
              speed={50}
              className="text-xl md:text-3xl font-semibold text-amber-400"
              repeat={Infinity}
            />
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img src={eli1} alt="Elicom" className="w-64 rounded-xl shadow-lg" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center py-7 gap-2 text-lg">
          <div className="w-sm text-white p-5 rounded-md bg-gray-900/70">
            <h3 className="font-semibold pb-2">Currently working on:</h3>
            <ul className="text-sm text-gray-200 flex flex-col gap-1">
              <li>➡️ Dating site</li>
              <li>➡️ School management system</li>
              <li>➡️ Church management system</li>
              <li>➡️ Shop system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
