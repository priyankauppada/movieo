import React, { useState, useEffect } from "react";
import missingPoster from '../assets/poster.png'

import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/wishlistSlice";
import { Link } from "react-router-dom";
import { original } from "@reduxjs/toolkit";


const FavoritesPage = () => {
  const [activeTab, setActiveTab] = useState("movies"); // Default tab is 'movies'

  const dispatch = useDispatch();
  const {movies, tvShows}=useSelector(state=>state.wishlist)
  console.log(tvShows)
  return (
    <div className="mt-16 container mx-auto p-2">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "movies"
              ? "text-white bg-purple-500"
              : "text-gray-500 bg-gray-200"
          } rounded-lg`}
          onClick={() => setActiveTab("movies")}
        >
          Movies
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "tv"
              ? "text-white bg-purple-500"
              : "text-gray-500 bg-gray-200"
          } rounded-lg`}
          onClick={() => setActiveTab("tv")}
        >
          TV Shows
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "movies" ? (
          <div>
            <h2 className="text-xl font-bold mb-4 ml-8">My Favorite Movies</h2>
            {movies.length > 0 ? (
              <ul className="space-y-5">
                {movies.map((movie) => (
                  <li
                    key={movie.id}
                    className="flex items-center shadow-2xl p-5 mb-8 rounded-lg">
                  
                    <Link to={"/movie/"+movie.id}> 
                        <div className="w-32">
                        <img
                          src={movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`:missingPoster}  
                          alt={movie.title}
                          className="rounded-lg"
                        />

                        </div>
                    </Link>
                    <div className="ml-8 md:ml-16">
                      <h3 className="text-lg font-bold">{movie.title}</h3>
                      <span className="block text-purple-500 text-sm ">
                         {movie.release_date}
                      </span>
                      <p className="text-slate-300 mt-2 text-sm mb-3">
                        <span className="block lg:hidden ">  {movie.overview.slice(0, 50)}..</span>
                        <span className="hidden lg:block text-sm">{movie.overview} </span>
                      </p>
                     <span className={`${movie.vote_average >= 7 ? "bg-green-500": "bg-yellow-500"}
                           text-white pl-[6px] pr-[4px] py-[9px] rounded-full text-sm font-semibold`}>
                               {movie.vote_average.toFixed(1)* 10}% 
                    </span>
                    <button onClick={()=> dispatch(removeFromWishlist({ type:"movie", id: movie.id }))}
                            className="bg-red-700 px-3 py-2 ml-5 rounded-lg text-sm"> Remove
                    </button>
        
   

                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No favorite movies added yet.</p>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4 ml-8">My Favorite TV Shows</h2>
            {tvShows.length > 0 ? (
              <ul className="space-y-5">
                {tvShows.map((show) => (
                  <li
                    key={show.id}
                    className="flex items-center shadow-xl p-5 mb-8  rounded-lg">
                    <Link to={"/tv/"+show.id}>
                    <div className="w-32">
                    <img
                        src={show.poster_path? `https://image.tmdb.org/t/p/w500/${show.poster_path}`:missingPoster}  
                        alt={show.title}
                        className="rounded-lg"
                      /> 

                    </div>
                      
                    </Link>
                    <div className="ml-8 md:ml-16">
                      <h3 className="text-lg font-bold">{show.name}</h3>
                      <span className="block text-purple-500 text-sm ">
                        {show.first_air_date}
                      </span>
                      <p className="text-slate-300 mt-2 mb-3 text-sm">
                        <span className="block lg:hidden"> {show.original_name} {show.overview.slice(0, 50)}...</span>
                        <span className="hidden lg:block text-sm">{show.overview}{show.original_name}</span>
                      </p>
                      <span className={`${show.vote_average >= 7 ? "bg-green-500": "bg-yellow-500"}
                           text-white pl-[6px] pr-[4px] py-[9px] rounded-full text-sm font-semibold`}>
                               {show.vote_average.toFixed(1)* 10}% 
                    </span>
                    <button onClick={()=> dispatch(removeFromWishlist({ type:"tv", id: show.id }))}
                            className="bg-red-700 px-3 py-2 ml-5 text-sm rounded-lg"> Remove
                    </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No favorite TV shows added yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
