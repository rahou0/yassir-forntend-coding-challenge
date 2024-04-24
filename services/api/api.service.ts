import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from "@/types/api-response";
import { ReservationModel } from '@/models/reservation';
import { setReservations } from '@/lib/reducers/reservationSlice';


export const API_BASE_URL = process.env.NEXT_PUBLIC_GITHUB_API_BASE_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
        //here we add access token
        return headers;
    },
});

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    tagTypes: ['reservations'],
    endpoints: (builder) => ({
        getReservationList: builder.query<Array<ReservationModel>, any>({
            query: () => '',
            transformResponse: (response: ApiResponse<Array<ReservationModel>>, meta, arg) => {
                return response.reservations;
            },
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setReservations(data));

                } catch (err) {
                    console.log('Error in fetching reservation list form github', err);
                }
            },
        }),
    }),
});


export const { useGetReservationListQuery } = api;
