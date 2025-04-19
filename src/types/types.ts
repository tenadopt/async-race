export const BASE_URL = 'http://localhost:3000';

export interface Car {
    name: string;
    color: string;
}

export interface CarWithId extends Car {
    id: number;
}

export interface Winner {
    id: number;
    wins: number;
    time: number;
}

export interface GetWinnersParams {
    sort?: string;
    order?: 'ASC' | 'DESC';
    page?: number;
    limit?: number;
}

export interface EngineResponse {
    velocity: number;
    distance: number;
}
