import PropTypes from 'prop-types';
import icons from '../../images/icons.svg';
import { Icon } from './IconToButton.styled';

const IconToButton = ({ nameIcon, className }) => {
  return (
    <Icon className={className}>
      <use href={`${icons}#${nameIcon}`}></use>
    </Icon>
  );
};

IconToButton.propTypes = {
  nameIcon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default IconToButton;
