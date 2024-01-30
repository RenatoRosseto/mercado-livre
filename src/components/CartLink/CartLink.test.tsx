import { render } from 'utils/test-utils';
import '@testing-library/jest-dom';

import CartLink from './CartLink';

describe('CartLink Component', () => {
  test('Renders the component without the badge when there are no items', () => {
    const { getByAltText, queryByTestId } = render(
      <CartLink quantityItems={0} />,
    );

    expect(getByAltText('Cart Icon')).toBeInTheDocument();
    expect(queryByTestId('badge')).toBeNull();
  });

  test('Renders the badge correctly when there are items', () => {
    const { getByAltText, getByTestId } = render(
      <CartLink quantityItems={3} />,
    );

    expect(getByAltText('Cart Icon')).toBeInTheDocument();
    expect(getByTestId('badge')).toHaveTextContent('3');
  });
});
