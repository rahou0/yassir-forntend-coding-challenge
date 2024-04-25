# Restaurant Reservation Management Interface for Yassir Frontend Coding Challenge 

A live demo of the project can be found [here](https://yassir-forntend-coding-challenge.vercel.app/).

## Features

### Reservations List

- Displays reservation data in a table format.
- Utilizes `@tanstack/react-table` (Headless UI) for table rendering.
- Mocks API calls using Redux Toolkit (RTK) since the application operates with mock data.

### Filters

- Multi-select filters for statuses, shifts, and areas.
- Range date filters for date-based filtering.
- `next-usequerystate` used for type-safe search params state management in Next.js.

### Sorting

- Supports both ascending (asc) and descending (desc) sorting for 'ID' and 'Customer' columns.
- Utilizes `next-usequerystate` to store the current sort state.

### Search

- Simple search input field with debounce functionality for efficient searching.

### Filter, Sort, and Search Functions

- Functions responsible for filtering, sorting, and searching can be found in `lib/filter-utils.ts`.

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. copy the .env.example content into .env
5. Start the development server using `npm run dev`.
