import React from 'react'
import {  useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams() 
    return (
        <div className='bg-orange-700 text-3xl text-white p-4'>user: {userId}</div>
    )
}

export default User
