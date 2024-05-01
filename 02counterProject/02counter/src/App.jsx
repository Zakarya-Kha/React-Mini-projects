import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(13)

  const addValue = () =>{
    if(counter >= 20){
      counter = 20
    }
    setCounter(counter + 1)
  }
  const removeValue = () => {
    if(counter <= 0){
      counter = 0
    }
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={addValue}>AddValue</button>
      <br />
      <button onClick={removeValue}>removeValue</button>
    </>
  )
}

export default App
