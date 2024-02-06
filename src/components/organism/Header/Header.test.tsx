import { render } from 'utils/test-utils';
import '@testing-library/jest-dom';

import AppContext from 'context/AppContext';

import Header from './Header';

test('Renders the Header component with logo and CartLink', () => {
  const { getByTestId, getByAltText } = render(
    <AppContext.Provider value={{ cartItems: [] }}>
      <Header />
    </AppContext.Provider>,
  );

  const logo = getByTestId('logo');
  const cartLink = getByAltText('Cart Icon');

  expect(logo).toBeInTheDocument();
  expect(cartLink).toBeInTheDocument();
});
