export const renderGarage = (): string => `
  <div class="garage-header">
    <button id="garage-btn">TO GARAGE</button>
    <button id="winners-btn">TO WINNERS</button>
  </div>

  <div class="garage-controls">
    <form id="create-form" class="form-inline">
      <input type="text" id="create-name" placeholder="Car name" required />
      <input type="color" id="create-color" value="#ffffff" />
      <button type="submit">CREATE</button>
    </form>

    <form id="update-form" class="form-inline">
      <input type="text" id="update-name" placeholder="New name" />
      <input type="color" id="update-color" value="#000000" />
      <button type="submit">UPDATE</button>
    </form>

    <div class="garage-buttons">
      <button id="race">RACE</button>
      <button id="reset">RESET</button>
      <button id="generate-cars">GENERATE CARS</button>
    </div>
  </div>

  <h2 class="garage-title">Garage (<span id="garage-count">0</span>)</h2>
  <h3 class="garage-page">Page #<span id="garage-page">1</span></h3>

  <div id="car-list" class="garage-list"></div>

  <div class="pagination">
    <button id="prev-page">← Prev</button>
    <button id="next-page">Next →</button>
  </div>
`;
