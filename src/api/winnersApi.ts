import { BASE_URL, Winner } from '../types/types';

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
