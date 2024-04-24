

export interface ApiResponse<T> {
    statusCode: number,
    message?: string,
    reservations: T,
}
