import axios from 'axios';
import { create } from 'zustand'
import { API_KEY, MOVIE_DETAILS_BASE_URL } from '../api/Config';

const useMovieStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

    movieDetails: {},
    setMovieDetails: (details) => set(() => ({ movieDetails: details })),

    movieDetailsVideos: [],
    setMovieDetailsVideos: (details) => set(() => ({ movieDetailsVideos: details })),

}))

export default useMovieStore

export const getMovieDetails = async (movie_id) => {
    const { setMovieDetails } = useMovieStore.getState();

    try {
        const res = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}?api_key=${API_KEY}`);
        const res_videos = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}/videos?api_key=${API_KEY}`);

        console.log('movie details response::::', res.data);
        console.log('movie VIDEO response::::', res_videos.data);

    } catch (error) {
        console.log(error);
    }

}