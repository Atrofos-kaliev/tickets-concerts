import React from 'react';
import { ShowCard } from './show-card';
import { cn } from '@/lib/utils';


interface Props {
    className?: string;
}

export const ShowList: React.FC<Props> = ({ className }) => {
    return (
            <div className={cn('grid grid-cols-4 gap-4 mt-6', className)}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8 ].map((_, i) => <ShowCard key={i} />)
                }
            </div>
    );
}