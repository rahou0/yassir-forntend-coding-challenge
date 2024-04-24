import { parseAsString, parseAsIsoDateTime, useQueryState, parseAsArrayOf, useQueryStates } from 'next-usequerystate'
import { ReservationDateFilter, ReservationSort } from "@/interfaces/reservation";
import { ReservationFilters } from '../../interfaces/reservation';
import { RESERVATION_AREA, RESERVATION_SHIFT, RESERVATION_STATUS } from '../../models/reservation';

function useReservationFilter() {
    const [search] = useQueryState('search');
    const [statuses] = useQueryState('statuses', parseAsArrayOf(parseAsString))
    const [areas] = useQueryState('areas', parseAsArrayOf(parseAsString))
    const [shifts] = useQueryState('shifts', parseAsArrayOf(parseAsString))
    const [sort] = useQueryStates({ sortBy: parseAsString.withDefault(''), direction: parseAsString.withDefault('') }, { history: 'push' });
    const [date] = useQueryStates({ from: parseAsIsoDateTime, to: parseAsIsoDateTime }, { history: 'push' });


    const filter: ReservationFilters = {
        search: search as string,
        statuses: statuses as RESERVATION_STATUS[],
        areas: areas as RESERVATION_AREA[],
        shifts: shifts as RESERVATION_SHIFT[],
        sort: sort as ReservationSort,
        date: date as ReservationDateFilter,
    }

    return [filter]
}

export default useReservationFilter;
