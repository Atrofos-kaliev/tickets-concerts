import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UseShowsStore } from '@/stores/shows';
import { Input } from '../ui/input';

interface Props {
    className?: string;
}

const filterTriggerWidth = "w-[180px]";

export const Filters: React.FC<Props> = ({ className }) => {
    const { artists, locations} = UseShowsStore();
    return (
    <div>
      <div className="flex justify-between mt-4">

        <Select>
          <SelectTrigger className="w-full me-4">
            <SelectValue placeholder="Artist" />
          </SelectTrigger>
          <SelectContent>
            {artists.map((artist) => (
              <SelectItem key={artist} value={artist}>
                {artist}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full me-4">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Input type="date" />
      </div>
    </div>
    );
}