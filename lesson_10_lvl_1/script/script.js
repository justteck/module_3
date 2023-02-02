import {
  inputName,
  cardNamePlate,
  inputNumber,
  cardNumberPlate,
  inputExp,
  cardExpPlate,
  inputCVV,
} from './createPage.js';

// input card holder
inputName.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^a-zа-яё ]/ig, '');
  cardNamePlate.textContent = event.target.value;

  if (event.target.value.length === 0) {
    cardNamePlate.textContent = 'Card Holder';
  }
});

// input card number
inputNumber.addEventListener('input', (event) => {
  cardNumberPlate.textContent = event.target.value = event.target.value.
      replace(/\D/g, '').
      replace(/\d{4}/g, (str) => `${str}-`);

  if (event.target.value.length > 19) {
    cardNumberPlate.textContent = event.target.value =
      event.target.value.slice(0, 19);
  }
});

// input card date
inputExp.addEventListener('input', (event) => {
  cardExpPlate.textContent = event.target.value = event.target.value.replace(
      /[^0-9]/g, '').
      replace(/^([2-9])$/g, '0$1').
      replace(/^(1{1})([3-9]{1})$/g, '0$1/$2').
      replace(/^0{1,}/g, '0').
      replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2');

  if (event.target.value.length === 0) {
    cardExpPlate.textContent = 'MM/YY';
  }
});

// input card cvv
inputCVV.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/\D/g, '');

  if (event.target.value.length > 3) {
    event.target.value = event.target.value.slice(0, 3);
  }
});
