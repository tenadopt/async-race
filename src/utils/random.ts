const brands = ['BMW', 'Audi', 'Lada', 'Toyota', 'Honda', 'Tesla', 'Ford'];
const models = ['X5', 'A4', 'Granta', 'Corolla', 'Civic', 'Model 3', 'Focus'];

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

const getRandomName = () => `${brands[Math.floor(Math.random() * brands.length)]} ${
  models[Math.floor(Math.random() * models.length)]
}`;

export const generateRandomCars = async (count = 100) => {
  const requests = Array.from({ length: count }, () => ({
    name: getRandomName(),
    color: getRandomColor(),
  }));

  await Promise.all(requests.map((car) => fetch('http://localhost:3000/garage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })));
};
