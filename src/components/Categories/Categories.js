import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CategoriesMenu from 'components/CategoriesMenu';
import CategoriesRow from 'components/CategoriesRow';
import { fetchCategory } from 'services/fetchNews';
import { WrapCategories } from './Categories.styled';
import ButtonCategorie from 'components/ButtonCategorie';
import IconToButton from 'components/IconToButton';

const Categories = ({ handlerClickCategory }) => {
  const [catagoriesRow, setCatagoriesRow] = useState([]);
  const [catagoriesMenu, setCatagoriesMenu] = useState([]);
  const [showOhterCategories, setShowOtherCategiries] = useState(false);
  const COUNT_CATEGORIES_ROW = 6;

  useEffect(() => {
    const controller = new AbortController();

    const fetchAllCatogirie = async () => {
      try {
        const { data } = await fetchCategory(controller);

        const { results } = data;
        setCatagoriesRow(results.slice(0, COUNT_CATEGORIES_ROW));
        setCatagoriesMenu(results.slice(COUNT_CATEGORIES_ROW));
      } catch (Error) {
        console.log('Error fetc categories');
      }
    };

    fetchAllCatogirie();

    return () => {
      controller.abort();
    };
  }, []);

  const handlerClickOtherCategory = event => {
    setShowOtherCategiries(prev => !prev);
  };

  return (
    <>
      <WrapCategories>
        {catagoriesRow.length > 0 && (
          <CategoriesRow
            categories={catagoriesRow}
            handlerClickCategory={handlerClickCategory}
          />
        )}
        {catagoriesMenu.length > 0 && (
          <ButtonCategorie id="Other" onClickButton={handlerClickOtherCategory}>
            Other
            <IconToButton
              nameIcon={showOhterCategories ? 'icon-up' : 'icon-down'}
            />
          </ButtonCategorie>
        )}
      </WrapCategories>
      {/* {showOhterCategories && <CategoriesMenu catagories={catagoriesMenu} />} */}
    </>
  );
};

Categories.propTypes = {
  handlerClickCategory: PropTypes.func.isRequired,
};

export default Categories;
