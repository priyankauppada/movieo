import {useState,useEffect} from 'react';
import './index.css'; // Link to your CSS file

function MovieList({path,title}) {

  const [moviesData,setMoviesData]=useState([])

  const fetchData=async()=>{
    const response=await fetch(`https://api.themoviedb.org/3/movie/${path}?api_key=ae898899c4b983fa80f5dcf782a35aff`);
    const data=await response.json()
    //console.log(data.results)
    setMoviesData(data.results)
   
  }
  useEffect(() => { fetchData()},[])
  
  return (
    <div className="MovieList">
      <h1>{title}</h1>
      <ul>
        {moviesData.map( (i)=>{
            const{ id,original_title,poster_path,vote_average}=i;
    
            return (
              <li key={id}> 
                  <img className="poster-img"
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt="" />
                  <div>{original_title} </div>
                  <div> {vote_average} </div> 

              </li>)
  
          })
        }
      </ul>
    </div>
  );
}
export default MovieList;