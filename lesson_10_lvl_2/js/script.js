import CreditCardInputMask from 'credit-card-input-mask';
import {renderPage} from './createPage.js';
import {mask} from './mask.js';

// Что-бы перевернуть карту используйте класс flipped
// для элемента с классом creditcard

// данные для определения типа карты
// для вставки логотипа и иконки уже полученны элементы выше ccicon и cclogo

// render
renderPage();

// elements
const name = document.getElementById('name');
const nameCard = document.querySelector('#svgname');
const nameCardBack = document.querySelector('#svgnameback');
const number = document.getElementById('cardnumber');
const numberCard = document.querySelector('#svgnumber');
const expirationDate = document.getElementById('expirationdate');
const expirationDateCard = document.querySelector('#svgexpire');
const securitycode = document.getElementById('securitycode');
const securitycodeCard = document.querySelector('#svgsecurity');
const ccicon = document.getElementById('ccicon');
const cclogo = document.getElementById('ccsingle');
const svgname = document.getElementById('svgname');
const lightcolor = document.querySelectorAll('.lightcolor');
const darkcolor = document.querySelectorAll('.darkcolor');
const creditcard = document.querySelector('.creditcard');

// смена цвета у карточки
const swapColor = color => {
  lightcolor.forEach(input => {
    input.setAttribute('class', `lightcolor ${color}`);
  });
  darkcolor.forEach(input => {
    input.setAttribute('class', `darkcolor ${color}dark`);
  });
};

// show card back
const showCardBack = (event) => {
  creditcard.classList.add('flipped');
  securitycodeCard.textContent = event.target.value;
};

// show card front
const showCardFront = () =>
  creditcard.classList.remove('flipped');

// execute
// mask input number
new CreditCardInputMask({
  element: number,
  pattern: '{{9999}} {{9999}} {{9999}} {{9999}}',
});

// mask cvv
new CreditCardInputMask({
  element: securitycode,
  pattern: '{{999}}',
});

// input card holder
name.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^a-zа-яё ]/ig, '');
  nameCard.textContent = nameCardBack.textContent = event.target.value;

  if (event.target.value.length === 0) {
    svgname.textContent = 'CARD HOLDER';
  }
});

// input exp date
expirationDate.addEventListener('input', (event) => {
  expirationDateCard.textContent =
    event.target.value = event.target.value.replace(
        /[^0-9]/g, '').
        replace(/^([2-9])$/g, '0$1').
        replace(/^(1{1})([3-9]{1})$/g, '0$1/$2').
        replace(/^0{1,}/g, '0').
        replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2');

  if (event.target.value.length === 0) {
    expirationDateCard.textContent = 'MM/YY';
  }
});

// input card number
number.addEventListener('input', (event) => {
  const currentNumber = event.target.value;
  numberCard.textContent = currentNumber;

  // change card payment system
  const changeCard = (cardMask) => {
    const regex = new RegExp(cardMask.regex);

    if (regex.test(currentNumber)) {
      swapColor(cardMask.color);
      ccicon.innerHTML = cardMask.icon ? cardMask.icon : '';
      cclogo.innerHTML = cardMask.logo ? cardMask.logo : '';
      return true;
    } else return false;
  };

  mask.some(changeCard);

  if (event.target.value.length === 0) {
    numberCard.textContent = 'XXXX XXXX XXXX XXXX';
  }
});

securitycode.addEventListener('input', showCardBack);
securitycode.addEventListener('focus', showCardBack);
securitycode.addEventListener('blur', showCardFront);
