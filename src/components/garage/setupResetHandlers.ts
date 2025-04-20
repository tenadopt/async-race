import { stopEngine } from '../../api/engineApi';
import { removePopup } from './popupHandler';
import { setWinnerAnnounced } from '../../store/winnerState';

const resetCar = async (row: Element) => {
  const id = Number(row.getAttribute('data-id'));
  const carIcon = row.querySelector('.car-icon') as HTMLElement;
  await stopEngine(id);
  carIcon.style.transition = 'none';
  carIcon.style.transform = 'translateX(0)';
};

export const setupResetHandlers = () => {
  document.getElementById('reset')?.addEventListener('click', async () => {
    const carRows = Array.from(document.querySelectorAll('.car-row'));
    await Promise.all(carRows.map(resetCar));
    removePopup();
    setWinnerAnnounced(false);
  });
};
