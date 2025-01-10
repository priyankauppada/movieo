import React from 'react'
import { useState, useEffect } from "react";
const FetchDetails = (media, id) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${media}/${id}?api_key=ae898899c4b983fa80f5dcf782a35aff`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          //response.data
          setData(json);
          //console.log(data)
        }
        fetchMovies();
      }, [url])

    
     return { data }
}
  
export default FetchDetails
//