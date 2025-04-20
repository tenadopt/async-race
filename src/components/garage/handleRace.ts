import { startCarRace } from './startCarRace';
import { setWinnerAnnounced } from '../../store/winnerState';

export const handleRace = async (): Promise<void> => {
  const carRows = Array.from(document.querySelectorAll('.car-row'));
  setWinnerAnnounced(false);

  await Promise.all(carRows.map((row) => startCarRace(row)));
};
