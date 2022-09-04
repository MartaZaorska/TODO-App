import styled from 'styled-components';

export const Content = styled.div`
  background: ${({theme}) => theme.todoBackground};
  display: flex;
  align-items: center;
  padding: 0.85rem 1.1rem;

  @media screen and (min-width: 768px){
    padding: 1.1rem 1.25rem;
  }
`;