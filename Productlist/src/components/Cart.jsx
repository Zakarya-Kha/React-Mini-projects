import React, {useEffect , useContext} from 'react'
import productContext from './context/ProductContext'

const Cart = () => {


   const {products,setProducts, addToCart} = useContext(productContext)

    useEffect(() => {
     getProducts();
    }, [])

    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
    }
    


  return (
    <div className='flex flex-wrap gap-5 mx-auto my-3'>
   {products.map((product) => (

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
        onClick={() => addToCart(product)}
         className='bg-blue-500 px-2 text-white hover:text-xl rounded-full'>Add to cart</button>
      </div>
        </div>
    </div>
       ))} 
    </div>
  )
}

export default Cart
