const form = document.querySelector('form');
const select = document.querySelector('select');
const resContainer = document.querySelector('.result');

// filter .js .ts .jsx
const filterArray = () => {
  const array =
  [
    'module.jsx',
    'index.html',
    'style.css',
    'index.js',
    'file.ts',
    'library.css',
    'my.plugin.js',
  ];

  const regExp = /\w+\.(j\w+|t+\w+)/ig;

  resContainer.classList.remove('visually-hidden');
  document.querySelector('.one').classList.remove('visually-hidden');

  resContainer.append(array.join(' ').match(regExp));
};

// check email
const checkEmail = () => {
  document.querySelector('.two').classList.remove('visually-hidden');
  const emailForm = document.querySelector('.email-form');

  const check = (email) => {
    const regExp = /(\w+)@([a-z]{3,})(\.)([a-z]{2,5})\b/i;
    if (regExp.test(email)) {
      resContainer.classList.remove('visually-hidden');
      resContainer.textContent = 'Почта валидна';
    } else {
      resContainer.classList.remove('visually-hidden');
      resContainer.textContent = 'Почта не валидна';
    }
  };

  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailForm.email.value;
    check(email);
  });
};

// find text in brackets
const findInBrackets = () => {
  document.querySelector('.three').classList.remove('visually-hidden');
  const bracketsForm = document.querySelector('.brackets-form');

  const getTextInBrackets = (text) => {
    const regExp = /\((.+?)\)/ig;
    const textInBrackets = text.match(regExp);

    resContainer.classList.remove('visually-hidden');
    resContainer.textContent = textInBrackets;
  };

  bracketsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = bracketsForm.brackets.value;
    getTextInBrackets(text);
  });
};

const replaceUrl = () => {
  document.querySelector('.four').classList.remove('visually-hidden');
  const bracketsForm = document.querySelector('.url-form');

  const replaceUrl = (text) => {
    const regExp = /https?:\/\/([a-z0-9-]+)(\.)([a-z]+)\b/ig;
    const link = text.replace(regExp, (str) => {
      const regExp = /[a-z0-9-]+\.[a-z0-9-]+/;
      const site = str.match(regExp);
      return `<a href="${str}">${site}</a>`;
    });

    resContainer.classList.remove('visually-hidden');
    resContainer.textContent = link;
  };

  bracketsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = bracketsForm.url.value;
    replaceUrl(text);
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  resContainer.innerHTML = '';
  document.querySelectorAll('.task').
      forEach(p => p.classList.add('visually-hidden'));

  switch (select.value) {
    case 'array':
      filterArray();
      break;

    case 'email':
      checkEmail();
      break;

    case 'brackets':
      findInBrackets();
      break;

    case 'url':
      replaceUrl();
      break;
  }
});
