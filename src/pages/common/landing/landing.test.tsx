import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './landing.page';

test('Renders error page with the following components', () => {
  render(<LandingPage />, { wrapper: MemoryRouter });

  const procyonLogo = screen.getByAltText('Procyon Logo');
  expect(procyonLogo).toBeInTheDocument();

  const jobHuntImage = screen.getByAltText('Job Hunt');
  expect(jobHuntImage).toBeInTheDocument();

  const pageHeading = screen.getByRole('heading', { name: 'Track Your Jobs', level: 1 });
  expect(pageHeading).toBeInTheDocument();

  const pageDescription = screen.getByText(/Crucifix narwhal street art asymmetrical/i);
  expect(pageDescription).toBeInTheDocument();

  const linkButton = screen.getByRole('link', { name: 'Log In / Register' });
  expect(linkButton).toBeInTheDocument();
});

test('Clicking Log In / Register shows the Register page', async () => {
  render(<LandingPage />, { wrapper: MemoryRouter });
  const user = userEvent.setup();

  const linkButton = screen.getByRole('link', { name: 'Log In / Register' });
  await user.click(linkButton);

  // expect(screen.getByText('Email')).toBeInTheDocument();
});
