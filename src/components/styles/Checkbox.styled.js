import styled from 'styled-components';
import iconCheck from '../../assets/icon-check.svg';

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
                      linear-gradient(hsl(192, 100%, 67%),  hsl(280, 87%, 65%));
  }

  input:checked + label {
    background-image: url(${iconCheck}),
                      linear-gradient(hsl(192, 100%, 67%),  hsl(280, 87%, 65%));
    background-repeat: no-repeat;
    background-size: 50%, cover;
    background-position: center;
  }
`;