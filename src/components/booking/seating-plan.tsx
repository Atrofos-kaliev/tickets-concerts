'use client';

import React from 'react';
import { SeatingLayoutType, RowType, SeatType } from '@/@types/seats';
import { SeatRow } from './seat-row';
import { cn } from '@/lib/utils';


const generateSeatsForRow = (rowIndex: number, rowIdPrefix: string, rowNamePrefix: string, numSeats: number, preSelected: { [key: string]: boolean } = {}): RowType => {
    const seats: SeatType[] = [];
    for (let i = 1; i <= numSeats; i++) {
        const seatId = `${rowIdPrefix}${rowIndex}-c${String(i).padStart(2, '0')}`;
        let status: 'available' | 'selected' | 'booked' = 'available';
        if (preSelected[seatId]) {
            status = 'selected';
        }
        seats.push({ id: seatId, number: i, status });
    }
    return { id: `${rowIdPrefix}${rowIndex}`, name: `${rowNamePrefix} ${String(rowIndex).padStart(2, '0')}`, seats };
};

const preSelectedSeatsMap: { [key: string]: boolean } = {
    'stall2-c14': true,
    'stall3-c06': true,
    'stall4-c07': true, 'stall4-c08': true, 'stall4-c09': true, 'stall4-c10': true,
    'terrace1-c12': true, 'terrace1-c13': true, 'terrace1-c14': true,
    'terrace2-c01': true, 'terrace2-c02': true,
};

const mockSeatingLayout: SeatingLayoutType = {
    rows: [
        ...Array.from({ length: 6 }, (_, i) => generateSeatsForRow(i + 1, 'stall', 'Stall', 16, preSelectedSeatsMap)),
        ...Array.from({ length: 2 }, (_, i) => generateSeatsForRow(i + 1, 'terrace', 'Terrace', 16, preSelectedSeatsMap)),
    ],
};


interface SeatingPlanProps {
    className?: string;
    layout: SeatingLayoutType;
    selectedSeats: string[];
    onSeatSelect: (seatId: string) => void;
}

export const SeatingPlan: React.FC<SeatingPlanProps> = ({
    className,
    layout = mockSeatingLayout,
    selectedSeats,
    onSeatSelect,
}) => {
    return (
        <div className={cn("p-4 md:p-6 border rounded-lg bg-white shadow-md overflow-x-auto", className)}> {}
            {}
            <div className="mb-6 py-3 px-6 bg-green-100 border border-green-300 text-green-700 rounded-md text-center w-full max-w-xs mx-auto">
                Stage
            </div>

            {}
            <div className="flex flex-col items-center"> {}
                {layout.rows.map((row) => (
                    <SeatRow
                        key={row.id}
                        rowData={row}
                        selectedSeats={selectedSeats}
                        onSeatClick={onSeatSelect}
                    />
                ))}
            </div>
        </div>
    );
};