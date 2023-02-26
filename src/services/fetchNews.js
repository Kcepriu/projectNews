import axios from 'axios';

const KEY = 'BrDUQy9MltpcAPOJSqyDfcAbzRMuuG41';
const URL = 'https://api.nytimes.com/svc/';
const configAnswer = {
  baseURL: URL,
  header: {},
  params: {
    'api-key': KEY,
  },
};

// список категорій	            https://api.nytimes.com/svc/news/v3/content/section-list.json
// список новин по категоріям	  https://api.nytimes.com/svc/news/v3/content/all/climate.json
// список новин за пошуковим значенням	https://api.nytimes.com/svc/search/v2/articlesearch.json
// список популярних новин	    https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json

export async function fetchCategory(controller) {
  const result = await axios.get('news/v3/content/section-list.json', {
    ...configAnswer,
    signal: controller.signal,
  });

  return result;
}

export async function fetchPopularNews(controller) {
  const result = await axios.get('mostpopular/v2/viewed/1.json', {
    ...configAnswer,
    signal: controller.signal,
  });

  return result;
}

export async function fetchNewsCategory(nameCategory, controller) {
  const result = await axios.get(`news/v3/content/all/${nameCategory}.json`, {
    ...configAnswer,
    signal: controller.signal,
  });

  return result;
}

export async function fetchArticles({ nameCategory, filter, controller }) {
  let normalazeNews = [];

  if (nameCategory) {
    const resultQuery = await fetchNewsCategory(nameCategory, controller);
    const informations = resultQuery.data.results;

    normalazeNews = informations.map((element, index) =>
      normalizeFromCategory(element, index)
    );
  } else {
    const resultQuery = await fetchPopularNews(controller);

    const informations = resultQuery.data.results;

    normalazeNews = informations.map((element, index) =>
      normalizeFromPopular(element)
    );
  }
  return normalazeNews;
}

// * Category
function normalizeFromCategory(news, number) {
  const {
    slug_name,
    url,
    section,
    published_date,
    title,
    abstract,
    multimedia,
  } = news;

  //TODO - Зробити зображення
  return {
    id: slug_name + number,
    url,
    section,
    published_date,
    title,
    abstract,
    images: getImageInformationFromCategory(multimedia),
  };
}

function getImageInformationFromCategory(medias) {
  const resultObj = {};
  if (!medias) return resultObj;

  medias.map(element => {
    if (element.type === 'image') {
      resultObj[element.width] = element.url;
    }
    return element;
  });

  return resultObj;
}

// * Popular
function normalizeFromPopular(news) {
  const { id, url, section, published_date, title, abstract, media } = news;

  //TODO - Зробити зображення
  return {
    id: id.toString(),
    url,
    section,
    published_date,
    title,
    abstract,
    images: getImageInformationFromPopular(media),
  };
}

function getImageInformationFromPopular(medias) {
  const resultObj = {};

  medias.forEach(madiaElement => {
    if (madiaElement.type === 'image') {
      madiaElement['media-metadata'].map(
        element => (resultObj[element.width] = element.url)
      );
    }
  });

  return resultObj;
}

// {section: 'automobiles', display_name: 'Automobiles'}
// {section: 'books', display_name: 'Books'}
