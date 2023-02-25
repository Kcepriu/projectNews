import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { fetchArticles } from 'services/fetchNews';

const GridNews = ({ nameCategory }) => {
  //!  Винести в пропси
  const filter = '';

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function startFetchArticles() {
      try {
        const results = await fetchArticles({
          nameCategory,
          filter,
          controller,
        });

        console.log('fetchArticles', results);
      } catch (Error) {
        console.log('Error fetch articles');
      }
    }

    startFetchArticles();

    return () => {
      controller.abort();
    };
  }, [nameCategory]);

  return (
    <>
      <p>GridNews</p>
      {articles.map((element, index) => {
        return <p>{index}</p>;
      })}
    </>
  );
};

GridNews.propTypes = {
  nameCategory: PropTypes.string.isRequired,
};

export default GridNews;
