import axios from 'axios';

const KEY = 'BrDUQy9MltpcAPOJSqyDfcAbzRMuuG41';
const URL = 'https://api.nytimes.com/svc/';
const configAnswer = {
  baseURL: URL,
  header: {},
  params: {
    ['api-key']: KEY,
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

// {section: 'automobiles', display_name: 'Automobiles'}
// {section: 'books', display_name: 'Books'}
