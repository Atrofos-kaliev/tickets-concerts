import { ApiInstance } from "./api-instance";

export type ReservationBody = {
  reservation_token?: string | null;
  reservations: { row: number; seat: number }[] | [];
  durationn?: number | null;
};

type ReservationResponse = {
  reserved: boolean;
  reservation_token: string;
  resertved_until: string;
};
export const reservation = async (
  concertId: number,
  showId: number,
  body: ReservationBody
): Promise<{ reservation_token: string; resertved_until: string }> => {
  const res = await ApiInstance.post<ReservationResponse>(
    `/concerts/${concertId}/shows/${showId}/reservation`,
    body
  );
  return {
    reservation_token: res.data.reservation_token,
    resertved_until: res.data.resertved_until,
  };
};