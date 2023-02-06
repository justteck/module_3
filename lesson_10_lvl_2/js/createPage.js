import {el, setChildren} from 'redom';
import {
  cardSvgFront,
  cardSvgBack,
  paymentSystem,
} from './cardSvg.js';

// CREATE PAGE
// create card
const title = el('div.payment-title', el('h1', 'Payment Information'));
const cardFront = el('div.front', el('div#ccsingle'));
const cardBack = el('div.back');

cardBack.insertAdjacentHTML('beforeend', cardSvgBack);
cardFront.insertAdjacentHTML('beforeend', cardSvgFront);

const card = el('div.creditcard', [
  cardFront,
  cardBack,
]);
const cardContainer = el('div.container', card);

// create form
// name field
const nameLabel = el('label', {
  for: 'name',
}, 'Name');
const nameInput = el('input#name', {
  maxlength: '20',
  type: 'text',
});
const nameContainer = el('div.field-container', [
  nameLabel,
  nameInput,
]);

// card number field
const numberLabel = el('label', {
  for: 'cardnumber',
}, 'Card Number');

const numberInput = el('input#cardnumber', {
  inputmode: 'numeric',
  type: 'text',
});

const numberContainer = el('div.field-container', [
  numberLabel,
  numberInput,
]);

numberContainer.insertAdjacentHTML('beforeend', paymentSystem);

// expiration date field
const expLabel = el('label', {
  for: 'expirationdate',
}, 'Expiration (mm/yy)');

const expInput = el('input#expirationdate', {
  inputmode: 'numeric',
  type: 'text',
});

const expContainer = el('div.field-container', [
  expLabel,
  expInput,
]);

// cvv field
const cvvLabel = el('label', {
  for: 'securitycode',
}, 'Security Code');

const cvvInput = el('input#securitycode', {
  inputmode: 'numeric',
  type: 'text',
});

const cvvContainer = el('div.field-container', [
  cvvLabel,
  cvvInput,
]);

// insert all elements into the form
const formContainer = el('div.form-container', [
  nameContainer,
  numberContainer,
  expContainer,
  cvvContainer,
]);


// render
export const renderPage = () => {
  setChildren(document.body, [
    title,
    cardContainer,
    formContainer,
  ]);
};
