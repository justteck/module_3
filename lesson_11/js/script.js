/* eslint-disable no-invalid-this */
const modalBtn = $('.present__btn');
const modalClode = $('.modal-order__close');
const modalOrder = $('.modal-order');

// form
modalBtn.on('click', () => {
  modalOrder.show(500);
});

modalClode.on('click', () => {
  modalOrder.hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function() {
  modalOrderTitle
      .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
});

modalOrderInput.blur(() => {
  modalOrderTitle.text('Заполните форму');
});

const modalOrderForm = $('.modal-order__form');

modalOrderForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle
          .text('Спасибо, Ваша заявка принята. Номер заявки ' + data.id);
      modalOrderForm.slideUp(300);
    },
    error() {
      modalOrderTitle.text('Что-то пошло не так =(');
    },
  });
});


// navigation
const navigation = $('.navigation');
const navigationCloseBtn = $('.navigation__close');

const controlClose = (e) => {
  if (e.target.closest('.navigation__close') ||
      (!navigation.is(e.target) &&
      !navigation.has(e.target).length)) {
    $('.navigation').animate({
      left: -400,
    }, 300, 'swing');
  }
};

$('.header__burger').on('click', () => {
  navigation.animate({
    left: 0,
  }, 500, () => {
    navigationCloseBtn.animate({
      opacity: 1,
    }, 600, 'swing', () => {
      $('body').on('click', controlClose);
    });
  });

  $('body').off('click', controlClose);
});
