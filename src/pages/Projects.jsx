import React from 'react'
import AllProjects from '../frontend/AllProjects'

const Projects = () => {
  return (
      <div className="px-3 lg:px-10">
          <h2 className="text-center font-bold mb-4 text-amber-400">Some of my killer projects are listed below, with the relevant possible links. These are under AfroBlocks Ecosystem</h2>
          <div className="projects">
              <div className="cart">
                  <AllProjects/>
              </div>

          </div>

    </div>
  )
}

export default Projects
