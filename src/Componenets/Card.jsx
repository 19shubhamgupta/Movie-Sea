import React from 'react'

const Card = ({movie}) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className=' w-40 bg-slate-800 md:w-[250px] rounded-xl flex  justify-center m-2 md:m-5  flex-col gap-0 '>
      <img src={movie.backdrop_path ?`${imageBaseUrl}${movie.backdrop_path}`:`/noMovie.png`} alt={movie.title} className='object-cover object-center h-[150px] w-full p-2 rounded-xl'/>
      <div className=' flex items-center justify-evenly md:justify-between min-h-[20%] w-full py-3 px-5 gap-[30px]'>
        <div className='text-white '>
            &#11088;4.8
        </div>
        <div className="text-white  ">
            {movie.title}
        </div>
      </div>
    </div>
  )
}

export default Card
