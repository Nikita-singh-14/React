import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userId} = useParams()
  return (
    <div className='m-6 text-2xl text-orange-700 justify-center items-center'>User: {userId}</div>
  )
}

export default User