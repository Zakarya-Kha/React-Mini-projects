import React, { useState ,useContext} from 'react'
import { Link } from 'react-router-dom'
import productContext from '../context/productContaxt'

const Navbar = () => {

  const [searchValue, setSearchValue] = useState("")

  const {setProducts, cart} = useContext(productContext)

  const searchProducts = async() => {
    const response = await fetch(`https://dummyjson.com/products/search?q= ${searchValue}`)
     
    const data = await response.json()
    console.log(data)
    setProducts(data.products)
  }


  return (
    <div>
      <nav className='flex justify-around shadow-md py-3'>
        <h1 className='text-2xl font-bold'>Project1</h1>
        <div>
            <input 
            onChange={(e)=> setSearchValue(e.target.value)}
            type="search" placeholder='Search here' className='w-[35vw] border outline-none px-2 p-1 rounded-full hover:border-purple-600' />
            <button
            onClick={searchProducts}
             className='bg-gray-500 text-white ml-2 px-2 rounded-full hover:bg-purple-600'>Search</button>
        </div>
        <ul className='flex gap-3 font-bold '>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart">
                Cart { !cart.length ? "" : `(${cart.length})` }
                  </Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
