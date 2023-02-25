import PropTypes from 'prop-types';
import { Button } from './ButtonCategorie.styled';

const ButtonCategorie = ({ id, onClickButton, children }) => {
  return (
    <Button type="button" name={id} onClick={onClickButton}>
      {children}
    </Button>
  );
};

ButtonCategorie.propTypes = {
  id: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
  children: PropTypes.node,
};
export default ButtonCategorie;
