import React from 'react'
import picture from "../pics/me.jpeg"
import "../styles/hero.css"
import Footer from './Footer'
const HeroSection = () => {
  return (
    <div className=" mt-16">
      <div className="flex gap-20 justify-center">
        <div className="text">
      <div className="head font-bold text-4xl mb-10 capitalize text-center ">
          <h2>Here is how I'm recognised</h2>
        </div>
        <div className="name mt-20 ">
          <h3 className="font-semi-bold text-2xl mb-4 capitalize">Full Name: Elijah Talent Mugisha</h3>
          <h3 className="font-semi-bold text-2xl mb-4 capitalize">Other Name: Elicom</h3>
          <h3 className="font-semi-bold text-2xl mb-4 capitalize">Title: Software Engineer</h3>
          </div>
          </div>
        <div className="pic ">
          <img className="w-60 rounded-full" src={picture} alt="" />
        </div>

      </div>
      <div className="mt-10">
              {/* <Footer/> */}
          </div>
    </div>
  )
}

export default HeroSection
