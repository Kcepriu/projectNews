import { useContextStorage } from 'components/ContextUseStorage/ContextUseStorage';

import GridLayout from 'layout/WrapGrid/GridLayout';
import GridNews from 'components/GridNews/GridNews';
import ReadNewsForDay from 'components/ReadNewsForDay/ReadNewsForDay';

const Read = () => {
  const { getReadArticles } = useContextStorage();

  const articles = getReadArticles();

  return Object.keys(articles).map(element => {
    return (
      <GridLayout>
        <ReadNewsForDay dateNews={Number(element)}>
          <GridNews articles={articles[element]} />;
        </ReadNewsForDay>
      </GridLayout>
    );
  });
};

export default Read;
