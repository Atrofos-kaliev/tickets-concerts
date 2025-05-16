//@types/seats.ts

export interface SeatType {
    id: string;
    number: number;
    status: 'available' | 'selected' | 'booked';
}

export interface RowType {
    id: string;
    name: string;
    seats: SeatType[];
}

export interface SeatingLayoutType {
    rows: RowType[];
}