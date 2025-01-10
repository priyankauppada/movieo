import React from 'react'
import { Link } from 'react-router-dom';
import Fetching from './FetchHook';



import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BelowBanner= ({apiUrl,title,media}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // For smaller mobile screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
            
          
   
  const { data: movies } =Fetching(media,apiUrl);
  
 return (
    <section className=''>
   
    <h2 className='text-2xl font-bold text-slate-300 pt-5 pl-3'> {title}</h2>
    <div className=''>
    <Slider {...settings}>
        {movies.map( (i)=>{
            const{ id,original_title,poster_path,name,vote_average,overview,popularity}=i;
            return (
            <div>
               <Link to={"/"+media+"/"+id}> <div key={id} className='p-2'> 
             <div className=''>
                 <img className="rounded-lg"
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt="" />
              </div>
            </div>   </Link>

            </div>)
           
        })}
    </Slider>
        
      </div>
     
   
    </section>

  )
}

export default BelowBanner
//https://api.themoviedb.org/3/discover/tv