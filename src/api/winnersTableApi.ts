import { BASE_URL } from '../types/types';

export const getWinners = async (
  sort?: string,
  order?: 'ASC' | 'DESC',
  page = 1,
  limit = 10,
) => {
  const url = new URL(`${BASE_URL}/winners`);
  url.searchParams.set('_page', page.toString());
  url.searchParams.set('_limit', limit.toString());
  if (sort) url.searchParams.set('_sort', sort);
  if (order) url.searchParams.set('_order', order);

  const response = await fetch(url.toString());
  const winners = await response.json();
  const total = Number(response.headers.get('X-Total-Count'));
  return { winners, total };
};
