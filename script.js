const btnEntra = document.getElementById('btn-entra');
const inputMail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const checkbox = document.getElementById('agreement');
const buttonEviar = document.getElementById('submit-btn');

btnEntra.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputMail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkbox.addEventListener('change', () => {
  if (buttonEviar.disabled) {
    buttonEviar.disabled = false;
  } else {
    buttonEviar.disabled = true;
  }
});
