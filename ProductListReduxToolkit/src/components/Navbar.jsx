import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between shadow-xl px-5 py-1'>
      <span className='font-bold text-xl text-blue-600 '>Zaki<span className='font-bold text-xl text-red-600'>store</span></span>
      
      <div>
        <ul >
            <li className='flex gap-2 font-bold'>
                <Link to='/' >Home</Link>
                <Link to='/Cart' >Cart</Link>
            </li>
        </ul>
      </div>
      <span>Cart Items: 0</span>
    </div>
  )
}

export default Navbar
