import {createCard} from './createCard.js';
import {fetchRequest} from './fetchRequest.js';

const getNews = (postfix) => fetchRequest(postfix, {
  callback: createCard,
});

const renderNews = (news, insertToElement) => {
  const {newsCards} = news;

  insertToElement.innerHTML = '';
  insertToElement.append(newsCards);
};

export {
  getNews,
  renderNews,
};
