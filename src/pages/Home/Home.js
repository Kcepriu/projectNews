import GridNews from 'components/GridNews/GridNews';
import Loader from 'components/Loader/Loader';
import useFetchArticles from 'hooks/useFetchArticles';

const Home = () => {
  const [isLoader, articles] = useFetchArticles();

  const otherCards = { 3: <p>Test</p> };

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
