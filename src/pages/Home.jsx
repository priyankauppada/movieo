import React from 'react'
import BannerHome from '../components/BannerHome'
import BelowBanner from '../components/BelowBanner'
const Home = () => {

  return (
    <div>
     
       <BannerHome/>
       <BelowBanner media="movie" apiUrl="now_playing" title="Now Playing"/>
       <BelowBanner media="tv"apiUrl="popular" title="Popular on Tv"/>
       {/* <BelowBanner apiUrl="trending/all/week" title="Trending on Tmdb"/> */}
       <BelowBanner media="movie" apiUrl="popular" title="Popular Movies"/>
       <BelowBanner media="tv" apiUrl="on_the_air" title="On The Air"/>
       <BelowBanner media="movie" apiUrl="top_rated" title="Top Rated Movies"/>
       <BelowBanner media="tv" apiUrl="airing_today" title="Airing Today"/>
      
       

      </div>
  )
}

export default Home