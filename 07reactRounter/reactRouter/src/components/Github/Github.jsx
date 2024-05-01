import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
   useEffect(() =>{
    fetch('http://api.github.com/users/hiteshchoudhary')
    .then(Response => Response.json())
    .then(data =>{
        setdata(data)
    })
   }, [])
    return (
        <div className='text-3xl p-6 bg-gray-500 text-white'>GitHub Followers: {data.followers} 
        <img className='w-60 h-auto mt-4 rounded-full mx-auto ' src={data.avatar_url} alt="Git picture" />
        </div>
    )
}

export default Github
