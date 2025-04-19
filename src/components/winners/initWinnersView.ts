import { renderWinnersView } from '../../views/winnersView';
import { getWinners } from '../../api/winnersTableApi';
import { renderWinnersTable } from './winnersTableRenderer';
import { setupPagination } from './winnersPagination';
import { setupSorting } from './winnersSorting';

let page = 1; const
  limit = 10;
let sort: 'wins' | 'time' | undefined;
let order: 'ASC' | 'DESC' = 'ASC';

export const initializeWinnersPage = async () => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = renderWinnersView();

  const loadData = async () => {
    const { winners, total } = await getWinners(sort, order, page, limit);
    await renderWinnersTable(winners, page, limit, total);
  };

  await loadData();

  setupPagination(
    () => { page = Math.max(1, page - 1); loadData(); },
    () => { page += 1; loadData(); },
  );

  setupSorting((field) => {
    sort = field;
    order = order === 'ASC' ? 'DESC' : 'ASC';
    loadData();
  });
};
