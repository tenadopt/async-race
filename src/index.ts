import { initGarage } from './components/garageController';
import './styles/garage.css';

const app = document.getElementById('app');

const renderView = async (view: string): Promise<void> => {
  if (view === 'garage') {
    await initGarage();
  } else {
    app!.innerHTML = `
      <div class="top-panel">
        <div class="nav-buttons">
          <button id="garage-btn">TO GARAGE</button>
          <button id="winners-btn">TO WINNERS</button>
        </div>
        <h1 style="margin-top: 30px;">Winners Page</h1>
      </div>
    `;
  }

  document.getElementById('garage-btn')?.addEventListener('click', () => renderView('garage'));
  document.getElementById('winners-btn')?.addEventListener('click', () => renderView('winners'));

  window.history.pushState({ view }, '', `#${view}`);
};

window.onpopstate = () => {
  const view = window.location.hash.replace('#', '') || 'garage';
  renderView(view);
};

document.addEventListener('DOMContentLoaded', () => {
  renderView('garage');
});
