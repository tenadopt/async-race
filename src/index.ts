import { initGarage } from './components/garageController';
import './styles/garage.css';

const app = document.getElementById('app');

const renderView = async (view: string): Promise<void> => {
  if (view === 'garage') {
    await initGarage();
  } else {
    app!.innerHTML = '<h1>Winners Page</h1>';
  }

  window.history.pushState({ view }, '', `#${view}`);
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('garage-btn')?.addEventListener('click', () => renderView('garage'));
  document.getElementById('winners-btn')?.addEventListener('click', () => renderView('winners'));
});

window.onpopstate = () => {
  const view = window.location.hash.replace('#', '') || 'garage';
  renderView(view);
};

renderView('garage');
