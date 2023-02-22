import Logo from 'components/Logo';
import NavigationHeader from 'components/NavigationHeader';
import SearchHeader from 'components/SearchHeader';
import SwitchTheme from 'components/SwitchTheme';
import { HeaderPage } from './Header.styled';
const Header = () => {
  return (
    <HeaderPage>
      <Logo />
      <NavigationHeader />
      <SearchHeader />
      <SwitchTheme />
    </HeaderPage>
  );
};

export default Header;
