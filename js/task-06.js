const input = document.querySelector('#validation-input');

input.addEventListener('blur', handleInputBlur);

function handleInputBlur() {
  const inputValue = input.value;
  const dataLength = Number(input.getAttribute('data-length'));

  if (inputValue.length === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
