import styled from 'styled-components';

export const ProductItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  & span {
    width: 100%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 120px;
  margin-bottom: 8px;
`;

export const Brand = styled.span`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const ProductName = styled.span`
  margin-bottom: 8px;
  height: 38px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const CartButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
