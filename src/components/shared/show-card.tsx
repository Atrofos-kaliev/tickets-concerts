import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const ShowCard: React.FC<Props> = ({ className }) => {
    return (
        <Card className={cn("text-center", className)}>
            <CardContent className="text-center">
                <p>12.05.2025</p>
                <CardTitle className="text-xl my-2">Artist</CardTitle>
                <p className="text-sm">Location</p>
                <p className="text-sm mt-8">18:00 - 22:00</p>
            </CardContent>
        </Card>
    );
};      