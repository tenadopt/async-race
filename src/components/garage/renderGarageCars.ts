import { getCars, deleteCar, getCar } from '../../api/carsApi';
import { getCarHTML } from './garageCarMarkup';

export const updateCarList = async (currentPage: number, limit: number): Promise<void> => {
  const list = document.getElementById('car-list');
  const count = document.getElementById('garage-count');
  const pageSpan = document.getElementById('garage-page');

  if (!list || !count || !pageSpan) return;

  const { cars, total } = await getCars({ page: currentPage, limit });
  count.textContent = total.toString();
  pageSpan.textContent = currentPage.toString();
  list.innerHTML = cars.map(getCarHTML).join('');

  document.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      await deleteCar(Number((btn as HTMLButtonElement).dataset.id));
      updateCarList(currentPage, limit);
    });
  });

  document.querySelectorAll('.select-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const car = await getCar(Number((btn as HTMLButtonElement).dataset.id));
      (document.getElementById('update-name') as HTMLInputElement).value = car.name;
      (document.getElementById('update-color') as HTMLInputElement).value = car.color;
    });
  });
};
