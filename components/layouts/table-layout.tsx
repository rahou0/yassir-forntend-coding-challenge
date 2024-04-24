import React from 'react'
import NetworkErrorCard from '@/components/network-error-card';
import { CardSkeleton } from '@/components/card-skeleton';

interface TableLayoutProps {
    isLoading: boolean,
    isNullOrError: boolean,
    children: React.ReactNode,
}
function TableLayout({ isLoading, isNullOrError, children }: TableLayoutProps) {
    if (isLoading) {
        return (
            <div className="grid gap-10">
                <CardSkeleton />
            </div>
        );
    } else if (isNullOrError) {
        return (<NetworkErrorCard />);

    } else {
        return (
            <>{children}</ >
        )
    }

}

export default TableLayout