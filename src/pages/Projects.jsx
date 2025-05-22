import React from 'react'
import Footer from '../components/Footer'

const Projects = () => {
  return (
      <div>
          <h2>My Projects</h2>
          <p>Some of my projects are listed below</p>
          <div className="projects">
              <div className="calculator">
                  <h4>Calculator App</h4>
              </div>

              <div className="todo">
                  <h4>Todo App</h4>
              </div>

              <div className="notes">
                  <h4>Notes App</h4>
              </div>

              <div className="news">
                  <h4>News App</h4>
              </div>

              <div className="weather">
                  <h4>Weather App</h4>
              </div>

              <div className="recipe">
                  <h4>Recipe App</h4>
              </div>
              <div className="cart">
                  <h4>Shopping Cart</h4>
              </div>

          </div>
          <p>Each project's source code is on my <a href="#">Github</a></p>

          <div className="mt-10">
              {/* <Footer/> */}
          </div>
    </div>
  )
}

export default Projects
