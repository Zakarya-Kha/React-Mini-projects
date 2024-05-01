import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import productContext from './components/context/ProductContext'
import Cart from './pages/Cart'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = () => {
    setCart([...cart, products])
    alert('Added product to cart')
  }

  const removeFromCart = (product) => {
   const newCart = cart.filter((item) => item.id!== product.id)
   setCart(newCart)
   alert('Remove from cart')
    
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/cart',
      element: <Cart/>
    }
  ])
  

  return (
    <>
    
    <productContext.Provider value={{products, setProducts, cart, setCart, addToCart, removeFromCart}}>
    <RouterProvider router={router} />
       </productContext.Provider>
       
    </>
  )
}

export default App
