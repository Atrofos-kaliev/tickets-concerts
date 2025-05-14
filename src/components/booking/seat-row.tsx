import React from 'react';
import { RowType, SeatType } from '@/@types/seats';
import { Seat } from './seat';

interface SeatRowProps {
    rowData: RowType;
    selectedSeats: string[];
    onSeatClick: (seatId: string) => void;
}

export const SeatRow: React.FC<SeatRowProps> = ({ rowData, selectedSeats, onSeatClick }) => {
    return (
        <div className="flex items-center mb-2"> {}
            <div className="w-20 text-xs text-right mr-3 md:mr-4 shrink-0"> {}
                {rowData.name}
            </div>
            <div className="flex flex-wrap gap-1 md:gap-1.5"> {}
                {rowData.seats.map((seat) => (
                    <Seat
                        key={seat.id}
                        seatData={seat}
                        onSeatClick={onSeatClick}
                        isSelected={selectedSeats.includes(seat.id)}
                    />
                ))}
            </div>
        </div>
    );
};