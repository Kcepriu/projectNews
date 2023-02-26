import { useEffect, useState } from 'react';
import { fetchCategory } from 'services/fetchNews';

const useFetchCategories = () => {
  const COUNT_CATEGORIES_ROW = 6;
  const [catagoriesRow, setCatagoriesRow] = useState([]);
  const [catagoriesMenu, setCatagoriesMenu] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchAllCatogirie = async () => {
      setIsLoader(true);

      try {
        const { data } = await fetchCategory(controller);

        const { results } = data;
        setCatagoriesRow(results.slice(0, COUNT_CATEGORIES_ROW));
        setCatagoriesMenu(results.slice(COUNT_CATEGORIES_ROW));
      } catch (Error) {
        console.log('Error fetc categories');
      } finally {
        setIsLoader(false);
      }
    };

    fetchAllCatogirie();

    return () => {
      controller.abort();
    };
  }, []);

  return [isLoader, catagoriesRow, catagoriesMenu];
};

export default useFetchCategories;
