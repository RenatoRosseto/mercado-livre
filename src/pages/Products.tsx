import React, { useEffect } from 'react';
import styled from 'styled-components';

import ProductItem from 'components/molecule/ProductItem';
import fetchProducts from 'api/fetchProducts';

function Products() {
  const ContainerProductList = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;

    @media (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `;

  const productData = {
    imageUrl: 'http://http2.mlstatic.com/D_819865-MLB71655082508_092023-O.jpg',
    brand: 'Retro',
    name: 'Tenis Masculino Feminino Classico Sketista Retro Old School',
    price: 89.9,
  };

  useEffect(() => {
    fetchProducts('vans').then((response: any) => {
      console.log('produtos:', response);
    });
  }, []);

  return (
    <div className="container">
      <ContainerProductList>
        <ProductItem {...productData} />
        <ProductItem {...productData} />
        <ProductItem {...productData} />
        <ProductItem {...productData} />
        <ProductItem {...productData} />
        <ProductItem {...productData} />
      </ContainerProductList>
    </div>
  );
}

export default Products;
