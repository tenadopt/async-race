import { createCar, updateCar } from '../../api/carsApi';

export const setupGarageForm = (updateCarList: () => void) => {
  let selectedCarId: number | null = null;

  document.getElementById('create-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = (document.getElementById('create-name') as HTMLInputElement).value;
    const color = (document.getElementById('create-color') as HTMLInputElement).value;
    await createCar({ name, color });
    updateCarList();
  });

  document.getElementById('update-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (selectedCarId === null) return;
    const name = (document.getElementById('update-name') as HTMLInputElement).value;
    const color = (document.getElementById('update-color') as HTMLInputElement).value;
    await updateCar(selectedCarId, { name, color });
    selectedCarId = null;
    (e.target as HTMLFormElement).reset();
    updateCarList();
  });

  document.querySelectorAll('.select-btn').forEach((btn) => btn.addEventListener('click', () => {
    selectedCarId = Number((btn as HTMLButtonElement).dataset.id);
  }));
};
