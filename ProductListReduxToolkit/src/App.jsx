import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/cart' element={<Cart/>} ></Route>
    </Routes>
    </BrowserRouter>
    
      </>
  )
}

export default App
