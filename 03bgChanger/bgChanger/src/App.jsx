import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor : color}}
    >
      <div className='fixed flex flex-wrap justify-center inset-x-0 gap-3 bottom-12  bg-white w-max items-center mx-auto rounded-lg px-3 py-2'>
        <button className='bg-red-600 text-white px-3 rounded-lg  '
        onClick={ () => setColor('red') }
        >Red</button>

<button className='bg-green-600 text-white px-3 rounded-lg '
        onClick={ () => setColor('green') }
        >Green</button>

<button className='bg-yellow-600 text-white px-3 rounded-lg '
        onClick={ () => setColor('yellow') }
        >Yellow</button>

<button className='bg-black text-white px-3 rounded-lg '
        onClick={ () => setColor('black') }
        >Black</button>

<button className='bg-orange-600 text-white px-3 rounded-lg '
        onClick={ () => setColor('orange') }
        >Orange</button>

<button className='bg-black text-white px-3 rounded-lg '
        onClick={ () => setColor('white') }
        >White</button>

<button className='bg-blue-600 text-white px-3 rounded-lg '
        onClick={ () => setColor('blue') }
        >Blue</button>
      </div>

    </div>
  )
}

export default App
