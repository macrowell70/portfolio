import React from 'react'

const Modal = props => {
    const { project } = props

    const handleModalClose = () => {
        return props.handleModalClose(false)
    }

  return (
    <div id='modal' className='modal-container'>
        <div className='modal-card'>
            <button className='modal-close' onClick={handleModalClose}>x</button>
            <div className='text-container'>
                <div className='modal-title'>{project.title}</div>
                <p className='modal-description'>{`${project.description}`}</p>
                <a href={`${project.link}`} target='_blank' rel='noreferrer'>View Site</a> 
            </div>
            
        </div>
    </div>
  )
}

export default Modal