import React from 'react'
import "../styles/hero.css"
import Footer from './Footer'
const About = () => {
  return (
      <div>
          <div className="absolute left-1/4 top-1/5">
              <h2 className="font-semi-bold text-3xl mb-4 capitalize">About me</h2>
              <div className="desc mt-5">
                  <h4 className="font-semi-bold text-xl capitalize mb-2">I'm an experienced junior front end developer</h4>
                  <div className="div">I have a solid understanding of front end development patterns <br />
                      with high skills obtained from avariety of Projects <br />
                      I'm a great fun of learning which continuously improves my skills <br />
                      In addition, I'm always eager and waiting to work with others to improve my skills <br />
                      I started my journey of learning back in 2022
                  </div>

              </div>
              <div className="mt-5">
                  <h4 className="font-bold text-xl capitalize mb-2">My Current Exploration</h4>
                  <p>I'm currently learning Solidity and Ethers for Smart contract development and testing in web3</p>
              </div>
              <div className="mt-20">
              {/* <Footer /> */}
              </div>
          </div>

    </div>
  )
}

export default About
