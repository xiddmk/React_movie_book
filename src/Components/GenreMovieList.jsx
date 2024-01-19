// eslint-disable-next-line no-unused-vars
import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'


function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.slice(0, 5).map((item, index) => (
        <div key={index} className='scrollbar p-8 px-8 md:px-16'>
          <h2 className=' text-[20px] text-white font-bold'>{item.name}</h2>
          <MovieList genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList