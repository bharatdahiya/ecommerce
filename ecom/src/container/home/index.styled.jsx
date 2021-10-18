import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 80%;
  height: calc(100vh - 3.75rem);
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 25px;
  row-gap: 25px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    margin-top: 3.75rem;
    width: 90%;
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: auto;
    margin-top: 3.75rem;
  }
`;

export const Header = styled.div`
  width: 80%;
  height: 3.5rem;
  background-color: #b3d0eb;
  color: black;
  align-items: center;
  display: flex;
  padding: 0 10px;
  font-weight: 500;
  font-size: 20px;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select`
  margin: 0 10px;
`;
