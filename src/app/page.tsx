'use client'
import { Title } from '@/components/shared/title';
import React, { use } from 'react';
import { Filters } from '@/components/shared/filters';
import { ShowList } from '@/components/shared/show-list';
import { UseShowsStore } from '@/stores/shows';
import { useEffect } from 'react';



export default function Home() {

  const { fetchShows } = UseShowsStore();
  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <> 
    <Title className='mt-4'>Checkout these  amazing concerts in Graz.</Title>
    <Filters />
    <ShowList />
    </>
  );
}
