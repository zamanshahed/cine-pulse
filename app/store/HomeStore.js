import { create } from 'zustand'
import { NOW_PLAYING_MOVIES, POPULAR_BASE_URL, TV_POPULAR_BASE_URL, UPCOMING_MOVIES } from '../api/Config';
import axios from 'axios';
import useUtilityStore from './UtilityStore';

const { setIsLoading } = useUtilityStore.getState();

const useHomeStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

    homeMoviesNowPlaying: [],
    setHomeMoviesNowPlaying: (moviesNowPlaying) => set((state) => ({ homeMoviesNowPlaying: moviesNowPlaying })),

    homeMovies: [],
    setHomeMovies: (movies) => set((state) => ({ homeMovies: movies })),

    homeMoviesUpcoming: [],
    setHomeMoviesUpcoming: (movies) => set((state) => ({ homeMoviesUpcoming: movies })),

    homeTvSeries: [],
    setHomeTvSeries: (TvSeries) => set((state) => ({ homeTvSeries: TvSeries })),

    homeTvSeries: [],
    setHomeTvSeries: (TvSeries) => set((state) => ({ homeTvSeries: TvSeries })),
}))
export default useHomeStore;

export const getHomeMovies = async () => {
    const { setHomeMovies, setHomeTvSeries, setHomeMoviesNowPlaying, setHomeMoviesUpcoming } = useHomeStore.getState();
    console.log('bingo');
    try {
        setIsLoading(true);
        const res_now_playing = await axios.get(NOW_PLAYING_MOVIES);
        const res_upcoming = await axios.get(UPCOMING_MOVIES);
        const res = await axios.get(POPULAR_BASE_URL);
        const res_tv = await axios.get(TV_POPULAR_BASE_URL);
        console.log('res: popular base data', res.data);
        if (res.data.results && res_tv.data.results && res_now_playing) {
            let t_array = [];
            let t_array_upcoming = [];
            let t_array_now_playing = [];
            let t_array_tv = [];

            res.data.results.map((data, index) => {
                t_array.push(data);
            })
            res_tv.data.results.map((data, index) => {
                t_array_tv.push(data);
            })
            res_now_playing.data.results.map((data, index) => {
                t_array_now_playing.push(data);
            })
            res_upcoming.data.results.map((data, index) => {
                t_array_upcoming.push(data);
            })

            setHomeMoviesUpcoming(t_array_upcoming);
            setHomeMovies(t_array);
            setHomeMoviesNowPlaying(t_array_now_playing);
            setHomeTvSeries(t_array_tv);
        }
        setIsLoading(false);
    } catch (error) {
        console.log(error);
    }
}