import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ConcertInfoCardProps {
    className?: string;
    date: string;
    artist: string;
    location: string;
    time: string;
}

export const ConcertInfoCard: React.FC<ConcertInfoCardProps> = ({
    className,
    date,
    artist,
    location,
    time,
}) => {
    return (
        <Card className={cn("w-full max-w-md mx-auto", className)}>
            <CardContent className="text-center p-6">
                <p className="text-xs text-muted-foreground mb-1">{date}</p>
                <CardTitle className="text-2xl font-bold my-2">{artist}</CardTitle>
                <p className="text-sm text-foreground">{location}</p>
                <p className="text-sm text-muted-foreground mt-8">{time}</p>
            </CardContent>
        </Card>
    );
};