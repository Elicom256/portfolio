import React from "react";
import { FaDiscord, FaFacebookF, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-3 md:px-10 flex flex-col gap-5">
      <div className="grid sm:grid-cols-3 py-2">
        {/* acknowledgement*/}
        <div className=" text-center">
          <h3 className="text-xl font-bold mb-3">Acknowledgement</h3>
          <p className="text-gray-300">
            My sincere thanks goes to brother, <span className="font-extrabold text-green-400">Mucu</span>
          </p>
        </div>

        {/* Contact info */}
        <div className=" text-center">
          <h3 className="text-xl font-bold mb-3">Contact</h3>
          <p className="text-gray-300">📞 +256 781490899</p>
          <p className="text-gray-300">✉️ elicomelijah330@gmail.com</p>
        </div>

        {/* Quick links */}
        <div className=" text-center">
          <h3 className="text-xl font-bold mb-3">My Socials</h3>
          <ul className="flex items-center justify-center gap-10 text-gray-300">
            <li>
              <a href="#academics" className="hover:text-gray-100">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#curriculum" className="hover:text-gray-100">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="#departments" className="hover:text-gray-100">
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-100">
                <FaDiscord />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Elijah Mugisha Elicom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
