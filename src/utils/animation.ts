export const animateCar = (
  carElement: HTMLElement,
  velocity: number,
  distance: number,
): Promise<void> => new Promise((resolve) => {
  const duration = distance / velocity;
  carElement.style.transition = `transform ${duration}s linear`;
  carElement.style.transform = `translateX(${distance}px)`;
  setTimeout(resolve, duration * 1000);
});

export const resetCar = (carElement: HTMLElement): void => {
  carElement.style.transition = 'none';
  carElement.style.transform = 'translateX(0)';
};
