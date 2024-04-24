import React from 'react'
import { EmptyPlaceholder } from './empty-placeholder'

function NetworkErrorCard({ title, description }: { title?: string, description?: string }) {
    return (
        <div>
            <EmptyPlaceholder>
                <EmptyPlaceholder.Icon name="xCircle" />
                <EmptyPlaceholder.Title>
                    {title ?? "Error"}
                </EmptyPlaceholder.Title>
                <EmptyPlaceholder.Description>
                    {description ?? "failed to retrieve data"}
                </EmptyPlaceholder.Description>
            </EmptyPlaceholder>
        </div>
    )
}

export default NetworkErrorCard