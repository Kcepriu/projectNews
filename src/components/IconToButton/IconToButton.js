import PropTypes from 'prop-types';
import icons from '../../images/icons.svg';
import { Icon } from './IconToButton.styled';

const IconToButton = ({ nameIcon }) => {
  return (
    <Icon>
      <use href={`${icons}#${nameIcon}`}></use>
    </Icon>
  );
};

IconToButton.propTypes = {
  nameIcon: PropTypes.string.isRequired,
};

export default IconToButton;
