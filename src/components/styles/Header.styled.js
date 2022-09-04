import styled from 'styled-components';

export const Header = styled.header`
  color: ${({theme}) => theme.titleColor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    letter-spacing: 10px;
  }

  button img {
    height: 20px;
    width: auto;
  }

  @media screen and (min-width: 768px){
    h1 {
      font-size: 2.2rem;
      letter-spacing: 15px;
    }

    button img { height: 30px; }
  }
`;