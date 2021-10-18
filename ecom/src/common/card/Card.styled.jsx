import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
`;

export const NormalDiv = styled.div`
  visibility: ${({ visibility }) => (visibility ? visibility : 'hidden')};
  height: 50px;
  width: 100%;
  display: flex;
  background-color: ${({ background }) =>
    background ? background : 'transparent'};
  justify-content: space-between;
  align-items: center;
`;

export const TypeContainer = styled.div`
  height: 40px;
  width: 20%;
  display: flex;
  background-color: ${({ background }) =>
    background ? background : 'transparent'};
  color: white;
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const Font = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 300)};
`;
