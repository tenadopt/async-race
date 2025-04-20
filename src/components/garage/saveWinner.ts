import { getWinner, createWinner, updateWinner } from '../../api/winnersApi';

export const saveWinner = async (id: number, time: number): Promise<void> => {
  try {
    const existing = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: existing.wins + 1,
      time: Math.min(existing.time, time),
    });
  } catch {
    await createWinner({ id, wins: 1, time });
  }
};
