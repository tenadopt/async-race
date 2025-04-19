import { getCar } from '../../api/carsApi';
import { Winner } from '../../types/types';

export const renderWinnersTable = async (
  winners: Winner[],
  page: number,
  limit: number,
  total: number,
) => {
  const tbody = document.getElementById('winners-body');
  const totalCount = document.getElementById('winners-count');
  const currentPage = document.getElementById('winners-page');

  if (totalCount) totalCount.textContent = total.toString();
  if (currentPage) currentPage.textContent = page.toString();

  if (tbody) {
    const rows = await Promise.all(winners.map(async (winner, idx) => {
      const car = await getCar(winner.id);
      return `
        <tr>
          <td>${(page - 1) * limit + idx + 1}</td>
          <td>
            <div class="car-icon"
                 style="background:${car.color}; width:50px; height:30px; border-radius:5px;"></div>
          </td>
          <td>${car.name}</td>
          <td>${winner.wins}</td>
          <td>${winner.time.toFixed(2)}</td>
        </tr>`;
    }));
    tbody.innerHTML = rows.join('');
  }
};
