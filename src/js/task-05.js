const inputEL = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEL.addEventListener('input', event => {
  return event.currentTarget.value
    ? (spanEl.textContent = event.currentTarget.value)
    : (spanEl.textContent = 'Anonymous');
});
