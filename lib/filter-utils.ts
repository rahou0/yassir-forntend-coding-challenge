import { ReservationSort, ReservationFilters } from "../interfaces/reservation";
import { RESERVATION_AREA, RESERVATION_SHIFT, RESERVATION_STATUS, ReservationModel } from "../models/reservation";
import { SORT_DIRECTION } from "../enums/sort-direction";
import dayjs from 'dayjs';

export function filterAndSortData(filters: ReservationFilters, data: ReservationModel[]): ReservationModel[] {
    let finalData = data;

    //filter username 
    if (filters.search) finalData = filterByName(filters.search, finalData);

    //filter by statuses 
    if (filters.statuses && filters.statuses.length) finalData = filterByStatus(filters.statuses, finalData);

    //filter by shifts 
    if (filters.shifts && filters.shifts.length) finalData = filterByShift(filters.shifts, finalData);

    //filter by areas 
    if (filters.areas && filters.areas.length) finalData = filterByArea(filters.areas, finalData);

    //filter by date
    if (filters.date?.from) finalData = filterByDate(finalData, filters.date.from, filters.date.to);

    return sortData(finalData, filters.sort);
}

function filterByName(search: string, data: ReservationModel[]): ReservationModel[] {
    return data.filter(({ customer }) => `${customer.firstName} ${customer.lastName}`.toLowerCase().includes(search.toLowerCase()))
}

function filterByStatus(statuses: RESERVATION_STATUS[], data: ReservationModel[]): ReservationModel[] {
    return data.filter(({ status }) => statuses.includes(status))
}

function filterByShift(shifts: RESERVATION_SHIFT[], data: ReservationModel[]): ReservationModel[] {
    return data.filter(({ shift }) => shifts.includes(shift))
}

function filterByDate(data: ReservationModel[], from?: Date, to?: Date): ReservationModel[] {
    return data.filter((reservation) => {
        let isValid = true;

        const dateParts = reservation.businessDate.split('.');
        const businessDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        if (from && dayjs(from).format('YYYY-MM-DD') > businessDate) isValid = false;
        if (to && dayjs(to).format('YYYY-MM-DD') < businessDate) isValid = false;
        return isValid;
    })
}


function filterByArea(areas: RESERVATION_AREA[], data: ReservationModel[]): ReservationModel[] {
    return data.filter(({ area }) => areas.includes(area))
}

function sortData(data: ReservationModel[], sort?: ReservationSort): ReservationModel[] {
    if (!sort) return data;

    let sortedData = [...data];
    //sort data
    switch (sort.sortBy) {
        case 'name':
            sortedData.sort((a, b) => {
                const CustomerA = `${a.customer.firstName} ${a.customer.lastName}`;
                const CustomerB = `${b.customer.firstName} ${b.customer.lastName}`;
                return sort.direction === SORT_DIRECTION.ASC ? CustomerA.localeCompare(CustomerB) : CustomerB.localeCompare(CustomerA);
            });
            break;

        case 'id':
            sortedData.sort((a, b) => sort.direction === SORT_DIRECTION.ASC ? a.id - b.id : b.id - a.id);
            break;

        default:
            break;
    }

    return sortedData;
}
