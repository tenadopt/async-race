import { renderGarage } from '../../views/garageViews';
import { updateCarList } from './renderGarageCars';
import { setupGarageForm } from './garageFormHandlers';
import { setupPagination } from './garagePagination';
import { setupRaceHandlers } from './setupRaceHandlers';

let currentPage = 1;
const limit = 7;

export const initGarage = async (): Promise<void> => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = renderGarage();
  await updateCarList(currentPage, limit);

  setupGarageForm(() => updateCarList(currentPage, limit));

  setupPagination(
    () => updateCarList(currentPage, limit),
    () => currentPage,
    (newPage: number) => { currentPage = newPage; },
  );

  setupRaceHandlers();
};
