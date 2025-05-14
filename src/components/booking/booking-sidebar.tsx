'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface SelectedSeatDisplay {
    id: string;
    displayText: string;
}

interface BookingSidebarProps {
    className?: string;
    selectedSeatsDisplay: SelectedSeatDisplay[];
    initialTimeInSeconds?: number;
}


export const BookingSidebar: React.FC<BookingSidebarProps> = ({
    className,
    selectedSeatsDisplay,
    initialTimeInSeconds = 2 * 60 + 35,
}) => {
    const [timeLeft, setTimeLeft] = useState<number>(initialTimeInSeconds);

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};


    useEffect(() => {
        if (timeLeft <= 0) return;
        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => Math.max(0, prevTime - 1));
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeLeft]);

    const handleEnterBookingDetails = () => {
        console.log("Enter Booking Details clicked. Selected seats:", selectedSeatsDisplay);
    };

    return (
        <Card className={cn("sticky top-8", className)}>
            <CardHeader>
                <CardTitle className="text-xl">Selected seats</CardTitle>
            </CardHeader>
            <CardContent>
                {selectedSeatsDisplay.length > 0 ? (
                    <ul className="space-y-1 mb-6">
                        {selectedSeatsDisplay.map((seat) => (
                            <li key={seat.id} className="text-sm text-muted-foreground">
                                {seat.displayText}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-muted-foreground mb-6">No seats selected yet.</p>
                )}
                {}
                <p className="text-sm text-foreground mb-1">
                    Your seats expire in:
                </p>
                <p className={`text-lg font-semibold ${timeLeft <= 30 && timeLeft > 0 ? 'text-red-500' : timeLeft === 0 ? 'text-gray-500' : 'text-foreground'}`}>
                    {formatTime(timeLeft)}
                </p>
            </CardContent>
            <CardFooter>
                <Button
                    className="w-full"
                    onClick={handleEnterBookingDetails}
                    disabled={selectedSeatsDisplay.length === 0 || timeLeft <= 0}
                >
                    Enter Booking Details
                </Button>
            </CardFooter>
        </Card>
    );
};