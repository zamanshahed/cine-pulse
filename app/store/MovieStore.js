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

    movieDetailsImages: [],
    setMovieDetailsImages: (details) => set(() => ({ movieDetailsImages: details })),

    movieDetailsReviews: [],
    setMovieDetailsReviews: (details) => set(() => ({ movieDetailsReviews: details })),

}))

export default useMovieStore

export const getMovieDetails = async (movie_id) => {
    const { setMovieDetails, setMovieDetailsVideos, setMovieDetailsImages, setMovieDetailsReviews } = useMovieStore.getState();

    try {
        const res = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}?api_key=${API_KEY}`);
        const res_videos = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}/videos?api_key=${API_KEY}`);
        const res_images = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}/images?api_key=${API_KEY}`);
        const res_reviews = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}/reviews?api_key=${API_KEY}`);

        console.log('movie details response::::', res.data);
        console.log('movie VIDEO response::::', res_videos.data);
        console.log('movie IMAGE response::::', res_images.data);
        console.log('movie REVIEWS response::::', res_reviews.data);

        if (res.data) {
            setMovieDetails(res.data);
            setMovieDetailsVideos(res_videos.data.results);
            setMovieDetailsImages(res_images.data.backdrops);
            setMovieDetailsReviews(res_images.data.results);
        }

    } catch (error) {
        console.log(error);
    }

}