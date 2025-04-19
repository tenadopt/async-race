export const setupSorting = (onSort: (field: 'wins' | 'time') => void) => {
  document.getElementById('sort-wins')?.addEventListener('click', () => onSort('wins'));
  document.getElementById('sort-time')?.addEventListener('click', () => onSort('time'));
};
