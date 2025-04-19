import { BASE_URL, EngineResponse } from '../types/types';

export const startEngine = async (id: number): Promise<EngineResponse> => {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=started`, {
    method: 'PATCH',
  });
  return response.json();
};

export const stopEngine = async (id: number): Promise<EngineResponse> => {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  return response.json();
};

export const driveCar = async (id: number): Promise<{ success: boolean }> => {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  });
  if (response.status !== 200) return { success: false };
  return { success: true };
};
