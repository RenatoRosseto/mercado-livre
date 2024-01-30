import { StyledHeader, StyledHeaderContainer, Logo } from './Header.styles';
import CartLink from 'components/CartLink';

const Header = () => (
  <StyledHeader>
    <div className="container">
      <StyledHeaderContainer>
        <Logo href="/">
          Mercado Livre Brasil - Onde comprar e vender de Tudo
        </Logo>
        <h1>Input buscar</h1>
        <CartLink quantityItems={2} />
      </StyledHeaderContainer>
    </div>
  </StyledHeader>
);

export default Header;
