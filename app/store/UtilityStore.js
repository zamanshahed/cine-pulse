import { create } from 'zustand'

const useUtilityStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

    isLoading: false,
    setIsLoading: (value) => set({ isLoading: value }),

}))

export default useUtilityStore;