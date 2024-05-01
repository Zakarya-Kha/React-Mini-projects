import React, {useContext} from 'react'
import productContext from '../context/productContaxt'

const Cart = () => {
  const {cart,removeFromCart} = useContext(productContext)
  return (
    <div className='grid grid-cols-3   mx-auto  w-[70%]'>
    {
      cart.length== "" ? (
        <h1>Nothing to show</h1>
      ):(
        cart.map((product) => (
          <div key={product.id} className='border my-4  w-[80%] overflow-hidden bg-gray-300  shadow-md'>
    <img src={product.thumbnail} alt="" className='hover:scale-105 transition-all w-full h-[200px] object-cover '/>
   <div className='px-2 py-1'>
   <h1 className='font-bold'>{product.title}</h1>
    <p className='text-sm'>{product.description}</p>
    <div className=' flex justify-between px-1 text-sm'>
      <span className='font-bold'>Price: ${product.price}</span>
      <button 
      
      onClick={()=> removeFromCart(product)}
      className='font-bold bg-gray-700 rounded-full px-1 text-white hover:text-red-500'>Remove to cart</button>
    </div>
   </div>
  </div>
      )
       
        ))
    }
    
   </div>
  )
}

export default Cart
