import React, { useRef } from 'react'
import { formFields } from '../constants'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then(result => {
      console.log(result.text)
      evt.target.reset()
    })
    .catch(err => console.error(err.text))
  }

  const setValidity = evt => {
    evt.target.setCustomValidity(
      evt.target.value ? '' : `Fields with "*" are required`
    )
  }

  const handleReset = evt => {
    evt.target.form.reset()
  }

  return (
    <div id='contact'>
      <h2 className='contact-header'>Contact Me</h2>
      <div className='form-container'>
        <form ref={form} className='contact-form' onSubmit={handleSubmit}>
          {formFields.map(field => (
            <input
              key={field.name}
              id={field.name}
              className='form-field'
              placeholder={
                field.required ? 
                `${field.placeholder}*` 
                : field.placeholder}
              name={field.name}
              type={field.type}
              required={field.required}
              onInvalid={setValidity}
              onInput={setValidity}
            />
          ))}
          <textarea 
            id='message'
            className='form-field'
            placeholder='Message*'
            name='message'
            required={true}
            onInvalid={setValidity}
            onInput={setValidity}
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