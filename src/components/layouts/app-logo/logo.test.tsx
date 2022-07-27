import { render, screen } from '@testing-library/react';
import AppLogo from './logo.component';

test('Renders AppLogo image', () => {
  render(<AppLogo />);

  const appLogoImage = screen.getByRole('img');
  expect(appLogoImage).toHaveAttribute('alt', 'Procyon Logo');
});
