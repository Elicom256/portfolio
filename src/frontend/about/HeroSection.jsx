import React from "react";
import picture from "../../pics/bg-null.png";

const HeroSection = () => {
  return (
    <section className="bg-gray-700 rounded p-5 transition-all duration-300 hover:scale-101 ease-in-out">
      <div className="flex flex-col md:flex-row justify-around items-center gap-10">
        <div className="text-left space-y-4">
          <h2 className="lg:text-4xl text-2xl font-bold mb-6 text-yellow-600">👋 Meet Elijah "Elicom"</h2>

          <p className="text-xl font-semibold">
            Full Name: <span className="text-green-400 px-3">Elijah Talent Mugisha</span>
          </p>
          <p className="text-xl font-semibold">
            Other Name: <span className="text-green-400 px-3">Elicom</span>
          </p>
          <p className="text-xl font-semibold">
            Title: <span className="text-green-400 px-3">Software Engineer</span>
          </p>
        </div>
        <img src={picture} alt="Elicom" className="w-40 h-40 rounded-full shadow-lg object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
