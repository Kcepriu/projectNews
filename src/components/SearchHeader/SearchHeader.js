import PropTypes from 'prop-types';
import {
  Input,
  FormSearch,
  WrapSearch,
  IconSearch,
} from './SearchHeader.styled';

const SearchHeader = ({ onSubmitForm }) => {
  return (
    <FormSearch onSubmit={onSubmitForm}>
      <WrapSearch>
        <IconSearch width="20" />
        <Input
          name="searchFilm"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search films"
        />
      </WrapSearch>

      {/* icon-search */}
    </FormSearch>
  );
};

SearchHeader.propTyoes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default SearchHeader;
