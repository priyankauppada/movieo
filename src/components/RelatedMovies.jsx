import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const RelatedMovies = ({MovieId:id, path, media}) => {
  
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/${media}/${id}/${path}?api_key=ae898899c4b983fa80f5dcf782a35aff`
          );
          const data = await response.json();
          setMovies(data.results || []);
          //console.log(movies)
        } catch (err) {
          setError('Failed to fetch recommended movies.');
        }
      };
  
      if (id) fetchMovies();
    }, [id]);
    

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
   
  return (
 
       <div className="p-4 ">
      <h2 className="capitalize text-2xl font-bold mb-4">{path==="similar"? "similar": "Recommended"} 
        {media==="tv"? " Shows" : " Movies"}
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      {movies.length > 0 ? (
        <Slider {...settings}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="p-2 flex  items-center  "
            > 
             <Link to={"/movie/"+movie.id}> <div className=' flex flex-col  items-center'>
             <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://via.placeholder.com/500'
                }
                alt={movie.title || 'Unknown'}
                className="w-48 h-auto rounded-lg mb-2"
              /> 
            </div> </Link>
             
              
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-slate-300">No {path==="similar"? "Similars": "Recommendations"}  available.</p>
      )}
    </div>
  );
}

export default RelatedMovies