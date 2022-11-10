import React from 'react'

const Card = (props) => {
  const { number, title } = props.card

  return (
    <div id='card' className={`nav-card-${number}`}>
      <h3>{title}</h3>
    </div>
  )
}

export default Card