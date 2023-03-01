import GridNews from 'components/GridNews/GridNews';
import Loader from 'components/Loader/Loader';
import Weather from 'components/Weather/Weather';
import useFetchArticles from 'hooks/useFetchArticles';

const Home = () => {
  const [isLoader, articles] = useFetchArticles();

  const otherCards = {
    3: { id: 'Weather3', content: <Weather /> },
  };

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <GridNews articles={articles} otherCards={otherCards} />
      )}
    </>
  );
};

export default Home;
