import React from 'react';
import user from '../assets/user.png'
const Cast = ({ data }) => {
    //console.log(data)
    const casts=data?.cast || []
  
  return (
    casts.length? (
    <div className="">
      <h2 className="text-2xl font-bold text-slate-200 mt-5 mb-4">Cast Profiles</h2>
      <div className="flex flex-wrap gap-6">
      {
        casts.slice(0,15).map((i,index)=> (
            <div key={index} className='flex flex-col items-center '>
                <img src={i.profile_path ? `https://image.tmdb.org/t/p/w200${i.profile_path}`:user}
                                className='w-20 h-20 object-cover rounded-full'
                              />
                <p className='text-white text-[13px]'>{i.name}</p>
            </div>     


      )
            
            
          
        
      )}

      </div>
    </div>) : null
  )
};

export default Cast;
