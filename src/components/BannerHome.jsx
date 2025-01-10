import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import FetchData from '../fetchHook/FetchData';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from '../features/moviesSlice';

const BannerHome = () => {
  const dispatch=useDispatch()
  const { movies, status, error,name } = useSelector((state) => state.movies);


  
  useEffect(() => {
    dispatch(fetchMovies({ media: "movie", category: "popular" })
    );
  }, [dispatch]);
 

  //console.log(movies)
  //console.log(name)
  
  if (status === "loading") return <p className="text-center mt-4">Loading...</p>;
  if (status === "failed") return <p className="text-center mt-4 text-red-600">{error}</p>;
 

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "ease-out",
        arrows:true
      };
 
 
  return (
    <section className=''>
   
    
    <div className=''>
    <Slider {...settings}>
        {movies.map( (i)=>{
            const{ id,original_title,poster_path,name,vote_average,overview,popularity}=i;
            return (
              <div key={id} className='relative '> 
              
                 <div className='h-[550px]'>
                 <img className=""
                      
                      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  
                      alt="" /> 
                 </div>
                 <div className='absolute top-2 w-full h-[550px] bg-gradient-to-t from-neutral-900 to-transparent'></div>
                  
                  <div className='absolute bottom-10 p-10 w-[500px]'>
                    <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl '>{original_title} {name}</h2>
                    <p className='text-ellipsis line-clamp-3 my-2'>{overview}</p>
                    <div className='flex items-center gap-4'>
                        <p>Rating : { Number(vote_average).toFixed(1) }+</p> <span>|</span>
                        <p>Views : { Number(popularity).toFixed(0) }</p>
                    </div>
                    <Link to={"/"}>
                        <button  className='bg-neutral-500  text-white px-4 py-2 font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105'>
                             Play Now
                        </button>
                    </Link>
                  </div>
                  
              </div>)
              
            })
            
          
        }
    </Slider>
        
      </div>
     
   
    </section>

  )
}

export default BannerHome
