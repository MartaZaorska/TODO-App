import styled from 'styled-components';

export const TodoListItem = styled.li`
  cursor: grab;
  
  :not(:last-child){
    border-bottom: 1px solid ${({theme}) => theme.toggleBorderColor};
  }

  p {
    flex-grow: 1;
    margin-inline-end: 0.6rem; 
    font-size: 0.65rem;
    transform: translateY(15%);
  }

  s {
    font-size: 1em;
    color: ${({theme}) => theme.todoCompleteColor};
  }

  button {
    transform: translateY(15%);
    padding: 0.1rem;
  }

  button img {
    width: 13px;
    fill: ${({theme}) => theme.deleteButtonColor};
  }

  @media screen and (min-width: 768px){
    p {
      margin-inline-end: 1.2rem;
      font-size: 0.9rem;
    }

    button {
      opacity: 0;
      transition: all 0.15s;
    }

    :hover button {
      opacity: 1;
    }
  }
`;