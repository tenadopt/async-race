const BASE_URL = 'http://localhost:3000';

export interface Car {
    name: string;
    color: string;
}

export interface CarWithId extends Car {
    id: number;
}

export const getCars = async ({
  page = 1,
  limit = 7,
}: { page?: number; limit?: number } = {}): Promise<{ cars: CarWithId[]; total: number }> => {
  const response = await fetch(`${BASE_URL}/garage?_page=${page}&_limit=${limit}`);
  const cars = await response.json();
  const total = Number(response.headers.get('X-Total-Count'));
  return { cars, total };
};

export const createCar = async (car: Car): Promise<CarWithId> => {
  const response = await fetch(`${BASE_URL}/garage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });
  return response.json();
};

export const getCar = async (id: number): Promise<CarWithId> => {
  const response = await fetch(`${BASE_URL}/garage/${id}`);
  return response.json();
};

export const updateCar = async (id: number, car: Car): Promise<CarWithId> => {
  const response = await fetch(`${BASE_URL}/garage/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });
  return response.json();
};

export const deleteCar = async (id: number): Promise<void> => {
  await fetch(`${BASE_URL}/garage/${id}`, { method: 'DELETE' });
};

export interface Winner {
    id: number;
    wins: number;
    time: number;
}

export const getWinners = async (
  sort?: string,
  order?: 'ASC' | 'DESC',
  page = 1,
  limit = 10,
) => {
  const url = new URL(`${BASE_URL}/winners`);
  url.searchParams.set('_page', page.toString());
  url.searchParams.set('_limit', limit.toString());
  if (sort) url.searchParams.set('_sort', sort);
  if (order) url.searchParams.set('_order', order);

  const response = await fetch(url.toString());
  const winners = await response.json();
  const total = Number(response.headers.get('X-Total-Count'));
  return { winners, total };
};

export const getWinner = async (id: number): Promise<Winner> => {
  const response = await fetch(`${BASE_URL}/winners/${id}`);
  if (!response.ok) throw new Error('Winner not found');
  return response.json();
};

export const createWinner = async (winner: Winner): Promise<Winner> => {
  const response = await fetch(`${BASE_URL}/winners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(winner),
  });
  return response.json();
};

export const updateWinner = async (id: number, winner: Winner): Promise<Winner> => {
  const response = await fetch(`${BASE_URL}/winners/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(winner),
  });
  return response.json();
};

export const deleteWinner = async (id: number): Promise<void> => {
  await fetch(`${BASE_URL}/winners/${id}`, { method: 'DELETE' });
};
