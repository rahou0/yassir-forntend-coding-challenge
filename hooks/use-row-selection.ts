import { useEffect, useState } from 'react';
import { RowSelectionState } from '../types';

function useRowSelection(page: number) {
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

    useEffect(() => {
        setRowSelection({})
    }, [page]);

    return [rowSelection, setRowSelection] as const;
}

export default useRowSelection;
