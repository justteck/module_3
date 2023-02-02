import {el, setChildren} from 'redom';

// CREATE PAGE
// card plate at page top
const cardExpPlate = el('span.card__date', 'MM/YY');
const cardNamePlate = el('span.card__name', 'Card Holder');
const cardNumberPlate = el('span.card__number', 'xxxx xxxx xxxx xxxx');
const cardPlate = el('div.credit-card', [
  cardNumberPlate,
  el('div.card__personal', [
    cardNamePlate,
    cardExpPlate,
  ]),
]);

// form
// name input
const labelName =
  el('label.form__label form__holder-label',
      {
        for: 'name',
      },
      'Card Holder');
const inputName =
  el('input.input input__holder',
      {
        type: 'text',
        id: 'name',
        placeholder: 'Name Surname',
      });
const inputNameWrapper =
  el('div.form__input-wrap form__input-wrap_holder', [
    labelName,
    inputName,
  ]);

// card number input
const labelNumber =
  el('label.form__label form__number-label',
      {
        for: 'cardNumber',
      },
      'Card Number');
const inputNumber =
  el('input.input input__number',
      {
        id: 'cardNumber',
        placeholder: 'xxxx-xxxx-xxxx-xxxx',
      });
const inputNumberWrapper =
  el('div.form__input-wrap form__input-wrap_number', [
    labelNumber,
    inputNumber,
  ]);

// exp date input
const labelExp =
  el('label.form__label form__date-label',
      {
        for: 'date',
      },
      'Card Expiry');
const inputExp =
  el('input.input input__date',
      {
        type: 'text',
        id: 'date',
        placeholder: '__/__',
      });
const inputExpWrapper =
  el('div.form__input-wrap form__input-wrap_date', [
    labelExp,
    inputExp,
  ]);

// cvv input
const labelCVV =
  el('label.form__label form__cvv-label',
      {
        for: 'cvv',
      },
      'CVV');
const inputCVV =
  el('input.input input__cvv',
      {
        type: 'text',
        id: 'cvv',
        placeholder: '___',
      });
const inputCVVWrapper =
  el('div.form__input-wrap form__input-wrap_cvv', [
    labelCVV,
    inputCVV,
  ]);

// submit button
const button = el('button.form__button', 'CHECK OUT');

const form = el('form.form', {
  action: '#',
  id: 'form',
}, [
  inputNameWrapper,
  inputNumberWrapper,
  inputExpWrapper,
  inputCVVWrapper,
  button,
]);

// page content
const wrapper = el('div.wrapper', el('div.card', [
  el('p.secure', 'Secure Checkout'),
  cardPlate,
  form,
]));

setChildren(document.body, wrapper);

export {
  inputName,
  cardNamePlate,
  inputNumber,
  cardNumberPlate,
  inputExp,
  cardExpPlate,
  inputCVV,
};
