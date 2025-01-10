import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Player = () => {
  const params=useParams()
  console.log(params)
   const [data,setData]=useState([])
  
    const fetchData=async()=>{
      const response=await fetch(`https://api.themoviedb.org/3/${params.play}/${params.id}/videos?api_key=ae898899c4b983fa80f5dcf782a35aff`);
      const data=await response.json()
      console.log(data.results[0])
      setData(data.results[0])
     
    }
    useEffect(() => { fetchData()},[])
  return (
    <div className='h-screen flex flex-col justify-center items-center mt-12'>
        {
            data? (
                <iframe src={`https://youtube.com/embed/${data.key}`}
                height="90%" width="90%" title="Iframe Example"
               frameBorder={0} allowFullScreen className=''>
             </iframe>
         
            ):<div><h1> Trailer not available </h1></div>
        }
        
       

    </div>
  )
}

export default Player