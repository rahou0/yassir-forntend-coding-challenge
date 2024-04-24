import { useEffect, useState, useCallback } from 'react';
import { RowSelectionState } from '../types';

function useSelectedItems<T>(data: T[], rowSelection: RowSelectionState) {
    const [selectedItems, setSelectedItems] = useState<T[]>([]);

    useEffect(() => {
        if (data?.length) {
            const list = Object.keys(rowSelection)
                .filter(key => data[Number([key])])
                .map(key => data[Number([key])]);
            setSelectedItems(list);
        }
    }, [data, rowSelection]);

    const emptySelectedItems = useCallback(() => {
        setSelectedItems([]);
    }, []);

    return [selectedItems, emptySelectedItems] as const;
}

export default useSelectedItems;
