import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()
    // const [data, setData] = useState('')
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Nikita-singh-14')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='flex items-center justify-center m-5 gap-4'>
        <img src={data.avatar_url} alt=""  className='w-56 h-56'/>
        <h2>Followers: {data.followers}</h2>
    </div>
  )
}

export default Github



export const GithubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/Nikita-singh-14')
  return response
}