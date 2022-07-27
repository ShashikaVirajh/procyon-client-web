import { render, screen } from '@testing-library/react';
import Spinner from './spinner.component';

test('Renders Spinner component', () => {
  render(<Spinner />);

  const SpinnerContainer = screen.getByTestId('spinner');
  expect(SpinnerContainer).toBeInTheDocument();
});
