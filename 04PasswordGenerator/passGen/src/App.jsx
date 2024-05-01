import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [lenght, setLenght] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')


  // useCallBack 

  let passwordGenerator = useCallback( () => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += '123456789'
    if(charAllowed) str += 'éîœüñ@#$&*'

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor( Math.random() * str.length +1)
      pass += str.charAt(char)
      
    }


    setPassword(pass)
  }, [lenght,numberAllowed,charAllowed,setPassword])

  const passwordRef = useRef(null)
  
  const copyPasswordToClipbord = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  //useEffect

  useEffect( () => {
    passwordGenerator()
  }, [lenght,numberAllowed,charAllowed,passwordGenerator])



  return (
    <>
    <div className='bg-gray-700 max-w-lg flex justify-center p-6 flex-col mt-4 mx-auto rounded-md'>
      <h1 className='text-white text-center text-4xl '>Password Generator</h1>

      <div className='flex mt-3'>
        <input 
        type="text"
        value={password}
        className='w-full p-2 outline-none '
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipbord}
        className='bg-blue-700 text-white text-xl hover:bg-blue-400 hover:text-black px-2 rounded-r-md'>copy</button>
      </div>
      <div className='flex  mt-3'>
        <div className='mr-4'>
        <input 
        type="range"
        min={8}
        max={20}
        value={lenght}
        className='cursor-pointer mr-2'
        onChange={ (e) =>{
          setLenght(e.target.value)
        }}
         />
         <label className='text-white'>lenght: {lenght}</label>
         </div>

         <div className='mr-4'>
          <input 
          type="checkBox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}
           />
           <label className='text-white' htmlFor="numberInput">Numbers</label>
           </div>

           <div>
            <input 
            type="checkBox" 
            id="charInput" 
            value={charAllowed}
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}
            />
            <label className='text-white' htmlFor="charInput">Characters</label>
         </div>
      </div>
      </div>
      
     
      </>
  )
}

export default App
