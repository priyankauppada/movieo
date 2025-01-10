import React, {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams, Link } from "react-router-dom";
import missingPoster from '../assets/poster.png'
const Search = () => {
  //const location=useLocation()
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  
  const [data,setData]=useState([])
  useEffect(() => {
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=ae898899c4b983fa80f5dcf782a35aff`);
      const json = await response.json()
      setData(json.results);
      //console.log(json.results);
    }
    fetchMovie();
  }, [searchTerm]);
  return (
    <div className='p-10 pt-20'>
        <h3 className='text-2xl font-medium text-slate-300 pb-8'> Search results for "{searchTerm}" </h3>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6'>
      {data.map( (i)=>{
              const{ id,original_title,poster_path,name,vote_average,overview,popularity,backdrop_path}=i;
              return (
              <div key={id} className=' border-slate border-2 rounded-md'> 
                 <Link to={`/movie/${id}`}> <img className="rounded-md h-64"
                      src={poster_path? `https://image.tmdb.org/t/p/original/${poster_path}`:missingPoster}
                      alt="no image"/> </Link>
              </div>)
                
              })
         
    
    }
    </div>
    </div>
  )
}

export default Search