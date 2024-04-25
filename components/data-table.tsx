"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel, getSortedRowModel, OnChangeFn, PaginationState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import * as React from "react";
import { useMemo } from "react";
import { TablePagination } from "@/components/table-pagination";
import { useServerSorting } from "@/hooks/use-server-sorting";
import { RowSelectionState } from "../types";

interface DataTableProps<T, TValue> {
    columns: ColumnDef<T, TValue>[]
    data: T[],
    pageCount?: number,
    pageIndex?: number,
    pageSize?: number,
    totalItems?: number,
    setPagination?: OnChangeFn<PaginationState>,
    emptyPlaceHolderText?: string,
    rowSelection?: RowSelectionState,
    setRowSelection?: React.Dispatch<React.SetStateAction<any>>,

}

export function DataTable<T, TValue>({ columns, data, totalItems, pageCount, pageSize, pageIndex, setPagination, emptyPlaceHolderText, rowSelection, setRowSelection }: DataTableProps<T, TValue>) {

    const [sorting, setSorting] = useServerSorting();

    const pagination = useMemo(() => ({
        pageIndex, pageSize,
    }), [pageIndex, pageSize]
    );

    // Build the table
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        pageCount: pageCount,
        state: {
        ...(sorting ? { sorting: sorting as SortingState } : {}),
        ...(pagination ? { pagination: pagination as PaginationState } : {}),
        ...(rowSelection ? { rowSelection } : {}),
        },
        manualSorting: true,
        ...(setSorting ? { onSortingChange: setSorting as OnChangeFn<SortingState> } : {}),
        ...(setPagination ? { onPaginationChange: setPagination as OnChangeFn<PaginationState> } : {}),
        getSortedRowModel: getSortedRowModel(),
        ...(setRowSelection ? { onRowSelectionChange: setRowSelection } : {}),
    });


    return (
        <>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    <EmptyPlaceholder>
                                        <EmptyPlaceholder.Icon name="circleOff" />
                                        <EmptyPlaceholder.Description>
                                            {emptyPlaceHolderText ?? 'No Data Availlable right now'}

                                        </EmptyPlaceholder.Description>
                                    </EmptyPlaceholder>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {pageIndex !== undefined && <TablePagination
                table={table}
                totalItems={totalItems}
            />}

        </>
    )
}
