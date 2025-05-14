import React from 'react';
import { cn } from '@/lib/utils';
import { SeatType } from '@/@types/seats';

interface SeatProps {
    seatData: SeatType;
    onSeatClick: (seatId: string) => void;
    isSelected: boolean;
}

export const Seat: React.FC<SeatProps> = ({ seatData, onSeatClick, isSelected }) => {
    const { id, status, number } = seatData;

    const handleClick = () => {
        if (status !== 'booked') {
            onSeatClick(id);
        }
    };

    const seatClasses = cn(
        'w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors duration-150',
        {
            'bg-white border-gray-400 hover:bg-gray-200': status === 'available' && !isSelected,
            'bg-pink-500 border-pink-700 text-white': isSelected,
            'bg-gray-300 border-gray-400 cursor-not-allowed opacity-70': status === 'booked',
        }
    );

    return (
        <div
            className={seatClasses}
            onClick={handleClick}
            title={`Seat ${number} - ${isSelected ? 'Selected' : status}`}
        >
            {}
            {}
        </div>
    );
};