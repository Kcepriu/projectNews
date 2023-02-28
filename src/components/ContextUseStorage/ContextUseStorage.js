import useArticlesStorage from 'hooks/useArticlesStorage';
import { createContext, useContext } from 'react';

const NAME_STORAGE_FAVORITE = 'STORAGE_FAVORITE';
const NAME_STORAGE_READ = 'STORAGE_READ';

const MyContext = createContext();
const useContextStorage = () => useContext(MyContext);

const ContextUseStorage = ({ children }) => {
  const [favoriteNews, isFavorite, addToFavorite, deleteFromFavorite] =
    useArticlesStorage(NAME_STORAGE_FAVORITE);

  const [readNews, isRead, addToRead, deleteFromRead] =
    useArticlesStorage(NAME_STORAGE_READ);

  return (
    <MyContext.Provider
      value={{
        favoriteNews,
        isFavorite,
        addToFavorite,
        deleteFromFavorite,
        readNews,
        isRead,
        addToRead,
        deleteFromRead,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { ContextUseStorage, useContextStorage };
