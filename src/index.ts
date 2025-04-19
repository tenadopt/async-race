import { initGarage, removePopup } from './components/garageController';
import './styles/garage.css';
import { initializeWinnersPage } from './components/winners/initWinnersView';

const app = document.getElementById('app');

const renderView = async (view: string): Promise<void> => {
  if (!app) return;

  removePopup();

  window.history.pushState({ view }, '', `#${view}`);

  if (view === 'garage') {
    await initGarage();
  } else if (view === 'winners') {
    await initializeWinnersPage();
  }

  document.getElementById('garage-btn')?.addEventListener('click', () => renderView('garage'));
  document.getElementById('winners-btn')?.addEventListener('click', () => renderView('winners'));
};

window.onpopstate = () => {
  const view = window.location.hash.replace('#', '') || 'garage';
  renderView(view);
};

document.addEventListener('DOMContentLoaded', () => {
  const view = window.location.hash.replace('#', '') || 'garage';
  renderView(view);
});
