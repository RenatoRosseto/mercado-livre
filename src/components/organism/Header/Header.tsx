import { StyledHeader, StyledHeaderContainer, Logo } from './Header.styles';
import CartLink from 'components/atom/CartLink';
import InputSearch from 'components/molecule/InputSearch';

const Header = () => (
  <StyledHeader>
    <div className="container">
      <StyledHeaderContainer>
        <Logo data-testid="logo" href="/">
          Mercado Livre Brasil - Onde comprar e vender de Tudo
        </Logo>

        <InputSearch />

        <CartLink quantityItems={2} />
      </StyledHeaderContainer>
    </div>
  </StyledHeader>
);

export default Header;
