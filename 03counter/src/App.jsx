import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(3)

  // let counter = 15;

  const addValue = () => {
    setCount((counter) => counter + 1);
    setCount((counter) => counter + 1);
    setCount((counter) => counter + 1);
    setCount((counter) => counter + 1);
    console.log(counter);
  }

  const removeValue = () => {
    setCount(counter - 1)
  }

  return (
    <>
      <h1> day {counter} with react</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add value</button> {' '}
      <button onClick={removeValue}>remove value </button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
