export const setupPagination = (
  onPrevious: () => void,
  onNext: () => void,
  currentPage: number,
  totalItems: number,
  limit: number,
) => {
  const prevBtn = document.getElementById('prev-winners') as HTMLButtonElement;
  const nextBtn = document.getElementById('next-winners') as HTMLButtonElement;

  const totalPages = Math.ceil(totalItems / limit);

  if (prevBtn) {
    prevBtn.disabled = currentPage <= 1;
    prevBtn.onclick = () => {
      if (currentPage > 1) onPrevious();
    };
  }

  if (nextBtn) {
    nextBtn.disabled = currentPage >= totalPages;
    nextBtn.onclick = () => {
      if (currentPage < totalPages) onNext();
    };
  }
};
