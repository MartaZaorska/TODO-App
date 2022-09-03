import styled, { createGlobalStyle } from 'styled-components'

import bgMobileDark from './assets/bg-mobile-dark.jpg';
import bgMobileLight from './assets/bg-mobile-light.jpg';
import bgDesktopDark from './assets/bg-desktop-dark.jpg';
import bgDesktopLight from './assets/bg-desktop-light.jpg';

export const GlobalStyles = createGlobalStyle`
  *, html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 18px;
    -webkit-tap-highlight-color: transparent;
  }

  input,
  input::placeholder,
  button,
  a {
    background: transparent;
    font-family: inherit;
    text-decoration: none;
    color: inherit;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  button, a {
    cursor: pointer;
  }

  input:active,
  input:focus,
  button:active,
  button:focus,
  a:active,
  a:focus {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: ${({theme}) => theme.bodyBackground};
    background-image: url(${({themeName}) => themeName === "light" ? bgMobileLight : bgMobileDark});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    color: ${({ theme }) => theme.todoColor};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    font-display: fallback;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;

    @media screen and (min-width: 576px){
      background-image: url(${({themeName}) => themeName === "light" ? bgDesktopLight : bgDesktopDark});
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`

export const Container = styled.main`
  width: 100%;
  max-width: 610px;
  padding: 1.4rem;
  margin-block: 1.3rem;
  margin-inline: auto;

  border: 1px solid yellow;

  @media screen and (min-width: 768px){
    margin-block: 2.2rem;
    padding: 1.95rem;
  }
`;