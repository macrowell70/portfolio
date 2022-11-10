import React from 'react'
import { Card } from './index'
import { intro, navCardInfo} from '../constants'

const Home = () => {
  return (
    <div id='home'>
      {intro.map(text => (
        <h2 key={text.id} className={`intro text-${text.id}`}>
          {text.text}
        </h2>
      ))}
    </div>
  )
}

export default Home