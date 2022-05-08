import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Greeting from './Greeting';

test('renders Hello world as a text!', () => {
  // Arrange
  render(<Greeting />);

  // Act

  // Assert
  const helloWorldElement = screen.getByText('Hello World');
  expect(helloWorldElement).toBeInTheDocument();
});
