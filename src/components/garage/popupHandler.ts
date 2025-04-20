let currentPopup: HTMLDivElement | null = null;

export const showPopup = (text: string) => {
  if (currentPopup) return;
  currentPopup = document.createElement('div');
  currentPopup.textContent = text;
  currentPopup.className = 'race-popup';
  Object.assign(currentPopup.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '28px',
    color: '#fff',
    background: 'rgba(255,165,0,0.9)',
    padding: '20px 40px',
    borderRadius: '10px',
    zIndex: '9999',
  });
  document.body.appendChild(currentPopup);
};

export const removePopup = () => {
  currentPopup?.remove();
  currentPopup = null;
};
