import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchArticles } from 'services/fetchNews';

const useFetchArticles = () => {
  const filter = '';
  const { categoryId } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function startFetchArticles() {
      setIsLoader(true);

      try {
        const respons = await fetchArticles({
          nameCategory: categoryId,
          filter,
          controller,
        });
        setArticles(respons);
      } catch (Error) {
        console.log('Error fetch articles');
      } finally {
        setIsLoader(false);
      }
    }

    startFetchArticles();

    return () => {
      controller.abort();
    };
  }, [categoryId]);

  return [isLoader, articles, setArticles];
};

export default useFetchArticles;
