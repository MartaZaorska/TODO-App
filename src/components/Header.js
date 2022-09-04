import { memo } from 'react';
import { Header as HeaderWrapper } from './styles';
import useThemeContext from '../context/ThemeContext';

import iconMoon from '../assets/icon-moon.svg';
import iconSun from '../assets/icon-sun.svg';

function Header() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <HeaderWrapper>
      <h1>TODO</h1>
      <button onClick={toggleTheme} aria-label='toggle theme'><img src={theme === "light" ? iconMoon : iconSun} alt="toggle theme icon" /></button>
    </HeaderWrapper>
  )
}

export default memo(Header);