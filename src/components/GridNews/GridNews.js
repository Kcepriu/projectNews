import PropTypes from 'prop-types';
import { GridCards, ItemGrid } from './GridNews.styled';
import CardNew from 'components/CardNew/CardNew';
// import { useEffect, useState } from 'react';

const GridNews = ({ articles, otherCards = {} }) => {
  const createItemsGrid = articles => {
    const changeArticles = articles.map((article, index) => {
      return (
        <ItemGrid key={article.id}>
          <CardNew article={article} />
        </ItemGrid>
      );
    });
    for (const key in otherCards) {
      changeArticles.splice(
        key - 1,
        0,
        <ItemGrid key={otherCards[key].id}>{otherCards[key].content}</ItemGrid>
      );
    }
    return changeArticles;
  };

  const newArticles = createItemsGrid(articles);
  return (
    <GridCards>
      {articles.length > 0 && newArticles}

      {/* {articles.length > 0 &&
        articles.map((article, index) => {
          return (
            <ItemGrid key={article.id}>
              <CardNew article={article} />
            </ItemGrid>
          );
        })} */}
    </GridCards>
  );
};

GridNews.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      abstract: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      images: PropTypes.object,
    }).isRequired
  ).isRequired,
  otherCards: PropTypes.object,
};

export default GridNews;
