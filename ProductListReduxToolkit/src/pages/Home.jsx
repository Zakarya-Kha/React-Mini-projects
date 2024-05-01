import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='mt-6 px-4'>
      <h1  className='font-bold text-2xl'>Welcome to Zaki Store</h1>
      <h2 className='mt-3 mb-4 px-4 font-bold text-xl'>Products</h2>
      <Products/>
    </div>
  )
}

export default Home
