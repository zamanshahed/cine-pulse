'use client'
import { useEffect } from 'react'
import MovieCarousel from './components/carousel/MovieCarousel'
import useHomeStore, { getHomeMovies } from './store/HomeStore'

export default function Home() {
  const { homeMovies } = useHomeStore();

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
      Hey mom, i am coding the Cine Pulse
      <MovieCarousel homeMoviesData={homeMovies} />

      <div>
        {
          homeMovies?.map((item, index) => (
            <div key={index}>{item?.original_title ?? "NA"}</div>
          ))
        }
      </div>

      <button
        onClick={getHomeMovies}
      >SPLASH !</button>
    </div>
  )
}
