import React, { useState } from 'react'

const App = () => {
  //state
  const [ count, setCount ] = useState(0);
  // func
  const increment = () => {
    setCount( prev => prev + 1 )
  } 
  const decrement = () => {
    setCount( prev => prev - 1 )
  } 
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <p style={{
        color: "red"
      }}>Count - { count}</p>
    </div>
  )
}

export default App