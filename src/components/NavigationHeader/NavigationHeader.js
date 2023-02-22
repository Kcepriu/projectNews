import { Nav, Link } from './NavigationHeader.styled';

const NavigationHeader = () => {
  return (
    <Nav>
      <li>
        <Link to="/" end>
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
