export const setupPagination = (onPrevious: () => void, onNext: () => void) => {
  document.getElementById('prev-winners')?.addEventListener('click', onPrevious);
  document.getElementById('next-winners')?.addEventListener('click', onNext);
};
