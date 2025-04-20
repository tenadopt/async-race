export const handleBrokenCar = (carIcon: HTMLElement, id: number): void => {
  const computedStyle = getComputedStyle(carIcon);
  const matrix = new DOMMatrix(computedStyle.transform);
  const currentX = matrix.m41;

  carIcon.style.transition = 'none';
  carIcon.style.transform = `translateX(${currentX}px)`;
  console.warn(`Car ${id} broke at ${Math.round(currentX)}px`);
};
