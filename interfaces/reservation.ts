import { SORT_DIRECTION } from "../enums/sort-direction";
import { RESERVATION_AREA, RESERVATION_SHIFT, RESERVATION_STATUS } from "../models/reservation";


export enum RESERVATION_SORT_COLUMNS {
    name= "name",
    id= "id",
}

export interface ReservationSort {
    sortBy: RESERVATION_SORT_COLUMNS;
    direction: SORT_DIRECTION;
}

export interface ReservationDateFilter {
    from: Date;
    to: Date;
}

export interface ReservationFilters {
    search?: string;
    statuses?: RESERVATION_STATUS[];
    shifts?: RESERVATION_SHIFT[];
    areas?: RESERVATION_AREA[];
    sort?:ReservationSort;
    date?:ReservationDateFilter;
}