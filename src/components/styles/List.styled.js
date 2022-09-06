import styled from 'styled-components';

export const List = styled.ul`
  border-radius: 0.3rem;
  overflow: hidden;
  margin-block: 1.15rem;

  box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.25);
  
  li:not(:first-child) {
    border-top: 1px solid ${({theme}) => theme.toggleBorderColor};
  }

  li {
    cursor: ${({cursor}) => cursor};
  }

  @media screen and (min-width: 768px){
    margin-block: 1.45rem;
  }
`;

export const Item = styled.li`
  background: ${({theme}) => theme.todoBackground};
  color: ${({theme}) => theme.filterColor};
  cursor: auto !important;

  div {
    justify-content: space-between;
    padding: 1.1rem;
  }

  button:hover {
    color: ${({theme}) => theme.hoverFilterColor};
  }

  @media screen and (min-width: 768px){
    div {
      padding: 0.4rem 1.25rem;
    }

    div :where(p, button) {
      font-size: 0.75rem;
    }
  }
`;

export const SmallText = styled.small`
  display: block;
  margin-block-start: 1.6rem;
  text-align: center;
  color: ${({theme}) => theme.filterColor};
  font-size: 0.7rem;
  
  @media screen and (min-width: 768px){
    font-size: 0.8rem;
    margin-block-start: 2.5rem;
  }
`;