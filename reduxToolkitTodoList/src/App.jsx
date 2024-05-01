import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-600'>learn about redux toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
