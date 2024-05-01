import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
import productContext from '../components/context/ProductContext'

const Cart = () => {
  const {cart, removeFromCart} = useContext(productContext)

  

  return (
    <div>
        <Navbar/>
    
        <div className='flex flex-wrap gap-5 mx-auto my-3'>
   {cart.length == "" ? (
   <h1>Nothing to show</h1>
   ) : (
   cart.map((product) => (

    <div key={product.id} className='w-[300px] h-[400px] border shadow-md rounded-md m-3 overflow-hidden '>
      <div>
        <img className=' w-full h-[200px] hover:scale-105 transition-all' src={product.thumbnail} alt="" />
      </div>
      <div className='px-2 mt-4'>
        <h1 className='uppercase font-bold'>{product.title}</h1>
        <p className='text-sm text-gray-600'>{product.description}</p>
        <div className='flex justify-between px-3 py-2'>
        <span className='text-xl font-bold'>{product.price}</span>
        <button
        onClick={() => removeFromCart(product)}
         className='bg-blue-500 px-2 text-white hover:text-xl rounded-full'>Remove to cart</button>
      </div>
        </div>
    </div>
   )
       ))} 
    </div>

    </div>
  )
}

export default Cart
