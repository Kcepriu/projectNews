import Logo from 'components/Logo/Logo';
import NavigationHeader from 'components/NavigationHeader/NavigationHeader';
import SearchHeader from 'components/SearchHeader/SearchHeader';
import SwitchTheme from 'components/SwitchTheme/SwitchTheme';
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
