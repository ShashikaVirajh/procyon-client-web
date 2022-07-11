import { render, screen } from '@testing-library/react';
import LandingPage from './landing.page';

test('Renders error page with the following components', () => {
  render(<LandingPage />);

  const procyonLogo = screen.getByAltText('Procyon Logo');
  expect(procyonLogo).toBeInTheDocument();

  const jobHuntImage = screen.getByAltText('Job Hunt');
  expect(jobHuntImage).toBeInTheDocument();

  const pageHeading = screen.getByRole('heading', { name: 'Track Your Jobs' });
  expect(pageHeading).toBeInTheDocument();

  const pageDescription = screen.getByText(/Crucifix narwhal street art asymmetrical/i);
  expect(pageDescription).toBeInTheDocument();
});
