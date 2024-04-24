import { CustomerModel } from "./customer";

export enum RESERVATION_STATUS {
    CONFIRMED = "CONFIRMED",
    "NOT CONFIRMED" = "NOT CONFIRMED",
    "CHECKED OUT" = "CHECKED OUT",
    SEATED = "SEATED",
}
export enum RESERVATION_SHIFT {
    LUNCH = "LUNCH",
    BREAKFAST = "BREAKFAST",
    DINNER = "DINNER",
}
export enum RESERVATION_AREA {
    "MAIN ROOM" = "MAIN ROOM",
    BAR = "BAR",
}

export interface ReservationModel {
    id: number,
    businessDate: string,
    status: RESERVATION_STATUS,
    shift: RESERVATION_SHIFT,
    start: string,
    end: string,
    quantity: number,
    customer: CustomerModel,
    area: RESERVATION_AREA,
    guestNotes: string,
}
