import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import useThemeContext from './context/ThemeContext';
import { lightTheme, darkTheme } from './data/constants';

import { GlobalStyles, Container } from './GlobalStyles';
import Header from './components/Header';

function App() {
  const { theme } = useThemeContext();
  const themeData = useMemo(() => theme === "light" ? lightTheme : darkTheme, [theme]);

  return (
    <ThemeProvider theme={themeData}>
      <>
        <GlobalStyles themeName={theme} />
        <Container>
          <Header />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
