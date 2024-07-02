import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    } else {
      alert('Counter exceeds its limit !');
    }
  }

  const decrementCounter = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    } else {
      alert('Counter can not be negative numbers !');
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter {counter}</h1>
      <br />

      <button onClick={incrementCounter}>Increment Counter</button> <span> | </span>
      <button onClick={decrementCounter}>Decrement Counter</button>
    </>
  )
}

export default App
