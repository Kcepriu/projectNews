import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Button } from './ButtonCategorie.styled';

const ButtonCategorie = ({ id, onClickButton, children }) => {
  const { categoryId } = useParams();
  const className = categoryId === id ? 'Active' : '';

  return (
    <Button
      type="button"
      name={id}
      onClick={onClickButton}
      className={className}
    >
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
