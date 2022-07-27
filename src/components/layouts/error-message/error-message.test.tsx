import { render, screen } from '@testing-library/react';
import ErrorMessage from './error-message.component';

test('Renders ErrorMessage component with an error message', () => {
  render(<ErrorMessage text='Error Occured' level={1} />);

  const ErrorContainer = screen.getByRole('heading', { name: 'Error Occured', level: 1 });
  expect(ErrorContainer).toBeInTheDocument();
});
