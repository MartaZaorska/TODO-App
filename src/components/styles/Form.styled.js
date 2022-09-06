import styled from 'styled-components';
import iconCheck from '../../assets/icon-check.svg';


export const Form = styled.form`
  background: ${({theme}) => theme.todoBackground};
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px){
    padding: 1rem 1.25rem;
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

export const CheckboxWrapper = styled.div`
  margin-inline-end: 0.6rem; 

  @media screen and (min-width: 768px){
    margin-inline-end: 1.2rem;
  }

  input { display: none; }

  label {
    display: block;
    width: 1.2rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 2px solid transparent;
    background-image: linear-gradient(${({theme}) => `${theme.todoBackground}, ${theme.todoBackground}`}),
                      linear-gradient(${({theme}) => `${theme.toggleBorderColor}, ${theme.toggleBorderColor}`});
    background-origin: border-box;
    background-clip: padding-box, border-box;
    cursor: pointer;
    transition: all 0.15s;

    @media screen and (min-width: 768px){
      width: 1.41rem;
    }
  }

  input:where(:focus, :hover) + label {
    background-image: linear-gradient(${({theme}) => `${theme.todoBackground}, ${theme.todoBackground}`}),
                      ${({theme}) => theme.linearGradient};
  }

  input:checked + label {
    background-image: url(${iconCheck}),
                      ${({theme}) => theme.linearGradient};
    background-repeat: no-repeat;
    background-size: 50%, cover;
    background-position: center;
  }
`;