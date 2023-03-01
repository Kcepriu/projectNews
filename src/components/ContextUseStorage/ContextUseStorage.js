import useArticlesStorage from 'hooks/useArticlesStorage';
import { createContext, useContext } from 'react';

const NAME_STORAGE_FAVORITE = 'STORAGE_FAVORITE';
const NAME_STORAGE_READ = 'STORAGE_READ';

const MyContext = createContext();
const useContextStorage = () => useContext(MyContext);

const ContextUseStorage = ({ children }) => {
  const [favoriteNews, isFavorite, addToFavorite, deleteFromFavorite] =
    useArticlesStorage(NAME_STORAGE_FAVORITE);

  const [readNews, _, addToReadStorage] = useArticlesStorage(NAME_STORAGE_READ);

  const addToRead = article => {
    const prevArticles = readNews.find(element => {
      return element.id === article.id && element.dateRead === article.dateRead;
    });

    if (prevArticles) return;

    addToReadStorage(article, false);
  };

  const getFavoritArticles = (page = 1) => {
    return favoriteNews;
  };

  const getReadArticles = (page = 1) => {
    const newReadNews = {};
    readNews.map(element => {
      if (newReadNews[element.dateRead]) {
        newReadNews[element.dateRead].push(element);
      } else {
        newReadNews[element.dateRead] = [element];
      }
      return element;
    });
    return newReadNews;
  };

  return (
    <MyContext.Provider
      value={{
        favoriteNews,
        isFavorite,
        addToFavorite,
        deleteFromFavorite,
        readNews,
        addToRead,
        getFavoritArticles,
        getReadArticles,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { ContextUseStorage, useContextStorage };
