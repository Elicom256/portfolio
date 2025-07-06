import React from 'react'
import AllProjects from '../frontend/AllProjects'

const Projects = () => {
  return (
      <div className="p-10">
          <h2 className="text-center font-bold mb-4 text-green-400">Some of my projects are listed below, with the relevant possible links</h2>
          <div className="projects">
              <div className="cart">
                  <AllProjects/>
              </div>

          </div>

    </div>
  )
}

export default Projects
