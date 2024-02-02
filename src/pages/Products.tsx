import React, { useState, useEffect } from 'react';
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

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts('vans').then((response: any) => {
      setProducts(response);
    });
  }, []);

  return (
    <div className="container">
      <ContainerProductList>
        {products.map((product: any, index: number) => (
          <ProductItem
            key={index}
            imageUrl={product.thumbnail}
            brand={
              product.attributes.find((attr: any) => attr.id === 'BRAND')
                ?.value_name || ''
            }
            name={product.title}
            price={product.price}
          />
        ))}
      </ContainerProductList>
    </div>
  );
}

export default Products;
