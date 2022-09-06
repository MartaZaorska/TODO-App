import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  text-align: center;
  color: ${({theme}) => theme.filterColor};
  line-height: 1.5;
  
  p {
    font-size: 0.7rem;
    color: ${({theme}) => theme.todoColor};
  }

  a { font-size: 1em; }
  a:hover { color: ${({theme}) => theme.activeFilterColor}; }
  
  @media screen and (min-width: 768px){
    p { font-size: 0.8rem; }
  }
`;