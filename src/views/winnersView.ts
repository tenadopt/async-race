export const renderWinnersView = (): string => `
  <div class="winners-header">
    <button id="garage-btn">TO GARAGE</button>
    <h2 class="winners-title">Winners (<span id="winners-count">0</span>)</h2>
    <h3 class="winners-page">Page #<span id="winners-page">1</span></h3>
  </div>

  <table class="winners-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Car</th>
        <th>Name</th>
        <th id="sort-wins">Wins ⬍</th>
        <th id="sort-time">Best time (seconds) ⬍</th>
      </tr>
    </thead>
    <tbody id="winners-body"></tbody>
  </table>

  <div class="pagination">
    <button id="prev-winners">← Prev</button>
    <button id="next-winners">Next →</button>
  </div>
`;
