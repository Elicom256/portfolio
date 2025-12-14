import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../pics/elicom.png";
import { FaBars } from "react-icons/fa6";
import { Github } from "lucide-react";
export const MobileNav = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  return (
    <div className="flex  items-center justify-between  px-3 py-2 bg-gray-900 text-white">
      <Link className=" text-gray-900" to="/">
        {" "}
        <Github />
        {/* <img src={logo} alt="" className="rounded-full" /> */}
      </Link>
      <div className="relative">
        <FaBars onClick={() => setShowNavLinks(true)} className="text-3xl" />

        {
          <div className="flex gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="tools">Tools</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="projects">Projects</NavLink>
            {/* <NavLink to=""> </NavLink> */}
          </div>
        }
      </div>
    </div>
  );
};
