// Save quantities using item IDs instead of position

document.addEventListener("DOMContentLoaded", () => {
  const qtyCells = document.querySelectorAll(".qty");

  qtyCells.forEach(cell => {
    // Find the row's unique ID
    const row = cell.closest("[data-item-id]");
    if (!row) return;

    const itemId = row.dataset.itemId;
    const storageKey = `qty-${itemId}`;

    // Load saved quantity
    const savedQty = localStorage.getItem(storageKey);
    if (savedQty !== null) {
      cell.textContent = savedQty;
    }

    // Save when edited
    cell.addEventListener("input", () => {
      localStorage.setItem(storageKey, cell.textContent.trim());
    });
  });
});
