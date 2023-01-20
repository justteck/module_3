const getDate = stringDate =>
  stringDate.slice(0, 9).split('-').reverse().join('/');

const getTime = stringDate => stringDate.slice(-9, -4);

const loadImageAsync = async (img) => {
  const imgSrc = await new Promise((resolve) => {
    img.addEventListener('load', () => {
      resolve(img.src);
    });

    img.addEventListener('error', () => {
      img.src = '/image/no-photo.jpg';
      resolve(img.src);
    });
  });

  return imgSrc;
};

const createCard = async (err, {articles}) => {
  if (err) {
    console.warn(err);
    return;
  }

  const template = document.createDocumentFragment();

  const cardsPromises = articles.map(async news => {
    const card = document.createElement('li');
    card.className = 'news-item';

    const newsImgWrapper = document.createElement('div');
    newsImgWrapper.className = 'img-wrapper';

    const newsImg = document.createElement('img');
    newsImg.src = news.urlToImage ? news.urlToImage : '/image/no-photo.jpg';
    newsImg.src = await loadImageAsync(newsImg);
    newsImg.className = 'news-image';
    newsImg.alt = news.title;

    // newsImg.addEventListener('error', () => {
    //   newsImg.src = '/image/no-photo.jpg';
    // });

    const title = document.createElement('h3');
    title.className = 'news-title';

    const link = document.createElement('a');
    link.className = 'news-link';
    link.href = news.url;
    link.target = '_blank';
    link.textContent = news.title;

    const description = document.createElement('p');
    description.className = 'news-description';
    description.textContent = news.description;

    const footerWrapper = document.createElement('div');
    footerWrapper.className = 'news-footer';

    const datetime = document.createElement('time');
    datetime.className = 'news-datetime';
    datetime.datetime = news.publishedAt;

    const newsDate = document.createElement('span');
    newsDate.className = 'news-date';
    newsDate.textContent = getDate(news.publishedAt);

    const author = document.createElement('p');
    author.className = 'news-author';
    author.textContent = news.author ? news.author : 'Автор неизвестен';

    newsImgWrapper.append(newsImg);
    card.append(newsImgWrapper, title, description, footerWrapper);
    title.append(link);
    footerWrapper.append(datetime, author);
    datetime.append(newsDate, getTime(news.publishedAt));

    return card;
  });

  const cards = await Promise.all(cardsPromises);

  template.append(...cards);

  return {
    newsCards: template,
    newsCount: cards.length,
  };
};

export {
  createCard,
};
