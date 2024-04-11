const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  let finalvalue = target.value.trim();
  let spacesTest = finalvalue.split(" ");
  
  if (finalvalue.length > 2 && finalvalue.length < 16 && spacesTest.length < 3) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location.href = 'src/pages/game.html';
};

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
