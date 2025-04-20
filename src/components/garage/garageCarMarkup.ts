import { CarWithId } from '../../types/types';
import { carSvg } from './carIcon';

export const getCarHTML = (car: CarWithId): string => `
  <div class="car-row" data-id="${car.id}">
    <div class="car-top-panel">
      <button class="select-btn" data-id="${car.id}">SELECT</button>
      <button class="remove-btn" data-id="${car.id}">REMOVE</button>
      <span class="car-name">${car.name}</span>
    </div>
    <div class="car-bottom-panel">
      <button class="start-btn" data-id="${car.id}">A</button>
      <button class="stop-btn" data-id="${car.id}">B</button>
      <div class="car-track">
        <div class="car-icon" style="color:${car.color}">
          ${carSvg}
        </div>
        <div class="flag">🏁</div>
      </div>
    </div>
  </div>
`;
