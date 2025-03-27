import { create } from "zustand";

interface State {
    sorting: string;
    setSorting: (sorting: string) => void;
}

export const useSortingStore = create<State>()((set) => ({
    sorting: "По возрастанию",
    setSorting: (sorting: string) => set({ sorting }),
}));
