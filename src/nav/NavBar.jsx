import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../pics/elicom.png"
import resume from '../pics/resume.pdf';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-20 py-4 bg-gray-900 text-white">
      <Link className="w-16 rounded-full" to="/"> <img src={logo} alt="" /></Link>
    <div className="flex gap-8">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="tools">Tools</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to={resume} target="_blank" >Resume</NavLink>
      </div>
      </div>
  )
}

export default NavBar
