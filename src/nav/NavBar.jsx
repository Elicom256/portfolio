import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gray-900 text-white px-20">
      <Link className="" to="/">Elicom</Link>
    <div className="flex gap-8">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="hero-section">Hero's Section</NavLink>
      <NavLink to="tools">Tools</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="resume">Resume</NavLink>
      </div>
      </div>
  )
}

export default NavBar
