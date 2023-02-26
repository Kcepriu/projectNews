import GridNews from 'components/GridNews/GridNews';
import Loader from 'components/Loader/Loader';
import useFetchArticles from 'hooks/useFetchArticles';

const Home = () => {
  const [isLoader, articles] = useFetchArticles();

  return <>{isLoader ? <Loader /> : <GridNews articles={articles} />}</>;
};

export default Home;
