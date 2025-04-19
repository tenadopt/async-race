import { BASE_URL, Car, CarWithId } from '../types/types';

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
