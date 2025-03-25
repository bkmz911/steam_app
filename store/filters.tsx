import { ReactNode } from "react"
import { create } from "zustand"

interface State{
    filter: ReactNode | null
    setFilter: (filter: ReactNode | null) => void
}

export const useFilterStore = create<State>()((set) => ({
    filter: "По возрастанию",
    setFilter: (filter: ReactNode | null) => set({filter})
}))