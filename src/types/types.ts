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

export interface LoadParams {
    page: number;
    limit: number;
    sort?: 'wins' | 'time';
    order: 'ASC' | 'DESC';
}

export interface EngineResponse {
    velocity: number;
    distance: number;
}
