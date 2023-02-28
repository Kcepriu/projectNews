import { useEffect, useState } from 'react';
import { saveToStorage, loadFromStorage } from 'helpers/storage';

const useArticlesStorage = nameStorage => {
  const [articlesStorage, setArticlesStarage] = useState(() =>
    loadFromStorage(nameStorage)
  );

  function isArticle(article) {
    return articlesStorage.find(element => element.id === article.id);
  }

  function addArticle(article) {
    if (isArticle(article)) return;
    setArticlesStarage(prev => [...prev, article]);
  }

  function deleteArticle(article) {
    setArticlesStarage(prev =>
      prev.filter(element => element.id !== article.id)
    );
  }

  useEffect(() => {
    saveToStorage(nameStorage, articlesStorage);
  }, [nameStorage, articlesStorage]);

  return [articlesStorage, isArticle, addArticle, deleteArticle];
};

export default useArticlesStorage;
