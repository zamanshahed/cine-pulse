'use client'
import { useState } from 'react';
import { SearchResults } from '../components/search/SearchResults'
import useTvSeriesStore, { searchTvSeries } from '../store/TvSeriesStore';

const AllTvSeries = () => {
  const { tvSeriesSearchResults } = useTvSeriesStore();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText) {
      searchTvSeries(searchText);
    }
  }
  return (
    <div className='relative'>
      <img
        className='blur-sm opacity-70'
        src='/images/projector.jpg'
        alt='theatre'
      />

      <div className="absolute top-[22%] w-full text-center text-xl md:text-5xl uppercase font-extralight text-white drop-shadow">
        t v - s e r i e s
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute top-[40%] left-1/2 -translate-x-1/2 border-2 border-neutral-600 w-full h-[50px] md:h-[80px] rounded-lg backdrop-blur-xl'
      >
        <input
          placeholder='Search for a tv series'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          name=""
          id=""
          className='w-full h-[50px] md:h-[80px] rounded-lg bg-transparent text-white px-4 text-xl md:text-2xl outline-none'
        />

        <div className="flex justify-center pt-5">
          <button
            type='submit'
            onClick={handleSearch}
            className='bg-rose-500 px-5 py-2 md:py-4 md:px-8 rounded-md uppercase font-semibold'
          >Search</button>
        </div>
        <SearchResults data={tvSeriesSearchResults} />
      </form>
    </div>
  )
}

export default AllTvSeries