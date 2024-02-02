import React from 'react';

import Card from 'components/atom/Card';
import { formatCurrency } from 'utils/formatCurrency';

import { ProductItemProps } from './ProductItem.types';
import {
  ProductItemWrapper,
  ProductImage,
  Brand,
  ProductName,
  Price,
} from './ProductItem.styles';

const ProductItem: React.FC<ProductItemProps> = ({
  imageUrl,
  brand,
  name,
  price,
}: ProductItemProps) => {
  const formattedPrice = formatCurrency(price);

  return (
    <Card>
      <ProductItemWrapper>
        <ProductImage src={imageUrl} alt={name} />
        <Brand>{brand ?? ''}</Brand>
        <ProductName>{name}</ProductName>
        <Price>{formattedPrice}</Price>
      </ProductItemWrapper>
    </Card>
  );
};

export default ProductItem;
