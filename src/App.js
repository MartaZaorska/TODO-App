import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import useThemeContext from './context/ThemeContext';
import { lightTheme, darkTheme } from './data/constants';

import { GlobalStyles, Container, Main } from './GlobalStyles';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  const { theme } = useThemeContext();
  const themeData = useMemo(() => theme === "light" ? lightTheme : darkTheme, [theme]);

  return (
    <ThemeProvider theme={themeData}>
      <>
        <GlobalStyles themeName={theme} />
        <Container>
          <Header />
          <Main>
            <TodoForm />
            <TodoList />
          </Main>
          <Footer />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
