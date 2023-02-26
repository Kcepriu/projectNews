import PropTypes from 'prop-types';
import ButtonCategorie from 'components/ButtonCategorie/ButtonCategorie';
import { WrapCategories } from './FilterRow.styled';

const FilterRow = ({ categories, handlerClickCategory }) => {
  return (
    <WrapCategories>
      {categories.map(({ section, display_name }) => {
        return (
          <li key={section}>
            <ButtonCategorie id={section} onClickButton={handlerClickCategory}>
              {display_name}
            </ButtonCategorie>
          </li>
        );
      })}
    </WrapCategories>
  );
};

// {section: 'arts', display_name: 'Arts'}

FilterRow.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.exact({
      section: PropTypes.string.isRequired,
      display_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handlerClickCategory: PropTypes.func.isRequired,
};

export default FilterRow;
