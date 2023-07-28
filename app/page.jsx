'use client'
import { useEffect } from 'react'
import MovieCarousel from './components/carousel/MovieCarousel'
import useHomeStore, { getHomeMovies } from './store/HomeStore'

export default function Home() {
  const { homeMovies, homeTvSeries, homeMoviesNowPlaying, homeMoviesUpcoming } = useHomeStore();

  useEffect(() => {
    getHomeMovies();
  }, [])

  return (
    <div
      onClick={() => {
        console.log("HOME MOVIES:", homeMovies);
        console.log(typeof (homeMovies));
      }}
    >
      {/* Hey mom, i am coding the Cine Pulse */}
      <div className="text-3xl pb-5 font-extralight">Recent Movies</div>
      <MovieCarousel homeMoviesData={homeMoviesNowPlaying} />

      {/* <div className="text-3xl py-5 font-extralight">Up Coming Movies</div>
      <MovieCarousel homeMoviesData={homeMoviesUpcoming} /> */}

      <div className="text-3xl py-5 font-extralight">Popular Movies of All time</div>
      <MovieCarousel homeMoviesData={homeMovies} />

      <div className="text-3xl py-5 font-extralight">Popular Tv Series of All time</div>
      <MovieCarousel homeMoviesData={homeTvSeries} isTvSeries />
      <div className="pb-10"></div>
    </div>
  )
}
