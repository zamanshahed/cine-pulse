import { create } from 'zustand'
import { POPULAR_BASE_URL } from '../api/Config';
import axios from 'axios';
import useUtilityStore from './UtilityStore';

const { setIsLoading } = useUtilityStore.getState();

const useHomeStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

    homeMovies: [],
    setHomeMovies: (movies) => set((state) => ({ homeMovies: movies })),
}))
export default useHomeStore;

export const getHomeMovies = async () => {
    const { setHomeMovies } = useHomeStore.getState();
    console.log('bingo');
    try {
        setIsLoading(true);
        const res = await axios.get(POPULAR_BASE_URL);
        console.log('res: popular base data', res.data);
        if (res.data.results) {
            let t_array = [];
            res.data.results.map((data, index) => {
                t_array.push(data);
            })

            setHomeMovies(t_array);
        }
        setIsLoading(false);
    } catch (error) {
        console.log(error);
    }
}