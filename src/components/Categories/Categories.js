import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import FilterMenu from 'components/FilterMenu/FilterMenu';
import FilterRow from 'components/FilterRow/FilterRow';

import { WrapCategories } from './Categories.styled';
import ButtonCategorie from 'components/ButtonCategorie/ButtonCategorie';

import IconToButton from 'components/IconToButton/IconToButton';
import useFetchCategories from 'hooks/useFetchCategories';
import Loader from 'components/Loader/Loader';
import OtherCaterories from 'components/OtherCaterories/OtherCaterories';

const Categories = ({ handlerClickCategory }) => {
  const buttonRef = useRef(null);
  const [showOhterCategories, setShowOtherCategiries] = useState(false);

  const [isLoader, catagoriesRow, catagoriesMenu] = useFetchCategories();

  const [positionOther, setPositionOther] = useState(null);

  const handlerClickOtherCategory = event => {
    setShowOtherCategiries(prev => !prev);

    const position = buttonRef.current.getBoundingClientRect();
    setPositionOther(position);
  };

  const handlerOnCloseModal = () => {
    setShowOtherCategiries(false);
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
          <ButtonCategorie
            ref={buttonRef}
            id="Other"
            onClickButton={handlerClickOtherCategory}
          >
            Other
            <IconToButton
              nameIcon={showOhterCategories ? 'icon-up' : 'icon-down'}
            />
          </ButtonCategorie>
        )}
      </WrapCategories>

      {showOhterCategories && (
        <OtherCaterories
          catagories={catagoriesMenu}
          position={positionOther}
          handlerOnCloseModal={handlerOnCloseModal}
        />
      )}
    </>
  );
};

Categories.propTypes = {
  handlerClickCategory: PropTypes.func.isRequired,
};

export default Categories;
