import { create } from "zustand";

interface State {
    game: string;
    setGame: (game: string) => void;
}

export const useGamesStore = create<State>()((set) => ({
    game: "cs2",
    setGame: (game: string) => set({ game }),
}));
