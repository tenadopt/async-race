import { getWinners } from '../../api/winnersTableApi';
import { renderWinnersTable } from './winnersTableRenderer';
import { setupPagination } from './winnersPagination';
import { LoadParams } from '../../types/types';

export const loadWinnersData = async (
  params: LoadParams,
  onPageChange: (newPage: number) => void,
): Promise<void> => {
  const {
    page, limit, sort, order,
  } = params;

  const { winners, total } = await getWinners(sort, order, page, limit);
  await renderWinnersTable(winners, page, limit, total);

  const totalPages = Math.ceil(total / limit);

  setupPagination(
    () => {
      if (page > 1) onPageChange(page - 1);
    },
    () => {
      if (page < totalPages) onPageChange(page + 1);
    },
    page,
    total,
    limit,
  );
};
