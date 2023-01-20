import {getNews, renderNews} from './renderNews.js';
import {correctWordEndings} from './correctWordsEndings.js';

const input = document.querySelector('.search-input');
const searchTitle = document.querySelector('h2.title');
const searchSection = document.querySelector('section.news');

const getSearchPostfix = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const dataToFind = Object.fromEntries(formData);

  if (dataToFind.search && dataToFind.country) {
    input.dataset.lastValue = dataToFind.search;

    const postfix =
      // eslint-disable-next-line max-len
      `/top-headlines?country=${dataToFind.country}&q=${dataToFind.search}&pageSize=8&apiKey=295e2f0903d64673bcad652dc826da68`;

    return postfix;
  } else {
    input.value = 'Введите запрос и выберите страну';
    input.style.border = '1px solid red';

    setTimeout(() => {
      input.value = '';
      input.style.border = '';
    }, 2000);

    return;
  }
};

const getSearchNews = async (postfix) => await getNews(postfix);

const renderSearch = (searchNews, insertToElement) => {
  const {newsCount} = searchNews;
  searchTitle.classList.remove('visually-hidden');
  searchSection.classList.remove('visually-hidden');

  searchTitle.textContent =
    `По вашему запросу “${input.dataset.lastValue}”
    найдено ${newsCount}
    ${correctWordEndings(newsCount, 'результат', 'результата', 'результатов')}`;

  renderNews(searchNews, insertToElement);
};

export {
  getSearchNews,
  getSearchPostfix,
  renderSearch,
};
