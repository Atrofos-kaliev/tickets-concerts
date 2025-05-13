import { Api } from "@/services/api";
import { create } from "zustand";

interface showsStoreProps {
  shows: any[];
  fetchShows: () => void;
}

export const UseShowsStore = create<showsStoreProps>((set) => ({
  shows: [],
  fetchShows: async () => {
    const shows = await Api.shows.getAll();
  },
}));