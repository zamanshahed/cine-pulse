import axios from 'axios';
import { create } from 'zustand'
import { API_KEY, MOVIE_DETAILS_BASE_URL, SEARCH_BASE_URL } from '../api/Config';
import useUtilityStore from './UtilityStore';

const { setIsLoading } = useUtilityStore.getState();

const useMovieStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

    movieSearchResults: [],
    setMovieSearchResults: (details) => set(() => ({ movieSearchResults: details })),

    movieDetails: {},
    setMovieDetails: (details) => set(() => ({ movieDetails: details })),

    movieDetailsVideos: [],
    setMovieDetailsVideos: (details) => set(() => ({ movieDetailsVideos: details })),

    movieDetailsImages: [],
    setMovieDetailsImages: (details) => set(() => ({ movieDetailsImages: details })),

    movieDetailsReviews: [],
    setMovieDetailsReviews: (details) => set(() => ({ movieDetailsReviews: details })),

    movieDetailsSimilar: [],
    setMovieDetailsSimilar: (details) => set(() => ({ movieDetailsSimilar: details })),

}))

export default useMovieStore


export const getMovieDetails = async (movie_id) => {
    const { setMovieDetails, setMovieDetailsVideos, setMovieDetailsImages, setMovieDetailsReviews, setMovieDetailsSimilar } = useMovieStore.getState();

    try {
        setIsLoading(true);
        const res = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}?api_key=${API_KEY}`);
        const res_videos = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}/videos?api_key=${API_KEY}`);
        const res_images = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}/images?api_key=${API_KEY}`);
        const res_reviews = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}/reviews?api_key=${API_KEY}`);
        const res_related = await axios.get(MOVIE_DETAILS_BASE_URL + `movie/${movie_id}/similar?api_key=${API_KEY}`);

        console.log('movie details response::::', res.data);
        console.log('movie VIDEO response::::', res_videos.data);
        console.log('movie IMAGE response::::', res_images.data);
        console.log('movie REVIEWS response::::', res_reviews.data);
        console.log('movie Related Movies response::::', res_related.data);

        if (res.data) {
            setMovieDetails(res.data);
            setMovieDetailsVideos(res_videos.data.results);
            setMovieDetailsImages(res_images.data.backdrops);
            setMovieDetailsReviews(res_images.data.results);
            setMovieDetailsSimilar(res_related?.data?.results);
        }
        setIsLoading(false);
    } catch (error) {
        console.log(error);
    }

}

export const searchMovies = async (query) => {
    const { setMovieSearchResults } = useMovieStore.getState();

    try {
        setIsLoading(true);
        const res = await axios.get(SEARCH_BASE_URL + query);

        console.log('movie search response::::', res.data);

        if (res.data) {
            setMovieSearchResults(res.data);
        }
        setIsLoading(false);
    } catch (error) {
        console.log(error);
    }

}