import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={`bg-white border-b border-gray-300 ${className}`}>
            <Container className='flex justify-between items-center py-4'>
                <div className='text-xl'>
                    <Link href="/">EuroSkills Concerts</Link>
                </div>

                <div className='flex items-center'>
                    <span className='me-3 text-sm text-gray-700'>Already booked?</span>
                    <Button asChild className="text-sm px-3 py-1 h-auto">
                        <Link href="/"> Get Tickets </Link>
                    </Button>
                </div>
            </Container>
        </header>
    );
}