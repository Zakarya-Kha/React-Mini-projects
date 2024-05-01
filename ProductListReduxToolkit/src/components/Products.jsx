import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className='grid grid-cols-4 gap-8 mx-9 '>
                {products.map(product => (
                    <div className='border w-[260px] h-[auto] rounded-xl flex flex-col justify-center items-center' key={product.id}>
                        <h1 className='text-sm'>{product.title}</h1>
                        <div className='image-container'>
                            <img src={product.image} alt=''  className=' h-[80px] hover:scale-105 overflow-hidden transition-all  '/>
                            
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                        <p>$.{product.price}</p>
                        <button className='bg-blue-400 rounded-full px-2 hover:text-xl mt-2 '>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
