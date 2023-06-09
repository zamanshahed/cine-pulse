import { create } from 'zustand'
import { SEARCH_BASE_URL_TV } from '../api/Config';
import axios from 'axios';

const useTvSeriesStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

    tvSeriesSearchResults: [],
    setTvSeriesSearchResults: (details) => set(() => ({ tvSeriesSearchResults: details })),

}))

export default useTvSeriesStore;


export const searchTvSeries = async (query) => {
    const { setTvSeriesSearchResults } = useTvSeriesStore.getState();

    try {
        const res = await axios.get(SEARCH_BASE_URL_TV + query);

        console.log('movie search response::::', res.data);

        if (res.data) {
            setTvSeriesSearchResults(res.data);
        }

    } catch (error) {
        console.log(error);
    }

}