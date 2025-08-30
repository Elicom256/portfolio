import React from "react";
import { FaDiscord, FaFacebookF, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-20 py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* School info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Acknowledgement</h3>
          <p className="text-gray-300">
            I would like to sincerely thank my brother, <span
              className="font-extrabold text-green-400">Mucu</span> for the unwavering support
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xl font-bold mb-2">My Socials</h3>
          <ul className="flex gap-6 text-gray-300">
            <li><a href="#academics" className="hover:text-gray-100"><FaFacebookF /></a></li>
            <li><a href="#curriculum" className="hover:text-gray-100"><FaXTwitter /></a></li>
            <li><a href="#departments" className="hover:text-gray-100"><FaTelegramPlane /></a></li>
            <li><a href="#contact" className="hover:text-gray-100"><FaDiscord /></a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-gray-300">📞 +256 781490899</p>
          <p className="text-gray-300">✉️ elicomelijah330@gmail.com</p>

        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Elijah Mugisha Elicom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
