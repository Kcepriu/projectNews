import PropTypes from 'prop-types';
import { GridCards, ItemGrid } from './GridNews.styled';
import CardNew from 'components/CardNew/CardNew';

const GridNews = ({ articles }) => {
  return (
    <GridCards>
      {articles.map((article, index) => {
        return (
          <ItemGrid key={article.id}>
            <CardNew article={article} />
          </ItemGrid>
        );
      })}
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
};

export default GridNews;
