import styled from 'styled-components';

export const Form = styled.form`
  background: ${({theme}) => theme.todoBackground};
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  margin-block-end: 1.15rem;
  border-radius: 0.3rem;

  @media screen and (min-width: 768px){
    padding: 1rem 1.25rem;
    margin-block-end: 1.45rem;
  }
`;

export const Input = styled.input`
  font-size: 0.7rem;
  flex-grow: 1; 
  transform: translateY(10%);

  ::placeholder {
    color: ${({theme}) => theme.placeholderColor};
  }

  @media screen and (min-width: 768px){
    font-size: 0.9rem;
  }
`;