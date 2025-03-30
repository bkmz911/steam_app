import { create } from "zustand";

interface State {
    cost: number;
    setCost: (cost: number) => void;
}

export const useInventoryCostStore = create<State>()((set) => ({
    cost: 0,
    setCost: (cost: number) => set({ cost }),
}));
