import React from 'react';

import { LoaderWrapper, LoadingText, LoadingDots } from './Loader.styles';

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <LoadingText>Aguarde, estamos buscando os melhores produtos</LoadingText>
      <LoadingDots />
    </LoaderWrapper>
  );
};

export default Loader;
