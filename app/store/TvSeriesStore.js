import { create } from 'zustand'
import { API_KEY, API_URL, SEARCH_BASE_URL_TV } from '../api/Config';
import axios from 'axios';
import useUtilityStore from './UtilityStore';

const { setIsLoading } = useUtilityStore.getState();

const useTvSeriesStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

    tvSeriesSearchResults: [],
    setTvSeriesSearchResults: (details) => set(() => ({ tvSeriesSearchResults: details })),

    tvSeriesDetails: {},
    setTvSeriesDetails: (details) => set(() => ({ tvSeriesDetails: details })),

    tvSeriesGallery: {},
    setTvSeriesGallery: (details) => set(() => ({ tvSeriesGallery: details })),

    tvSeriesVideos: [],
    setTvSeriesVideos: (details) => set(() => ({ tvSeriesVideos: details })),

}))

export default useTvSeriesStore;



export const getTvSeriesDetails = async (tv_id) => {
    const { setTvSeriesDetails, setTvSeriesGallery, setTvSeriesVideos } = useTvSeriesStore.getState();

    try {
        setIsLoading(true);
        const res = await axios.get(API_URL + `tv/${tv_id}?api_key=${API_KEY}`);
        const res_images = await axios.get(API_URL + `tv/${tv_id}/images?api_key=${API_KEY}`);
        const res_videos = await axios.get(API_URL + `tv/${tv_id}/videos?api_key=${API_KEY}`);

        console.log('tv series details response::::', res.data);
        console.log('tv series IMAGE response::::', res_images.data);
        console.log('tv series VIDEO response::::', res_videos.data);

        if (res.data) {
            setTvSeriesDetails(res.data);
            setTvSeriesGallery(res_images.data.backdrops);
            setTvSeriesVideos(res_videos.data.results);
        }
        setIsLoading(false);

    } catch (error) {
        console.log(error);
    }

}


export const searchTvSeries = async (query) => {
    const { setTvSeriesSearchResults } = useTvSeriesStore.getState();

    try {
        setIsLoading(true);
        const res = await axios.get(SEARCH_BASE_URL_TV + query);

        console.log('movie search response::::', res.data);

        if (res.data) {
            setTvSeriesSearchResults(res.data);
        }

        setIsLoading(false);
    } catch (error) {
        console.log(error);
    }

}