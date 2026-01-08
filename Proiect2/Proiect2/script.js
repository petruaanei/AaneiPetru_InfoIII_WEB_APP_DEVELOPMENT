const DISCOUNT_RATE = 0.10;

let selectedPrice = null;
let selectedName = null;

const cards = document.querySelectorAll(".model-item.selectable");
const selectedModelEl = document.getElementById("selectedModel");
const quantityEl = document.getElementById("quantity");
const calculateBtn = document.getElementById("calculateBtn");
const resultBox = document.getElementById("resultBox");

function formatEUR(value) {
  return "€" + Math.round(value).toLocaleString("en-US");
}

// Select model
cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");

    selectedPrice = Number(card.dataset.price);
    selectedName = card.dataset.model;

    selectedModelEl.textContent = selectedName;
    resultBox.innerHTML = "";
  });
});

// Calculate discount
calculateBtn.addEventListener("click", () => {
  const quantity = Number(quantityEl.value);

  if (!selectedName) {
    resultBox.innerHTML = `<p class="error">Please select a model first.</p>`;
    return;
  }

  const subtotal = selectedPrice * quantity;
  const discount = subtotal * DISCOUNT_RATE;
  const total = subtotal - discount;

  resultBox.innerHTML = `
    <p><strong>Model:</strong> ${selectedName}</p>
    <p><strong>Quantity:</strong> ${quantity}</p>
    <p><strong>Subtotal:</strong> ${formatEUR(subtotal)}</p>
    <p><strong>Discount (10%):</strong> -${formatEUR(discount)}</p>
    <p class="total"><strong>Total with discount:</strong> ${formatEUR(total)}</p>
  `;
});
