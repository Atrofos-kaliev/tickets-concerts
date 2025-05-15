import { Api } from "@/services/api";
import { ReservationBody } from "@/services/reservation";
import { AxiosError } from "axios";
import { create } from "zustand";
interface ReservationStoreProps {
  selectedSeats: { row: number; seat: number }[];
  isLoading: boolean;
  reservationToken: string | null;
  setSelectedSeats: (seats: { row: number; seat: number }[]) => void;
  addSelectedSeat: (row: number, seat: number) => void;
  removeSelectedSeat: (row: number, seat: number) => void;
  reservation: (concertId: number, showId: number) => Promise<void>;
}

interface ErrorResponseNotExist {
  error: string;
}
interface ErrorResponseValidation {
  error: String;
  fields: object;
}

export const useReservationStore = create<ReservationStoreProps>(
  (set, get) => ({
    selectedSeats: [],
    isLoading: false,
    reservationToken: null,
    setSelectedSeats: (seats: { row: number; seat: number }[]) =>
      set({ selectedSeats: seats }),
    addSelectedSeat: (row: number, seat: number) =>
      set((state) => ({
        selectedSeats: [...state.selectedSeats, { row, seat }],
      })),
    removeSelectedSeat: (row: number, seat: number) =>
      set((state) => ({
        selectedSeats: state.selectedSeats.filter(
          (s) => s.row !== row || s.seat !== seat
        ),
      })),
    reservation: async (concertId: number, showId: number) => {
      try {
        set({ isLoading: true });
        const body: ReservationBody = {
          reservations: get().selectedSeats,
        };
        if (get().reservationToken) {
          body.reservation_token = get().reservationToken;
        }
        const res = await Api.reservation.reservation(concertId, showId, body);
        set({
          reservationToken: res.reservation_token,
        });
      } catch (error) {
        console.error("Error reserving seats:", error);
        if (error instanceof AxiosError) {
          if (error.code !== "422") {
            const axiosError = error as AxiosError<ErrorResponseNotExist>;
            throw axiosError.response?.data.error;
          }
          const axiosError = error as AxiosError<ErrorResponseNotExist>;
          throw axiosError.response?.data;
        }
        throw error;
      } finally {
        set({ isLoading: false });
      }
    },
  })
);