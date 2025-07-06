import React from 'react'
import "../styles/hero.css"
import Footer from './Footer'
const About = () => {
  return (
      <div>
          <div className="flex justify-center my-10">
              <div>
              <h2 className="font-semi-bold text-3xl mb-4 capitalize">About me</h2>
              <div className="desc mt-5">
                  <h4 className="font-semi-bold text-xl capitalize mb-2">I'm an forcused junior Software Engineer</h4>
                  <div className="div">I have a solid understanding of front end development patterns <br />
                      with high skills obtained from avariety of resources and Projects<br />
                      I'm a great fun of learning which continuously improves my skills <br />
                      In addition, I'm always eager and waiting to work with others to improve my skills <br />
                      I started my journey of learning back in 2022
                  </div>

              </div>
              <div className="mt-5">
                  <h4 className="font-bold text-xl capitalize mb-2">My Current Exploration</h4>
                  <p>I'm currently building EVM compartible Smart Contract in the web3.0 space + testing and deployment</p>
              </div>
              </div>
              </div>

    </div>
  )
}

export default About
