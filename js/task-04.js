const counter = document.querySelector('#counter');
const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
const valueSpan = counter.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  updateValue();
}

function increment() {
  counterValue += 1;
  updateValue();
}

function updateValue() {
  valueSpan.textContent = counterValue;
}
