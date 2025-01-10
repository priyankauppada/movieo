import React, { useState } from 'react'
import FetchDetails from '../components/FetchDetails';
import FetchExtraDetails from '../components/FetchExtraDetails';
import {useParams} from 'react-router-dom';
import Cast from '../components/Cast';
import missingPoster from '../assets/poster.png'
import RelatedMovies from '../components/RelatedMovies';


import { ToastContainer, toast } from 'react-toastify';


import AddToFavBtn from '../components/AddToFavBtn.jsx';


const Detail = () => {
  

 

  const params=useParams()



  
  //console.log(params.explore)
  //console.log(params.id)
  const { data:singleMovieData } = FetchDetails(params.explore,params.id)
  //console.log(singleMovieData)
  const { data :castData} = FetchExtraDetails(params.explore, params.id)
  //console.log(castData)
  const genres = singleMovieData.genres;
  const hours = Math.floor(singleMovieData.runtime / 60);
  const minutes = singleMovieData.runtime % 60;
  const formattedRuntime= `${hours} hr ${minutes} min`;
  const releaseYear = singleMovieData.release_date ? new Date(singleMovieData.release_date).getFullYear() : new Date(singleMovieData.first_air_date).getFullYear();
  
 

  
  
  

  
  return (
    <div className=''>
      <div className="relative rounded-b-md overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src={`https://image.tmdb.org/t/p/original/${singleMovieData.backdrop_path}`}  // Add the background image URL here
        alt="Breaking Bad Background"
      />

      {/* Main Content */}
      <div className="relative z-10 lg:flex-row  md:px-10 px-4 md:py-16 py-4">
        <div className='flex flex-col items-center md:flex-row'>
            <img
              className="w-72 rounded-lg shadow-lg"
              src={singleMovieData.poster_path? `https://image.tmdb.org/t/p/original/${singleMovieData.poster_path}`:missingPoster}  
              alt="Breaking Bad"
            />
            <div className='mt-4 md:ml-20 text-slate-200'>
                <p className='pt-3'>Release-date: {releaseYear} </p>
                  <p className='pt-3'> Runtime: {formattedRuntime ==="NaN hr NaN min"?"NA":formattedRuntime}</p>
                  <p className='text-sm pt-3'>{singleMovieData.overview}</p>
                  <ul className='pt-3'>
                    {genres && genres.length > 0 && (
                      genres.map(genre => (
                        <li className='bg-red-700 text-sm px-3 py-2 rounded-lg inline-block mt-3 mr-3 'key={genre.id}>{genre.name}</li>
                      ))
                    )}
                  </ul>
                 <AddToFavBtn item={singleMovieData} type={params.explore}/>
                 
                  <ToastContainer />
             </div>
        </div>
        <Cast data={castData}/>

          
        
         

      
       
        
      </div>    {/* Main Content */}
    
      
      </div>
      
      <RelatedMovies MovieId={params.id} media={params.explore} path="recommendations"/>
      <RelatedMovies MovieId={params.id} media={params.explore} path="similar"/>

        
   

   
        
       
        
    
    </div>
    
  )
}

export default Detail;
//https://api.themoviedb.org/3/find/{external_id}
//https://api.themoviedb.org/3/movie/{movie_id}/recommendations