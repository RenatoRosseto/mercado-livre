import React, { useEffect } from 'react';

import fetchProducts from 'api/fetchProducts';

function Products() {
  useEffect(() => {
    fetchProducts('vans').then((response: any) => {
      console.log('produtos:', response);
    });
  }, []);

  return <h1>Produtos</h1>;
}

export default Products;
