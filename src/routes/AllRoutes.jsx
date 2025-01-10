import {Routes,Route} from "react-router-dom";
import MovieList from "../pages/MovieList.jsx";


import Home from "../pages/Home.jsx";
import Explore from '../pages/Explore.jsx'
import Detail from "../pages/Detail.jsx";
import Search from "../pages/Search.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

import FavoritesPage from "../pages/FavoritesPage.jsx";
import Player from "../pages/Player.jsx";
function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/favorites" element={<FavoritesPage/>} />
            <Route path="/:explore" element={<Explore/>} />
            <Route path="/:explore/:id" element={<Detail/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/play/:play/:id" element={<Player/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
      
    </>
  );
}
export default AllRoutes;