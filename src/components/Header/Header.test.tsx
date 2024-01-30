import { render } from 'utils/test-utils';
import '@testing-library/jest-dom';

import Header from './Header';

test('Renders the Header component with logo and CartLink', () => {
  const { getByTestId, getByAltText } = render(<Header />);

  const logo = getByTestId('logo');
  const cartLink = getByAltText('Cart Icon');

  expect(logo).toBeInTheDocument();
  expect(cartLink).toBeInTheDocument();
});
