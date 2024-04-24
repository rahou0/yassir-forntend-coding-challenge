import * as React from "react";
import { parseAsString, useQueryStates } from 'next-usequerystate'
import { SortingState } from "@tanstack/react-table";

function getInitialSort(sort: any) {
    if (sort?.sortBy !== '') {
        return [{ id: sort.sortBy, desc: sort?.direction === 'desc' }]
    }
    return []
}


export function useServerSorting() {
    const [sort, setSort] = useQueryStates({ sortBy: parseAsString.withDefault(''), direction: parseAsString.withDefault('') }, { history: 'push' });

    const [sorting, setSorting] = React.useState<SortingState>(getInitialSort(sort));

    React.useEffect(() => {
        if (sorting?.length === 0) {
            setSort({ sortBy: null, direction: null });
        } else {
            setSort({ sortBy: sorting[0].id, direction: sorting[0].desc ? 'desc' : 'asc' });
        }
    }, [sorting])

    return [sorting, setSorting];
}
