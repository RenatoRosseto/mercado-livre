import React, { useState, useContext } from 'react';
import Image from 'next/image';

import Card from 'components/atom/Card';
import { formatCurrency } from 'utils/formatCurrency';
import AppContext from 'context/AppContext';

import { ProductItemProps } from './ProductItem.types';
import {
  ProductItemWrapper,
  ProductImage,
  Brand,
  ProductName,
  Price,
  CartButton,
} from './ProductItem.styles';

const ProductItem: React.FC<ProductItemProps> = ({
  imageUrl,
  brand,
  name,
  price,
}: ProductItemProps) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const formattedPrice = formatCurrency(price);
  const [isHovered, setHovered] = useState(false);

  const handleAddToCart = () => {
    setCartItems([
      ...cartItems,
      {
        imageUrl: imageUrl,
        brand: brand,
        name: name,
        price: price,
      },
    ]);
  };

  return (
    <Card>
      <ProductItemWrapper
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {isHovered && (
          <CartButton onClick={handleAddToCart}>
            <Image
              src="/images/icon-add-cart.png"
              alt="image add item to cart"
              width={30}
              height={30}
            />
          </CartButton>
        )}
        <ProductImage src={imageUrl} alt={name} />
        <Brand>{brand}</Brand>
        <ProductName>{name}</ProductName>
        <Price>{formattedPrice}</Price>
      </ProductItemWrapper>
    </Card>
  );
};

export default ProductItem;
