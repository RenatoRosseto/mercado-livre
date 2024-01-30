import * as Style from './CartLink.styles';
import { CartLinkProps } from './CartLink.types';

const CartLink = ({ quantityItems = 0 }: CartLinkProps) => (
  <Style.CartLink id="nav-cart" href="/cart" title="Carrinho de compras">
    <Style.Icon src="images/icon-cart.svg" alt="Cart Icon" />
    {quantityItems > 0 && (
      <Style.Badge data-testid="badge">{quantityItems}</Style.Badge>
    )}
  </Style.CartLink>
);

export default CartLink;
