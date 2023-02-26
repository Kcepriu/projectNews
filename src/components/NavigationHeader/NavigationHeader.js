import { useLocation } from 'react-router-dom';
import { Nav, Link } from './NavigationHeader.styled';

const NavigationHeader = () => {
  const { pathname } = useLocation();
  const className = pathname.includes('/new') ? 'active' : '';

  return (
    <Nav>
      <li>
        <Link to="/" end className={className}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/favorite">Favorite</Link>
      </li>
      <li>
        <Link to="/read">Read</Link>
      </li>
    </Nav>
  );
};

export default NavigationHeader;
