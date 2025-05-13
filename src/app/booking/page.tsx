'use client';

import React from 'react';
import { Title } from '@/components/shared/title';
import { ConcertInfoCard } from '@/components/shared/сoncert-info-card';

const concertData = {
    date: "28.07.2024",
    artist: "Artist",
    location: "Location",
    time: "Start - End",
};

export default function BookingPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Title className="mb-8">Book seats for your show</Title>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-grow lg:w-2/3">
                    <ConcertInfoCard
                        date={concertData.date}
                        artist={concertData.artist}
                        location={concertData.location}
                        time={concertData.time}
                        className="mb-8"
                    />
                    {
}

                    {}
                    <div className="p-6 border rounded-lg bg-white shadow"> {}
                        <p className="text-center text-xl font-semibold">Seating Plan Area</p>
                        <div className="my-4 p-3 bg-green-200 text-green-800 rounded text-center w-1/3 mx-auto">
                            Stage
                        </div>
                        <p className="text-center text-gray-500">(Тут будет схема мест)</p>
                    </div>
                </div>

                <div className="lg:w-1/3">
                    {}
                    <div className="p-6 border rounded-lg bg-white shadow sticky top-8"> {}
                        <h3 className="text-lg font-semibold mb-4">Selected seats</h3>
                        <p className="text-sm text-gray-600">Row: Stall 03, Seat: 6</p>
                        <p className="text-sm text-gray-600">Row: Stall 03, Seat: 7</p>
                        <p className="text-sm text-gray-500 mt-6 mb-4">Your seats expire in 02:35</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"> {}
                            Enter Booking Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}