import React from 'react';
import picture from "../pics/bg-null.png";

const HeroSection = () => {
  return (
    <section className="mt-24 px-6 py-10 text-center bg-gray-600 shadow-md rounded-xl mx-4 md:mx-20">
      <h2 className="text-4xl font-bold mb-6 text-yellow-600">👋 Meet Elijah "Elicom"</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-10">
        <div className="text-left space-y-4">
          <p className="text-xl font-semibold">Full Name: <span className="text-green-400 px-3">Elijah Talent Mugisha</span></p>
          <p className="text-xl font-semibold">Other Name: <span className="text-green-400 px-3">Elicom</span></p>
          <p className="text-xl font-semibold">Title: <span className="text-green-400 px-3">Software Engineer</span></p>
        </div>
        <img src={picture} alt="Elicom" className="w-40 h-40 rounded-full shadow-lg object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
