import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Props {
    className?: string;
}

const filterTriggerWidth = "w-[180px]";

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={`flex flex-wrap justify-center gap-4 mt-6  ${className}`}>
            <Select>
                <SelectTrigger className={`${filterTriggerWidth} text-neutral-900 cursor-pointer`}>
                    <SelectValue placeholder="Artist" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="artist_1" className="cursor-pointer">Пример Артиста А</SelectItem>
                    <SelectItem value="artist_2" className="cursor-pointer">Пример Артиста Б</SelectItem>
                    <SelectItem value="artist_3" className="cursor-pointer">Пример Артиста В</SelectItem>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className={`${filterTriggerWidth} text-neutral-900 cursor-pointer`}>
                    <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="location_1" className="cursor-pointer">Пример Места X</SelectItem>
                    <SelectItem value="location_2" className="cursor-pointer">Пример Места Y</SelectItem>
                    <SelectItem value="location_3" className="cursor-pointer">Пример Места Z</SelectItem>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className={`${filterTriggerWidth} text-neutral-900 cursor-pointer`}>
                    <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="date_today" className="cursor-pointer">Сегодня</SelectItem>
                    <SelectItem value="date_this_week" className="cursor-pointer">На этой неделе</SelectItem>
                    <SelectItem value="date_this_month" className="cursor-pointer">В этом месяце</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}