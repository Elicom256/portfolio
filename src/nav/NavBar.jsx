import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../pics/elicom.png";
import resume from "../pics/resume.pdf";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { FaGithubAlt } from "react-icons/fa6";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const links = ["Home", "About", "Tools", "Contact", "Projects"];

  return (
    <nav className=" w-full fixed px-3 top-0 left-0  bg-green-600 text-white shadow z-50 font-semibold">
      <div className="flex items-center justify-between p-3">
        {/* flex justify-between items-center px-6 md:px-16 py-4 */}
        {/* <h1 className="text-2xl font-bold text-blue-700">XYZ Primary School</h1> */}
        <div className=" text-gray-900">
          <NavLink to="https://github.com/Elijah-ug">
            {" "}
            <Github />
          </NavLink>
          {/* <img src={logo} className="rounded-full object-cover" alt="XYZ P/S" /> */}
        </div>
        {/* theme */}

        <div className="hidden md:flex justify-end gap-6 ">
          {links.map((link, id) => (
            <NavLink
              key={id}
              to={link === "Home" ? "/" : link.toLowerCase()}
              className=" p-1 hover:text-blue-600 transition capitalize"
            >
              {link}
            </NavLink>
          ))}
        </div>
        <div className=" flex md:hidden items-center gap-3">
          {/* <ToggleTheme /> */}
          <button className="md:hidden " onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t "
          >
            <div className="text-end mt-3"></div>
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link === "Home" ? "/" : link.toLowerCase()}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 capitalize"
              >
                {link}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
