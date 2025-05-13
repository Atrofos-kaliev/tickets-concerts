import { Show } from "@/@types/show";
import { apiInstance } from "./api-instance";

type ConcertApiResponse = {
  id: number;
  artist: string;
  location: {
    id: number;
    name: string;
  };
  shows: {
    id: number;
    start: string;
    end: string;
  }[];
};

export const getAll = async (): Promise<Show[]> => {
  const res = await apiInstance.get<{ concerts: ConcertApiResponse[] }>("/concerts");
  const shows: Show[] = res.data.concerts.flatMap((concert) =>
    concert.shows.map((show) => ({
      id: show.id,
      artist: concert.artist,
      location: concert.location.name,
      start: show.start,
      end: show.end,
      date: show.start.split("T")[0],
      concertId: concert.id,
    }))
  );
  return shows;
};