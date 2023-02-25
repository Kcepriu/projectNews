import { useState } from 'react';
import GridNews from 'components/GridNews';
import Categories from 'components/Categories';
import { Filters } from './Home.styled';

const Home = () => {
  const [nameCategory, setNameCategiry] = useState('');

  const handlerClickCategory = event => {
    setNameCategiry(event.target.name);
  };

  return (
    <>
      <Filters>
        <Categories handlerClickCategory={handlerClickCategory} />
        <p>Search date news</p>
      </Filters>
      <GridNews nameCategory={nameCategory} />
    </>
  );
};

export default Home;
