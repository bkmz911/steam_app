import { create } from "zustand"

interface State{
    filter: string
    setFilter: (filter: string) => void
}

export const useFilterStore = create<State>()((set) => ({
    filter: "По возрастанию",
    setFilter: (filter: string) => set({filter})
}))