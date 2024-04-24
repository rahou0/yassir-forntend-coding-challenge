import React from 'react'
import { Button } from './ui/button'
import { CaretSortIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/table-core";

interface SortableHeaderProps {
    title: string;
    column: Column<any>;
}
function SortableHeader({ column, title }: SortableHeaderProps) {
    return (
        <Button
            variant="ghost"
            onClick={() => {
                if (column.getIsSorted() === "desc") return column.clearSorting()
                else return column.toggleSorting(column.getIsSorted() === "asc")
            }}
            className="w-full flex justify-between items-center"
        >
            {title}
            {column.getIsSorted() === "asc" ? <ChevronUpIcon className="ml-2 h-4 w-4" /> : column.getIsSorted() === "desc" ? <ChevronDownIcon className="ml-2 h-4 w-4" /> : <CaretSortIcon className="ml-2 h-4 w-4" />}
        </Button>)
}

export default SortableHeader