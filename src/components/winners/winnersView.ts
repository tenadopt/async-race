export const renderWinnersView = (): string => `
  <div class="winners-header">
    <button id="garage-btn">TO GARAGE</button>
    <h2>Winners (<span id="winners-count">0</span>)</h2>
    <h3>Page #<span id="winners-page">1</span></h3>
  </div>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Car</th>
        <th>Name</th>
        <th id="sort-wins">Wins ⬍</th>
        <th id="sort-time">Best time ⬍</th>
      </tr>
    </thead>
    <tbody id="winners-body"></tbody>
  </table>
  <div>
    <button id="prev-winners">← Prev</button>
    <button id="next-winners">Next →</button>
  </div>
`;
