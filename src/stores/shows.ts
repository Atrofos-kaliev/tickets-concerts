import { Api } from "@/services/api";
import { create } from "zustand";

interface showsStoreProps {
  shows: any[];
  isLoading: boolean;
  artists: string[];
  locations: string[];

  fetchShows: () => Promise<void>;
}

export const UseShowsStore = create<showsStoreProps>((set) => ({
  shows: [],
  isLoading: false,
  artists: [],
  locations: [],

  fetchShows: async () => {
    set({ isLoading: true });
    const shows = await Api.shows.getAll();
    set({ shows });
    set({ artists: [...new Set(shows.map((show: any) => show.artist))] });
    set({ locations: [...new Set(shows.map((show: any) => show.location))] });
    set({ isLoading: false });
  },
}));