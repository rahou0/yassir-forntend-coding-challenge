import React from "react";

interface PageHeaderProps {
    heading: string
    text?: string
    children?: React.ReactNode
}

export function PageHeader({heading, text, children,}: PageHeaderProps) {
    return (
        <div className="flex items-center justify-between px-0 sm:px-2">
            <div className="grid gap-1">
                <h1 className="text-2xl font-semibold leading-none tracking-tight">{heading}</h1>
                {text && <p className="text-sm text-muted-foreground">{text}</p>}
            </div>
            {children}
        </div>
    )
}
