import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.25);

  div {
    justify-content: center;
  }
`;

export const FiltersContent = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  input { display: none; }
  label {
    color: ${({theme}) => theme.filterColor};
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: capitalize;
    transition: color 0.1s;
    cursor: pointer;
  }

  label:hover {
    color: ${({theme}) => theme.hoverFilterColor};
  }

  input:checked + label {
    color: ${({theme}) => theme.activeFilterColor};
  }
`;