'use client';
import { PlaceShow } from "./components/placeshow";
import { SelectedPlaces } from "./components/selectedplaces";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { InputDetails } from "./components/inputdetails";
import { Booking } from "./components/booking";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ShowCard } from "@/components/shared/show-card";
import { UseShowsStore } from "@/stores/shows";
import { useRowsStore } from "@/stores/rows";

export default function BookShowPage() {
  const { getShowById } = UseShowsStore();
  const { rows, fetchRows } = useRowsStore();
  const params = useParams<{showId:string}>();
  const [isBooking, setBooking] = useState(false);
  const show = getShowById(Number(params.showId));
  if (!show) {
    return <div>Show not found</div>;
  }
  useEffect(() => {
    fetchRows(show.concertId, show.id);
  }, [])

  return (
    <Container className="py-8">
      <Title className="mb-4">Book seats for your show</Title>
      <ShowCard show={show}/>
  {
  !isBooking 
  ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <PlaceShow concertId={show.concertId} showId={show.id} className="" />
        <SelectedPlaces className="" showId={params.showId} />
      </div>
  : <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 mt-6">
      <SelectedPlaces className="" showId={params.showId} />  
      <div className="border border-gray-950 p-4 shadow-sm">
        <h2 className="text-lg font-medium mb-4">
          Please enter your details
        </h2>
        <div className="flex gap-4">
          <InputDetails className="" />
          <div className="border-l border-gray-950 self-stretch"></div>
          <Booking className="" showId={params.showId} />
        </div>
      </div>
  </div>
  }
  </Container>
  );
}
