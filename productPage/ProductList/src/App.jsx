import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import productContext from './context/productContaxt';


function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const addToCart = ()=>{
    setCart([...cart, products])
  }
  const removeFromCart = ()=>{
    setCart(cart.filter(item=>item.id!==products.id))
  }

  return (
    <productContext.Provider value={{products,setProducts, cart, addToCart,removeFromCart}} >
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </productContext.Provider>
  );
}

export default App;
