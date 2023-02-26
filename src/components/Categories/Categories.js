import { useState } from 'react';
import PropTypes from 'prop-types';
// import FilterMenu from 'components/FilterMenu/FilterMenu';
import FilterRow from 'components/FilterRow/FilterRow';

import { WrapCategories } from './Categories.styled';
import ButtonCategorie from 'components/ButtonCategorie/ButtonCategorie';

import IconToButton from 'components/IconToButton/IconToButton';
import useFetchCategories from 'hooks/useFetchCategories';
import Loader from 'components/Loader/Loader';

const Categories = ({ handlerClickCategory }) => {
  const [showOhterCategories, setShowOtherCategiries] = useState(false);

  const [isLoader, catagoriesRow, catagoriesMenu] = useFetchCategories();

  const handlerClickOtherCategory = event => {
    setShowOtherCategiries(prev => !prev);
  };

  return (
    <>
      <WrapCategories>
        {isLoader && <Loader />}

        {catagoriesRow.length > 0 && (
          <FilterRow
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
      {/* {showOhterCategories && <FilterMenu catagories={catagoriesMenu} />} */}
    </>
  );
};

Categories.propTypes = {
  handlerClickCategory: PropTypes.func.isRequired,
};

export default Categories;
