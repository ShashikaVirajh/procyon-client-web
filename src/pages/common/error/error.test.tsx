import { render, screen } from '@testing-library/react';
import ErrorPage from './error.page';

test('Renders error page with the following components', () => {
  render(<ErrorPage />);

  const notFoundImage = screen.getByRole('img');
  expect(notFoundImage).toHaveAttribute('alt', 'Not Found Image');

  const pageHeading = screen.getByRole('heading', { name: 'Page Not Found!' });
  expect(pageHeading).toBeInTheDocument();

  const pageDescription = screen.getByText(
    'Sorry we cannot seem to find the page you are looking for',
  );
  expect(pageDescription).toBeInTheDocument();
});
