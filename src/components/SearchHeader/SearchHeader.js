import PropTypes from 'prop-types';
import { Input, FormSearch, Button } from './SearchHeader.styled';
const SearchHeader = ({ onSubmitForm }) => {
  return (
    <FormSearch onSubmit={onSubmitForm}>
      <Input
        name="searchFilm"
        type="text"
        autoComplete="on"
        autoFocus
        placeholder="Search films"
      />
      <Button type="submit">Search</Button>
    </FormSearch>
  );
};

SearchHeader.propTyoes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default SearchHeader;
