import {
  getNews,
  renderNews,
} from './renderNews.js';

import {
  getSearchNews,
  getSearchPostfix,
  renderSearch,
} from './search.js';

import preloader from './preloader.js';

const form = document.querySelector('form');
const recentNewsSection = (document.querySelectorAll('.news-list'))[1];
const searchNewsSection = (document.querySelectorAll('.news-list'))[0];

const getSearchResults = (e) => {
  if (getSearchPostfix(e)) {
    return Promise.all(
        [
          // eslint-disable-next-line max-len
          getNews('/top-headlines?country=ru&pageSize=4&apiKey=295e2f0903d64673bcad652dc826da68'),
          getSearchNews(getSearchPostfix(e)),
        ]);
  } else {
    return null;
  }
};

// execute
// render recent news
preloader.show();
// eslint-disable-next-line max-len
renderNews(await getNews('/top-headlines?country=ru&pageSize=8&apiKey=295e2f0903d64673bcad652dc826da68'), recentNewsSection);
preloader.remove();

// render search
form.addEventListener('submit',
    async (e) => {
      preloader.show();
      const newsArray = await getSearchResults(e);

      if (newsArray) {
        renderNews(newsArray[0], recentNewsSection);
        renderSearch(newsArray[1], searchNewsSection);
      }

      preloader.remove();
    });

export {
  renderNews,
  getNews,
};
