import React , {useState, useContext} from 'react'
import productContext from './context/ProductContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {setProducts, cart} = useContext(productContext)

  const [searchValue, setSearchValue] = useState("")

  const searchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
    const data = await response.json();
    setProducts(data.products)
  }


  return (
    <div className='flex justify-around p-3 shadow-md'>
      <div>
        {/* logo */}
        <h1>Products</h1>
      </div>
      <div className='space-x-4'>
        {/* search bar */}
        <input
        onChange={(e) => setSearchValue(e.target.value)}
         className='outline-none border hover:border-blue-400 w-[30vw] py-1 px-1 rounded-full' type="search" placeholder="Search here..." />
        <button
        onClick={searchProducts}
         className='bg-blue-400 text-white rounded-full px-2 hover:bg-blue-500 hover:text-xl'>Search</button>
      </div>
      <div>
        {/* menus */}
        <ul className='flex gap-5'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart">
                  Cart { !cart.length ? "" : `(${cart.length})` }
                  </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
