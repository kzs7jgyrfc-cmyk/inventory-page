// Auto-save quantities in browser

window.onload = () => {
  const cells = document.querySelectorAll(".qty");

  cells.forEach((cell, index) => {
    const saved = localStorage.getItem("qty-" + index);
    if (saved) cell.innerText = saved;

    cell.addEventListener("input", () => {
      localStorage.setItem("qty-" + index, cell.innerText);
    });
  });
};
