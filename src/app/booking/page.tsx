'use client';

import React, { useState, useEffect } from 'react';
import { Title } from '@/components/shared/title';
import { ConcertInfoCard } from '@/components/shared/сoncert-info-card';
import { SeatingPlan } from '@/components/booking/seating-plan';
import { BookingSidebar } from '@/components/booking/booking-sidebar';
import { SeatingLayoutType, SeatType, RowType } from '@/@types/seats';

const generateSeatsForRow = (rowIndex: number, rowIdPrefix: string, rowNamePrefix: string, numSeats: number): RowType => {
    const seats: SeatType[] = [];
    for (let i = 1; i <= numSeats; i++) {
        const seatId = `${rowIdPrefix}${String(rowIndex).padStart(2, '0')}-c${String(i).padStart(2, '0')}`;
        seats.push({ id: seatId, number: i, status: 'available' });
    }
    return { id: `${rowIdPrefix}${String(rowIndex).padStart(2, '0')}`, name: `${rowNamePrefix} ${String(rowIndex).padStart(2, '0')}`, seats };
};

const initialSeatingLayout: SeatingLayoutType = {
    rows: [
        ...Array.from({ length: 6 }, (_, i) => generateSeatsForRow(i + 1, 'stall', 'Stall', 16)),
        ...Array.from({ length: 2 }, (_, i) => generateSeatsForRow(i + 1, 'terrace', 'Terrace', 16)),
    ],
};

const initialSelectedSeatIdsFromImage = [
    'stall02-c14', 'stall03-c06',
    'stall04-c07', 'stall04-c08', 'stall04-c09', 'stall04-c10',
    'terrace01-c12', 'terrace01-c13', 'terrace01-c14',
    'terrace02-c01', 'terrace02-c02',
];

const concertData = {
    date: "Date",
    artist: "Artist",
    location: "Location",
    time: "Start - End",
};

const formatSelectedSeatsForSidebar = (seatIds: string[], layout: SeatingLayoutType): { id: string, displayText: string, row: string, seat: number }[] => {
    const formatted: { id: string, displayText: string, row: string, seat: number }[] = [];
    for (const row of layout.rows) {
        for (const seat of row.seats) {
            if (seatIds.includes(seat.id)) {
                formatted.push({
                    id: seat.id,
                    displayText: `Row: ${row.name}, Seat: ${seat.number}`,
                    row: row.name,
                    seat: seat.number,
                });
            }
        }
    }
    return formatted;
};


export default function BookingPage() {
    const [seatingLayout, setSeatingLayout] = useState<SeatingLayoutType>(initialSeatingLayout);
    const [selectedSeatIds, setSelectedSeatIds] = useState<string[]>(initialSelectedSeatIdsFromImage);

    const handleSeatSelect = (seatId: string) => {
        setSelectedSeatIds((prevSelected) => {
            if (prevSelected.includes(seatId)) {
                return prevSelected.filter((id) => id !== seatId);
            } else {
                return [...prevSelected, seatId];
            }
        });
    };

    const sidebarSelectedSeats = formatSelectedSeatsForSidebar(selectedSeatIds, seatingLayout);

    const stickyTopOffset = 'top-8';

    return (
        <div className="container mx-auto px-4 py-8">
            <Title className="mb-8">Book seats for your show</Title>

            {}
            <ConcertInfoCard
                date={concertData.date}
                artist={concertData.artist}
                location={concertData.location}
                time={concertData.time}
                className="mb-8"
            />

            <div className="flex flex-col lg:flex-row gap-8 lg:items-start">

                <div className="flex-grow lg:w-2/3">
                    
                    <SeatingPlan
                        layout={seatingLayout}
                        selectedSeats={selectedSeatIds}
                        onSeatSelect={handleSeatSelect}
                    />
                </div>

                <div className="lg:w-1/3">
                    <BookingSidebar
                        selectedSeatsDisplay={sidebarSelectedSeats}
                    />  
                </div>
            </div>
        </div>
    );
}