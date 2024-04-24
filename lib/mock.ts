import { RESERVATION_STATUS, RESERVATION_SHIFT, RESERVATION_AREA, ReservationModel } from "../models/reservation";

export const mockData: ReservationModel[] = [
    {
        id: 1,
        businessDate: "06.08.2018",
        status: RESERVATION_STATUS["CHECKED OUT"],
        shift: RESERVATION_SHIFT["BREAKFAST"],
        start: "2018-08-06T08:00:00Z",
        end: "2018-08-06T09:00:00Z",
        quantity: 1,
        customer: {
            firstName: "Yuri",
            lastName: "Burchell"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: "Likes the blue cheese burguer"
    },
    {
        id: 2,
        businessDate: "05.08.2018",
        status: RESERVATION_STATUS["NOT CONFIRMED"],
        shift: RESERVATION_SHIFT["BREAKFAST"],
        start: "2018-08-05T08:00:00Z",
        end: "2018-08-05T09:00:00Z",
        quantity: 2,
        customer: {
            firstName: "Arvie",
            lastName: "Thurlbourne"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: ""
    },
    {
        id: 3,
        businessDate: "04.08.2018",
        status: RESERVATION_STATUS["NOT CONFIRMED"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-04T16:00:00Z",
        end: "2018-08-04T16:45:00Z",
        quantity: 9,
        customer: {
            firstName: "Isa",
            lastName: "Pearsey"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: "The customer is a regular. Give a free drink"
    },
    {
        id: 4,
        businessDate: "12.08.2018",
        status: RESERVATION_STATUS["CHECKED OUT"],
        shift: RESERVATION_SHIFT["DINNER"],
        start: "2018-08-12T18:30:00Z",
        end: "2018-08-12T20:00:00Z",
        quantity: 2,
        customer: {
            firstName: "Dewain",
            lastName: "De Bruijne"
        },
        area: RESERVATION_AREA["MAIN ROOM"],
        guestNotes: ""
    },
    {
        id: 5,
        businessDate: "02.08.2018",
        status: RESERVATION_STATUS["NOT CONFIRMED"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-02T12:00:00Z",
        end: "2018-08-02T14:30:00Z",
        quantity: 1,
        customer: {
            firstName: "Brade",
            lastName: "Fellgatt"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: ""
    },
    {
        id: 6,
        businessDate: "11.08.2018",
        status: RESERVATION_STATUS["NOT CONFIRMED"],
        shift: RESERVATION_SHIFT["BREAKFAST"],
        start: "2018-08-11T09:30:00Z",
        end: "2018-08-11T11:00:00Z",
        quantity: 6,
        customer: {
            firstName: "Gisele",
            lastName: "Spires"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: ""
    },
    {
        id: 7,
        businessDate: "04.08.2018",
        status: RESERVATION_STATUS["NOT CONFIRMED"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-04T13:00:00Z",
        end: "2018-08-04T14:00:00Z",
        quantity: 6,
        customer: {
            firstName: "Chris",
            lastName: "McRae"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: ""
    },
    {
        id: 8,
        businessDate: "06.08.2018",
        status: RESERVATION_STATUS["SEATED"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-06T14:00:00Z",
        end: "2018-08-06T15:30:00Z",
        quantity: 3,
        customer: {
            firstName: "Brennen",
            lastName: "Tort"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: ""
    },
    {
        id: 9,
        businessDate: "14.08.2018",
        status: RESERVATION_STATUS["SEATED"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-14T13:00:00Z",
        end: "2018-08-14T14:00:00Z",
        quantity: 4,
        customer: {
            firstName: "Terza",
            lastName: "Glasbey"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: "Likes the meat well done"
    },
    {
        id: 10,
        businessDate: "07.08.2018",
        status: RESERVATION_STATUS["NOT CONFIRMED"],
        shift: RESERVATION_SHIFT["BREAKFAST"],
        start: "2018-08-07T08:00:00Z",
        end: "2018-08-07T09:00:00Z",
        quantity: 3,
        customer: {
            firstName: "Cordie",
            lastName: "Pimmocke"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: ""
    },
    {
        id: 11,
        businessDate: "03.08.2018",
        status: RESERVATION_STATUS["NOT CONFIRMED"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-03T13:00:00Z",
        end: "2018-08-03T15:00:00Z",
        quantity: 3,
        customer: {
            firstName: "Adelbert",
            lastName: "Bradbury"
        },
        area: RESERVATION_AREA["MAIN ROOM"],
        guestNotes: ""
    },
    {
        id: 12,
        businessDate: "02.08.2018",
        status: RESERVATION_STATUS["SEATED"],
        shift: RESERVATION_SHIFT["DINNER"],
        start: "2018-08-02T20:00:00Z",
        end: "2018-08-02T22:30:00Z",
        quantity: 5,
        customer: {
            firstName: "Ole",
            lastName: "Dmitriev"
        },
        area: RESERVATION_AREA["MAIN ROOM"],
        guestNotes: ""
    },
    {
        id: 13,
        businessDate: "06.08.2018",
        status: RESERVATION_STATUS["CHECKED OUT"],
        shift: RESERVATION_SHIFT["DINNER"],
        start: "2018-08-06T19:30:00Z",
        end: "2018-08-06T21:00:00Z",
        quantity: 7,
        customer: {
            firstName: "Noelyn",
            lastName: "Prentice"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: ""
    },
    {
        id: 14,
        businessDate: "13.08.2018",
        status: RESERVATION_STATUS["CONFIRMED"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-13T13:00:00Z",
        end: "2018-08-13T15:30:00Z",
        quantity: 10,
        customer: {
            firstName: "Shina",
            lastName: "Stoaks"
        },
        area: RESERVATION_AREA["BAR"],
        guestNotes: ""
    },
    {
        id: 15,
        businessDate: "13.08.2018",
        status: RESERVATION_STATUS["SEATED"],
        shift: RESERVATION_SHIFT["BREAKFAST"],
        start: "2018-08-13T10:00:00Z",
        end: "2018-08-13T11:15:00Z",
        quantity: 4,
        customer: {
            firstName: "Madelina",
            lastName: "Petrichat"
        },
        area: RESERVATION_AREA["MAIN ROOM"],
        guestNotes: ""
    },
    {
        id: 16,
        businessDate: "10.08.2018",
        status: RESERVATION_STATUS["CONFIRMED"],
        shift: RESERVATION_SHIFT["BREAKFAST"],
        start: "2018-08-10T10:45:00Z",
        end: "2018-08-10T11:30:00Z",
        quantity: 3,
        customer: {
            firstName: "Kayle",
            lastName: "Sartin"
        },
        area: RESERVATION_AREA["MAIN ROOM"],
        guestNotes: "Likes to sit next to the window"
    },
    {
        id: 17,
        businessDate: "13.08.2018",
        status: RESERVATION_STATUS["CHECKED OUT"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-13T16:00:00Z",
        end: "2018-08-13T17:00:00Z",
        quantity: 4,
        customer: {
            firstName: "Ced",
            lastName: "Baudic"
        },
        area: RESERVATION_AREA["MAIN ROOM"],
        guestNotes: ""
    },
    {
        id: 18,
        businessDate: "13.08.2018",
        status: RESERVATION_STATUS["NOT CONFIRMED"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-13T13:30:00Z",
        end: "2018-08-13T14:30:00Z",
        quantity: 6,
        customer: {
            firstName: "Eal",
            lastName: "Slatter"
        },
        area: RESERVATION_AREA["MAIN ROOM"],
        guestNotes: ""
    },
    {
        id: 19,
        businessDate: "12.08.2018",
        status: RESERVATION_STATUS["CHECKED OUT"],
        shift: RESERVATION_SHIFT["LUNCH"],
        start: "2018-08-12T14:15:00Z",
        end: "2018-08-12T15:00:00Z",
        quantity: 1,
        customer: {
            firstName: "Filmore",
            lastName: "McWard"
        },
        area: RESERVATION_AREA["MAIN ROOM"],
        guestNotes: ""
    },
    {
        id: 20,
        businessDate: "13.08.2018",
        status: RESERVATION_STATUS["NOT CONFIRMED"],
        shift: RESERVATION_SHIFT["DINNER"],
        start: "2018-08-13T19:00:00Z",
        end: "2018-08-13T23:00:00Z",
        quantity: 2,
        customer: {
            firstName: "Ronda",
            lastName: "Gidney"
        },
        area: RESERVATION_AREA["MAIN ROOM"],
        guestNotes: ""
    }
]