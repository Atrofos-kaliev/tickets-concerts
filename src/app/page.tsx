import { Title } from '@/components/shared/title';
import React, { use } from 'react';
import { Filters } from '@/components/shared/filters';
import { ShowList } from '@/components/shared/show-list';


export default function Home() {
  return (
    <> 
    <Title className='mt-4'>Checkout these  amazing concerts in Graz.</Title>
    <Filters />
    <ShowList />
    </>
  );
}
