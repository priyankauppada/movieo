import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice"
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";

const AddToFavBtn = ({ item, type }) => {
  //console.log(type)
    const dispatch = useDispatch();
    const wishlist = useSelector((state) =>
      type === "movie" ? state.wishlist.movies : state.wishlist.tvShows
    );
    const isInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);
    const handleWishlistToggle = () => {
        if (isInWishlist) {
          dispatch(removeFromWishlist({ type, id: item.id }));
        } else {
          dispatch(addToWishlist({ type, item }));
          console.log("added")
        }
      };
  return (
    <div className="flex">
        <button onClick={handleWishlistToggle} className="text-2xl mt-5 mx-2 font-bold">
            {isInWishlist ? <GoHeartFill/> : <GoHeart/>}
        </button>
        <Link to={"/play/"+type+"/"+item.id}>
      <button className="bg-yellow-600 py-1 px-3 mt-5 mx-2 rounded-lg text-white">
        watch now
       </button> </Link>

    </div>
  )
}

export default AddToFavBtn





