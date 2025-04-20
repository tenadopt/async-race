import { renderWinnersView } from '../../views/winnersView';
import { setupSorting } from './winnersSorting';
import { loadWinnersData } from './loadWinnersData';

let page = 1;
const limit = 10;
let sort: 'wins' | 'time' | undefined;
let order: 'ASC' | 'DESC' = 'ASC';

export const initializeWinnersPage = async (): Promise<void> => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = renderWinnersView();

  const updatePage = (newPage: number) => {
    page = newPage;
    loadWinnersData({
      page, limit, sort, order,
    }, updatePage);
  };

  await loadWinnersData({
    page, limit, sort, order,
  }, updatePage);

  setupSorting((field) => {
    sort = field;
    order = order === 'ASC' ? 'DESC' : 'ASC';
    loadWinnersData({
      page, limit, sort, order,
    }, updatePage);
  });
};
