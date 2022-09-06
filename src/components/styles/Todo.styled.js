import styled from 'styled-components';

export const TodoListItem = styled.div`
  p {
    flex-grow: 1;
    margin-inline-end: 0.6rem; 
    transform: translateY(15%);
    word-break: break-all;
  }

  s {
    color: ${({theme}) => theme.todoCompleteColor};
  }

  button {
    transform: translateY(15%);
    padding: 0.1rem;
    opacity: 0;
    transition: all 0.15s;
  }

  button img {
    width: 13px;
  }

  @media (hover: none){
    button { opacity: 1; }
  }
  
  @media (hover: hover){
    :hover button { opacity: 1; }
  }

  @media screen and (min-width: 768px){
    p {
      margin-inline-end: 1.2rem;
    }
  }
`;

export const Content = styled.div`
  background: ${({theme}) => theme.todoBackground};
  display: flex;
  align-items: center;
  padding: 0.85rem 1.1rem;

  p, button, s {
    font-size: 0.65rem;
    user-select: none;
  }

  @media screen and (min-width: 768px){
    padding: 1.1rem 1.25rem;
    p, button, s {
      font-size: 0.9rem;
    }
  }
`;