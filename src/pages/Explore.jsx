import React, { useState } from 'react'
import Fetching from '../components/FetchHook'
import { Link, useParams } from 'react-router-dom'
import missingPoster from '../assets/poster.png'
const Explore = () => {
  const params= useParams()
  console.log(params)
  const result=[]
   const { data :tvs } = Fetching("discover","tv");
   const { data :movies } = Fetching("discover","movie");
   if(params.explore==="tv"){
    for (let i = 0; i < tvs.length; i++) {
      result.push(tvs[i]);
    }
    //console.log(result)
  }else{ 
    for (let i = 0; i < movies.length; i++) {
      result.push(movies[i]);
    }
  }
    
  
  return (
    
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 p-5 pt-20 '>
      {result.map( (i)=>{
              const{ id,original_title,poster_path,name,vote_average,overview,popularity}=i;
              return (
              <div key={id} className=''> 
                 <Link to={"/"+params.explore+"/"+id}><img className="rounded-md"
                      src={poster_path? `https://image.tmdb.org/t/p/original/${poster_path}`: missingPoster}
                      alt="" /> </Link>
              </div>)
                
              })
         
    
    }
    </div>

  )
}

export default Explore;