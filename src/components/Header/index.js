import { Wrapper } from './Header.styled';
import useThemeContext from '../../context/ThemeContext';

import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';

function Header() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Wrapper>
      <h1>TODO</h1>
      <button onClick={toggleTheme} aria-label='toggle theme'><img src={theme === "light" ? iconMoon : iconSun} alt="toggle theme icon" /></button>
    </Wrapper>
  )
}

export default Header