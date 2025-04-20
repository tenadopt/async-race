export const setupPagination = (
  updateCarList: () => void,
  getCurrentPage: () => number,
  setCurrentPage: (page: number) => void,
) => {
  document.getElementById('prev-page')?.addEventListener('click', () => {
    if (getCurrentPage() > 1) {
      setCurrentPage(getCurrentPage() - 1);
      updateCarList();
    }
  });

  document.getElementById('next-page')?.addEventListener('click', () => {
    setCurrentPage(getCurrentPage() + 1);
    updateCarList();
  });
};
