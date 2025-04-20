import { startEngine, driveCar } from '../../api/engineApi';
import { showPopup } from './popupHandler';
import { saveWinner } from './saveWinner';

let winnerAnnounced = false;

export const handleRace = async (): Promise<void> => {
  const carRows = Array.from(document.querySelectorAll('.car-row'));

  await Promise.all(carRows.map(async (row) => {
    const id = Number(row.getAttribute('data-id'));
    const carIcon = row.querySelector('.car-icon') as HTMLElement;
    const track = row.querySelector('.car-track') as HTMLElement;
    const startBtn = row.querySelector('.start-btn') as HTMLButtonElement;
    const name = row.querySelector('.car-name')?.textContent || `Car ${id}`;
    startBtn.disabled = true;

    try {
      const { velocity } = await startEngine(id);
      const distance = track.offsetWidth - carIcon.offsetWidth;
      const time = distance / velocity;
      carIcon.style.transition = `transform ${time}s linear`;
      carIcon.style.transform = `translateX(${distance}px)`;

      await driveCar(id);

      if (!winnerAnnounced) {
        winnerAnnounced = true;
        showPopup(`${name} won! (${time.toFixed(2)}s)`);
        await saveWinner(id, time);
      }
    } catch { /* Ignored */
    }
  }));
};
