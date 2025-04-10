import {
  getCars,
  createCar,
  deleteCar,
  // updateCar,
} from '../api/carsApi';
import { renderGarage } from '../views/garageViews';
import { generateRandomCars } from '../utils/random';

let currentPage = 1;
const limit = 7;

const updateCarList = async () => {
  const list = document.getElementById('car-list');
  const count = document.getElementById('garage-count');
  const page = document.getElementById('garage-page');
  if (!list || !count || !page) return;

  const { cars, total } = await getCars({ page: currentPage, limit });
  count.textContent = total.toString();
  page.textContent = currentPage.toString();

  list.innerHTML = cars.map((car) => `
  <div class="car-row">
    <button class="select-btn" data-id="${car.id}">SELECT</button>
    <button class="remove-btn" data-id="${car.id}">REMOVE</button>

    <button class="start-btn" data-id="${car.id}">A</button>
    <button class="stop-btn" data-id="${car.id}">B</button>

    <div class="car-icon" style="display:inline-block;width:80px;height:40px;background:${car.color};border-radius:10px;"></div>
    <span class="car-name">${car.name}</span>
    <div class="flag" style="margin-left:auto;">🏁</div>
  </div>
`).join('');

  document.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = Number((btn as HTMLButtonElement).dataset.id);
      await deleteCar(id);
      updateCarList();
    });
  });
};

export const initGarage = async () => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = renderGarage();
  await updateCarList();

  document.getElementById('create-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = (document.getElementById('create-name') as HTMLInputElement).value;
    const color = (document.getElementById('create-color') as HTMLInputElement).value;
    await createCar({ name, color });
    updateCarList();
  });

  document.getElementById('update-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Здесь будет обновление выбранной машины
  });

  document.getElementById('generate-cars')?.addEventListener('click', async () => {
    await generateRandomCars(100);
    updateCarList();
  });

  document.getElementById('prev-page')?.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage -= 1;
      updateCarList();
    }
  });

  document.getElementById('next-page')?.addEventListener('click', () => {
    currentPage += 1;
    updateCarList();
  });
};
