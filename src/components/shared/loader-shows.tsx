'use client'
import { UseShowsStore } from "@/stores/shows";
import { useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

interface Props {
    children?: React.ReactNode;
    className?: string;
}



export const LoaderShows: React.FC<Props> = ({className, children}) => {
      const { fetchShows, isLoading } = UseShowsStore();
      useEffect(() => {
        fetchShows();
      }, []);
    return (
                <div className="flex justify-center items-center h-screen">{isLoading ? <ClimbingBoxLoader color="#8b00ed" /> : children}</div>

    )
}