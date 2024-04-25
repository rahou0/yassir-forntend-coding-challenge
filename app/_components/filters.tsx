import * as React from "react";
import { parseAsString, useQueryState, parseAsArrayOf, useQueryStates, parseAsIsoDateTime, } from 'next-usequerystate'
import FilterBar from "@/components/filter-bar";
import { MultiSelect } from "@/components/multi-select";
import { RESERVATION_AREA, RESERVATION_SHIFT, RESERVATION_STATUS } from "@/models/reservation";
import { enumToOptions } from "@/lib/utils";
import Tag from "@/components/ui/tag";
import SearchInput from "@/components/search-input";
import { DatePickerWithRange } from "@/components/date-range-picker";
import { DateRange } from "react-day-picker";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

interface FiltersProps {
    isLoading: boolean
}

const statusOptions = enumToOptions(RESERVATION_STATUS);
const shiftOptions = enumToOptions(RESERVATION_SHIFT);
const areaOptions = enumToOptions(RESERVATION_AREA);

function Filters(props: FiltersProps) {
    const [search, setSearch] = useQueryState('search', { history: 'push' });
    const [statuses, setStatuses] = useQueryState('statuses', parseAsArrayOf(parseAsString).withOptions({ history: 'push' }))
    const [areas, setAreas] = useQueryState('areas', parseAsArrayOf(parseAsString).withOptions({ history: 'push' }))
    const [shifts, setShifts] = useQueryState('shifts', parseAsArrayOf(parseAsString).withOptions({ history: 'push' }))
    const [date, setDate] = useQueryStates({ from: parseAsIsoDateTime, to: parseAsIsoDateTime }, { history: 'push' });

    const onChangeDateFilter = (date: DateRange | undefined) => {
        if (date?.from) {
            setDate({ from: dayjs.utc(date.from).startOf('day').toDate() })
        }
        if (date?.to) {
            setDate({ to: dayjs.utc(date.to).endOf('day').toDate() })
        }
    };
    // Reset the state when button clicked
    const handleFilterReset = (e: any) => {
        setSearch(null);
        setAreas(null);
        setShifts(null);
        setStatuses(null);
        setDate({ from: null, to: null });
    };

    return (
        <FilterBar
            reset={handleFilterReset}
            properties={{ search, statuses, shifts, areas, from: date.from?.toString(), to: date.to?.toString() }}
            isLoading={props.isLoading}
            isLarge={true}
            filters={
                <>
                    {search && search?.length > 0 && <Tag closable onClose={() => setSearch('')}>
                        <strong>Search </strong>   {': '}    {search}
                    </Tag>}
                    {statuses?.map((status) => <Tag key={status} closable onClose={() => setStatuses(statuses?.filter((item) => item !== status))}>
                        <strong>Status</strong>
                        {': '} {statusOptions?.find((element) => element.value === status)?.label ?? ''}
                    </Tag>)
                    }
                    {areas?.map((area) => <Tag key={area} closable onClose={() => setAreas(areas?.filter((item) => item !== area))}>
                        <strong>Area</strong>
                        {': '} {areaOptions?.find((element) => element.value === area)?.label ?? ''}
                    </Tag>)
                    }
                    {shifts?.map((shift) => <Tag key={shift} closable onClose={() => setShifts(shifts?.filter((item) => item !== shift))}>
                        <strong>Shift</strong>
                        {': '} {shiftOptions?.find((element) => element.value === shift)?.label ?? ''}
                    </Tag>)
                    }
                    {date?.from &&
                        <Tag closable onClose={() => setDate({ from: null })}>
                            <strong>{'From'}</strong>{': '} {dayjs(date.from).format('DD-MM-YYYY')}
                        </Tag>}
                    {date?.to &&
                        <Tag closable onClose={() => setDate({ to: null })}>
                            <strong>{'To'}</strong>{': '} {dayjs(date.to).format('DD-MM-YYYY')}
                        </Tag>}
                </>
            }
        >
            <SearchInput
                placeholder="Search By Name, Username"

            />

            <MultiSelect
                className="w-full lg:w-auto"
                placeholder="Status"
                options={statusOptions}
                onSelect={(list) => {
                    setStatuses(list)
                }}
                selectedOptions={statuses ?? []} />

            <MultiSelect
                className="w-full lg:w-auto"
                placeholder="Shift"
                options={shiftOptions}
                onSelect={(list) => {
                    setShifts(list)
                }}
                selectedOptions={shifts ?? []} />

            <MultiSelect
                className="w-full lg:w-auto"
                placeholder="Area"
                options={areaOptions}
                onSelect={(list) => {
                    setAreas(list)
                }}
                selectedOptions={areas ?? []} />

            <DatePickerWithRange
                value={date as DateRange}
                onValueChange={(value) => {
                    onChangeDateFilter(value);
                }}
                className="lg:w-auto"
            />
        </FilterBar>
    )
}

export default Filters;