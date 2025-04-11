import {
  getCars,
  createCar,
  deleteCar,
  updateCar,
  getCar,
} from '../api/carsApi';
import { renderGarage } from '../views/garageViews';
import { generateRandomCars } from '../utils/random';
import { driveCar, startEngine, stopEngine } from '../api/engineApi';
import { animateCar } from '../utils/animation';

let currentPage = 1;
const limit = 7;
let selectedCarId: number | null = null;

const updateCarList = async () => {
  const list = document.getElementById('car-list');
  const count = document.getElementById('garage-count');
  const page = document.getElementById('garage-page');
  if (!list || !count || !page) return;

  const { cars, total } = await getCars({ page: currentPage, limit });
  count.textContent = total.toString();
  page.textContent = currentPage.toString();

  list.innerHTML = cars.map((car) => `
  <div class="car-row" data-id="${car.id}">
    
    <div class="car-top-panel">
      <div class="car-buttons">
        <button class="select-btn" data-id="${car.id}">SELECT</button>
        <button class="remove-btn" data-id="${car.id}">REMOVE</button>
      </div>
      <span class="car-name">${car.name}</span>
    </div>

    <div class="car-bottom-panel">
      <div class="engine-buttons">
        <button class="start-btn" data-id="${car.id}">A</button>
        <button class="stop-btn" data-id="${car.id}">B</button>
      </div>
      
      <div class="car-track">
        <div class="car-icon" style="color: ${car.color};">
          <svg fill="currentColor" viewBox="0 -43.92 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 122.88 35.03" xml:space="preserve" transform="rotate(180)matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style> <g> <path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"></path> </g> </g></svg>
        </div>
        <div class="flag">🏁</div>
      </div>
    </div>

  </div>
`).join('');

  document.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = Number((btn as HTMLButtonElement).dataset.id);
      await deleteCar(id);
      updateCarList();
    });
  });

  document.querySelectorAll('.select-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = Number((btn as HTMLButtonElement).dataset.id);
      const car = await getCar(id);

      const updateNameInput = document.getElementById('update-name') as HTMLInputElement;
      const updateColorInput = document.getElementById('update-color') as HTMLInputElement;

      updateNameInput.value = car.name;
      updateColorInput.value = car.color;

      selectedCarId = id;
    });
  });

  document.querySelectorAll('.start-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = Number((btn as HTMLButtonElement).dataset.id);
      const carRow = document.querySelector(`.car-row[data-id="${id}"]`);
      const carIcon = carRow?.querySelector('.car-icon') as HTMLElement;
      const track = carRow?.querySelector('.car-track') as HTMLElement;

      try {
        const { velocity } = await startEngine(id);
        const distance = track.offsetWidth - carIcon.offsetWidth;
        const time = distance / velocity;

        carIcon.style.transition = `transform ${time}s linear`;
        carIcon.style.transform = `translateX(${distance}px)`;

        const drive = await driveCar(id);

        if (!drive.success) {
          const computedStyle = getComputedStyle(carIcon);
          const matrix = new WebKitCSSMatrix(computedStyle.transform);
          const currentX = matrix.m41;

          carIcon.style.transition = 'none';
          carIcon.style.transform = `translateX(${currentX}px)`;
          console.warn(`Car ${id} is broken ${Math.round(currentX)}px`);
        }
      } catch (error) {
        console.error('The car does not work', error);
      }
    });
  });

  document.querySelectorAll('.stop-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = Number((btn as HTMLButtonElement).dataset.id);
      const carRow = document.querySelector(`.car-row[data-id="${id}"]`);
      const carIcon = carRow?.querySelector('.car-icon') as HTMLElement;

      await stopEngine(id);

      carIcon.style.transition = 'transform 1s linear';
      carIcon.style.transform = 'translateX(0)';
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

    if (selectedCarId === null) {
      alert('Сначала выберите машину кнопкой SELECT!');
      return;
    }

    const name = (document.getElementById('update-name') as HTMLInputElement).value;
    const color = (document.getElementById('update-color') as HTMLInputElement).value;

    await updateCar(selectedCarId, { name, color });

    selectedCarId = null;
    (document.getElementById('update-form') as HTMLFormElement).reset();

    updateCarList();
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
