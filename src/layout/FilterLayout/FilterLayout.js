import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Categories from 'components/Categories/Categories';
import { Filters } from './FilterLayout.styled';

const FilterLayout = () => {
  const navigate = useNavigate();

  const handlerClickCategory = event => {
    navigate(`/news/${event.target.name}`);
  };

  return (
    <>
      <Filters>
        <Categories handlerClickCategory={handlerClickCategory} />
        {/* <p>Search date news</p> */}
      </Filters>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default FilterLayout;
