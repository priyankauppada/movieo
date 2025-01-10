import { useState, useEffect } from "react";
const FetchData = (media,apiPath) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${media}/${apiPath}?api_key=ae898899c4b983fa80f5dcf782a35aff`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
          //console.log(data)
        }
        fetchMovies();
      }, [url])
    
    
     return { data }
}
  


export default FetchData