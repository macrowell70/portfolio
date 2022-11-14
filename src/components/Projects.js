import React, { useState, useEffect } from 'react'
import { Modal } from './index'
import { projects } from '../constants'

const Projects = () => {
  const [projectsInfo, setProjectsInfo] = useState()
  const [currentProject, setCurrentProject] = useState(null)
  const [projectIsExpanded, setProjectIsExpanded] = useState(false)
  const [modalIsActive, setModalIsActive] = useState(false)

  useEffect(() => {
    setProjectsInfo(projects.reverse())
  }, [])

  const handleMouseEnter = (evt, i) => {
    evt.preventDefault()
    setCurrentProject(i)
    setProjectIsExpanded(true)
  }

  const handleMouseLeave = evt => {
    evt.preventDefault()
    setProjectIsExpanded(false)
  }

  const handleModalOpen = () => {
    setModalIsActive(true)
  }

  const handleModalClose = res => {
    setModalIsActive(res)
  }

  const paginate = (first, last) => {
    const projectsShown = projectsInfo.slice(first, last)
    return projectsShown
  }

  return (
    <div id='projects' >
      <h2>My Projects</h2>
        <div className='projects'>
          {projectsInfo && paginate(0, 6).map((project, i) => (
            <div 
              className='project'
              key={project.id}
              onMouseEnter={evt => handleMouseEnter(evt, i)}
              onMouseLeave = {evt => handleMouseLeave(evt)}
              onClick={handleModalOpen}
            >
              <h3 className='title'>
                {project.title}
              </h3>
              <img 
                src={`${project.thumbnail}`}
                alt={`${project.title} thumbnail`}
                className="thumbnail"
              />
              {projectIsExpanded
                && currentProject === i 
                && <div>
                  See More
                </div>}
            </div>
          ))}
          {modalIsActive
            && <Modal
              handleModalClose={handleModalClose} 
              project={projects[currentProject]}
            />}
        </div>
    </div>
  )
}

export default Projects