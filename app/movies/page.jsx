'use client'
import React, { useState } from 'react'
import useMovieStore, { searchMovies } from '../store/MovieStore';
import { SearchResults } from '../components/search/SearchResults';

const AllMovies = () => {
  const [searchText, setSearchText] = useState("");
  const { movieSearchResults } = useMovieStore();

  const handleSearch = () => {
    if (searchText) {
      searchMovies(searchText);
    }
  }
  return (
    <div className='relative'>
      <img
        className='blur-sm opacity-70'
        src='/images/theatre.jpg'
        alt='theatre'
      />

      <div className="absolute top-[22%] w-full text-center text-xl md:text-5xl uppercase font-extralight text-white drop-shadow">M o v i e s</div>
      <div
        className='absolute top-[40%] left-1/2 -translate-x-1/2 border-2 border-neutral-600 w-full h-[50px] md:h-[80px] rounded-lg backdrop-blur-xl'
      >
        <input
          placeholder='Search for a movie'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          name=""
          id=""
          className='w-full h-[50px] md:h-[80px] rounded-lg bg-transparent text-white px-4 text-xl md:text-2xl outline-none'
        />

        <div className="flex justify-center pt-5">
          <button
            onClick={handleSearch}
            className='bg-rose-500 px-5 py-2 rounded-md uppercase font-semibold'
          >Search</button>
        </div>
        <SearchResults
          data={movieSearchResults}
        />
      </div>
    </div>
  )
}

export default AllMovies