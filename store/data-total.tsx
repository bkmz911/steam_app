import { create } from "zustand";

interface State {
    total: number;
    setTotal: (totalPages: number) => void;
}

export const useTotalDataStore = create<State>()((set) => ({
    total: 0,
    setTotal: (total: number) => set({ total }),
}));
