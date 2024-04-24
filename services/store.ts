import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { api } from '@/services/api/api.service';
import reducers from '../lib/reducers';
import {TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector} from "react-redux";


const store = configureStore({
    reducer: {
        ...reducers,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();

export default store;
