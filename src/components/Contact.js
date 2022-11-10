import React, { useState } from 'react'
import { formFields, initialFormValues } from '../constants'

const Contact = () => {
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChange = evt => {
    const { name, value } = evt.target
    evt.preventDefault()
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = () => {
    setFormValues(initialFormValues)
  }

  const handleReset = () => {
    setFormValues(initialFormValues)
  }

  return (
    <div id='contact'>
      <h2 className='contact-header'>Contact Me</h2>
      <div className='form-container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          {formFields.map(field => (
            <input
              key={field.name}
              id={field.name}
              className='form-field'
              placeholder={field.placeholder}
              name={field.name}
              type={field.type}
              value={formValues[field.name]}
              onChange={evt => handleChange(evt)}
            />
          ))}
          <textarea 
            id='message'
            className='form-field'
            placeholder='Message*'
            name='message'
            value={formValues.message}
            onChange={evt => handleChange(evt)}
          />
          <div className='button-container'>
            <input 
              type='submit' 
              value='Send Message'
              className='contact-form-submit' 
            />
            <input
              type='button'
              value='Reset Form'
              className='contact-form-reset'
              onClick={handleReset}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact