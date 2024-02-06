import React, { useContext } from 'react';

import { StyledHeader, StyledHeaderContainer, Logo } from './Header.styles';
import CartLink from 'components/atom/CartLink';
import InputSearch from 'components/molecule/InputSearch';
import AppContext from 'context/AppContext';

const Header = () => {
  const { cartItems } = useContext(AppContext);
  return (
    <StyledHeader>
      <div className="container">
        <StyledHeaderContainer>
          <Logo data-testid="logo" href="/">
            Mercado Livre Brasil - Onde comprar e vender de Tudo
          </Logo>

          <InputSearch />

          <CartLink quantityItems={cartItems.length} />
        </StyledHeaderContainer>
      </div>
    </StyledHeader>
  );
};

export default Header;
