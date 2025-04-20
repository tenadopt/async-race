import { handleRace } from './handleRace';
import { setupResetHandlers } from './setupResetHandlers';

export const setupRaceHandlers = (): void => {
  document.getElementById('race')?.addEventListener('click', handleRace);
  setupResetHandlers();
};
