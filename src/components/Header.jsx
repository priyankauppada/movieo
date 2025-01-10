import React, { useEffect, useState }from 'react';
import './index.css'; // Link to your CSS file
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navigation } from '../data/navigation';
import logo from '../assets/logo.png'
import userIcon from '../assets/user.png'
import { IoSearchOutline } from "react-icons/io5";

function Header() {
  const activeClass="px-2 hover:text-[#eba434] text-[#eba434] font-semibold text-lg"
  const inActiveClass="text-white px-2 hover:text-[#eba434]"

  const[display,setDisplay]=useState(false)
  //console.log(display)
  const [searchInput,setSearchInput] = useState("")
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    
    
  }
  useEffect(()=>{
    if (searchInput) {
        navigate(`/search?q=${searchInput}`)
    }else {
        navigate(`/`)
    }
},[searchInput])

 const handleFavoritesClick = () => {
    setDisplay(false);
    navigate("/favorites");
  };
  
  
  return (

  <header className='fixed top-0 w-full h-14 bg-black bg-opacity-50 z-40'>

            <div className='container mx-auto px-3 flex items-center h-full'>
                <Link to={"/"}>
                    <img src={logo} alt='logo' width={120} />
                </Link>

                <nav className='hidden lg:flex items-center gap-1 ml-5'>
                    {
                        navigation.map((nav,index)=>{
                            return(
                                <div>
                                    <NavLink key={nav.label+"header"+index} to={nav.href} 
                                             className={({isActive}) => isActive ? activeClass : inActiveClass }> {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>
                <div className='ml-auto flex items-center gap-5'>
                <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                       
                       <input
                            type='text'
                            placeholder='Search here...'
                            className='bg-transparent text-white font-medium px-4 py-1 outline-0 hidden lg:block'
                            onChange={(e)=>setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <IoSearchOutline className='text-2xl text-white'/>
                        </form>
                    
                    <div onClick={()=>setDisplay(!display)}
                    className='relative w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                        <img
                            src={userIcon}
                            width='w-ful h-full' 
                        />
                    </div>
                    {display ? (
                            <div className="absolute right-8 top-12  bg-white shadow-lg rounded border">
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={handleFavoritesClick}> 
                                    Favorites
                            </button>
                            </div>
                        ):null}
               
                </div> 
                
    </div>
    
  </header>
  );
}
export default Header;