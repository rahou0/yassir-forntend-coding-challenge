import { createSlice } from '@reduxjs/toolkit';
import {AppThunk} from "@/services/store";
import { ReservationModel } from '../../models/reservation';

interface ReservationState {
    reservations: ReservationModel[],
}

const initialState: ReservationState = {
    reservations: [],
};

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setReservationsList: (state, action) => {
            state.reservations = action.payload;
        },
    },
});

export const setReservations = (reservations: ReservationModel[]): AppThunk => async (dispatch) => {
    dispatch(reservationSlice.actions.setReservationsList(reservations));
};

export default reservationSlice.reducer;
