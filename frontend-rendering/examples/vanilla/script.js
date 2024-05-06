const title = document.getElementById('title');
const inputField = document.getElementById('input-field');
const actionButton = document.getElementById('action-button');

const defaultTitle = title.innerText;

const resetTitle = () => {
  title.innerText = defaultTitle;
};

inputField.addEventListener('input', (event) => {
  title.innerText = event.target.value;

  if (event.target.value === '') {
    resetTitle();
  }
});

actionButton.addEventListener('click', () => {
  resetTitle();
  inputField.value = '';
});
