import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import eli3 from "../pics/pc.jpg";
import eli1 from "../pics/bg-null.png";

const Home = () => {
  return (
    <div
      className="relative  w-full min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${eli3})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Gray overlay */}
      <div className="absolute inset-0 bg-gray-800/90"></div>

      <div className="relative z-10 flex justify-center">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hey, I'm Elicom Elijah</h1>
          <p className="max-w-xl text-xl md:text-xl opacity-90">I'm a</p>
          <TypeAnimation
            sequence={['Blockchain Dev', 3000, 'Smart Contract Dev', 3000, 'Fullstack dev', 3000]}
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
    </div>
  );
};

export default Home;
