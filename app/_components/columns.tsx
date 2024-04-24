"use client"
import { ColumnDef } from "@tanstack/table-core";
import React from "react";
import SortableHeader from "@/components/sortable-header";
import { ReservationModel } from "@/models/reservation";
import dayjs from 'dayjs';
import { Badge } from "@/components/ui/badge";
import { StatusVariant } from "@/types";
import { capitalizeString } from "../../lib/utils";

export const columns: ColumnDef<ReservationModel>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <SortableHeader title={"ID"} column={column} />
            )
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <SortableHeader title={"Customer"} column={column} />
            )
        },
        cell: ({ row }) => {
            const customer = row.original.customer;
            return <>{`${customer.firstName} ${customer.lastName}`}</>
        },
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "businessDate",
        header: "Business Date",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status;
            const statusVariant = statusVariants.find(({ value }) => value === status)
            if (!statusVariant) return <></>
            return <Badge variant={statusVariant.variant}>{statusVariant.label}</Badge>
        },
    },
    {
        accessorKey: "shift",
        header: "Shift",
        cell: ({ row }) => {
            return <>{capitalizeString(row.original.shift)}</>
        },
    },
    {
        accessorKey: "area",
        header: "Area",
        cell: ({ row }) => {
            return <>{capitalizeString(row.original.area)}</>
        },
    },
    {
        accessorKey: "time",
        header: "Time",
        cell: ({ row }) => {
            return `${dayjs(row.original.start).format('HH:mm')}-${dayjs(row.original.end).format('HH:mm')}`
        },
    },
    {
        accessorKey: "guestNotes",
        header: "Note",
    },
]

const statusVariants: StatusVariant[] = [
    {
        variant: 'success',
        label: 'Confirmed',
        value: 'CONFIRMED'
    },
    {
        variant: 'info',
        label: 'Not confirmed',
        value: 'NOT CONFIRMED'
    },
    {
        variant: 'outline',
        label: 'Checked out',
        value: 'CHECKED OUT'
    },
    {
        variant: 'secondary',
        label: 'Seated',
        value: 'SEATED'
    }
];