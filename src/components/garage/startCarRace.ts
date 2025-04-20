import { startEngine, driveCar } from '../../api/engineApi';
import { showPopup } from './popupHandler';
import { isWinnerAnnounced, setWinnerAnnounced } from '../../store/winnerState';
import { saveWinner } from './saveWinner';
import { handleBrokenCar } from './handleBrokenCar';

export const startCarRace = async (row: Element): Promise<void> => {
  const id = Number(row.getAttribute('data-id'));
  const name = row.querySelector('.car-name')?.textContent || `Car ${id}`;
  const carIcon = row.querySelector('.car-icon') as HTMLElement;
  const track = row.querySelector('.car-track') as HTMLElement;
  const startBtn = row.querySelector('.start-btn') as HTMLButtonElement;
  startBtn.disabled = true;
  try {
    const { velocity } = await startEngine(id);
    const distance = track.offsetWidth - carIcon.offsetWidth;
    const time = distance / velocity;

    carIcon.style.transition = `transform ${time}s linear`;
    carIcon.style.transform = `translateX(${distance}px)`;
    const drive = await driveCar(id);

    if (!drive.success) {
      handleBrokenCar(carIcon, id);
      return;
    }

    const onFinish = () => {
      carIcon.removeEventListener('transitionend', onFinish);

      if (!isWinnerAnnounced()) {
        setWinnerAnnounced(true);
        showPopup(`${name} won! (${time.toFixed(2)}s)`);
        saveWinner(id, time);
      }
    };

    carIcon.addEventListener('transitionend', onFinish);
  } catch { /* Ignored */ }
};
