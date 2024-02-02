import styled from 'styled-components';

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  & span {
    width: 100%;
    text-align: left;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

export const Brand = styled.span`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const ProductName = styled.span`
  margin-bottom: 8px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
