import { renderWinnersView } from '../views/winnersView';
import { getWinners, getCar, Winner } from '../api/carsApi';

let page = 1;
const limit = 10;
let sort: 'id' | 'wins' | 'time' = 'id';
let order: 'ASC' | 'DESC' = 'ASC';

export const initWinners = async () => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = renderWinnersView();

  const tbody = document.getElementById('winners-body');
  const countSpan = document.getElementById('winners-count');
  const pageSpan = document.getElementById('winners-page');

  const { winners, total } = await getWinners(sort, order, page, limit);
  if (countSpan) countSpan.textContent = total.toString();
  if (pageSpan) pageSpan.textContent = page.toString();

  if (tbody) {
    tbody.innerHTML = (await Promise.all(
      winners.map(async (winner: Winner, index: number) => {
        const car = await getCar(winner.id);
        return `
          <tr>
            <td>${(page - 1) * limit + index + 1}</td>
            <td><div class="car-icon" style="background:${car.color};width:50px;height:30px;border-radius:5px;"></div></td>
            <td>${car.name}</td>
            <td>${winner.wins}</td>
            <td>${winner.time.toFixed(2)}</td>
          </tr>
        `;
      }),
    )).join('');
  }

  document.getElementById('prev-winners')?.addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      initWinners();
    }
  });

  document.getElementById('next-winners')?.addEventListener('click', () => {
    page += 1;
    initWinners();
  });

  document.getElementById('sort-wins')?.addEventListener('click', () => {
    sort = 'wins';
    order = order === 'ASC' ? 'DESC' : 'ASC';
    initWinners();
  });

  document.getElementById('sort-time')?.addEventListener('click', () => {
    sort = 'time';
    order = order === 'ASC' ? 'DESC' : 'ASC';
    initWinners();
  });
};
