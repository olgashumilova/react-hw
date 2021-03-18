import React from 'react'
import { useState } from 'react';

export const Ex1 = () => {

  const [number, setCount] = useState(0)

  const plus = () => {
    setCount (number + 1)
  }

  const minus = () => {
    setCount (number - 1)
  }

  return (
    <div className="App"> 
      <button onClick={plus}> + </button>
      <span>{number}</span>
      <button onClick={minus}> - </button>  
    </div>
  )

}

export default Ex1;