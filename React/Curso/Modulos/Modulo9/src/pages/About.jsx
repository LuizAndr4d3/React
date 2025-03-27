import React from 'react'
import { useCounterContext } from '../hooks/useCounterContext'


const About = () => {
  const {counter} = useCounterContext()
  return (
    <div>
      <h1>About</h1>
      <p>Counter: {counter}</p>
    </div>
  )
}

export default About