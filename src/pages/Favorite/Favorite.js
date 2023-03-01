import { useContextStorage } from 'components/ContextUseStorage/ContextUseStorage';

import GridNews from 'components/GridNews/GridNews';
import GridLayout from 'layout/WrapGrid/GridLayout';

const Favorite = () => {
  const { getFavoritArticles } = useContextStorage();

  const articles = getFavoritArticles();

  return (
    <GridLayout>
      <GridNews articles={articles} />
    </GridLayout>
  );
};

export default Favorite;
