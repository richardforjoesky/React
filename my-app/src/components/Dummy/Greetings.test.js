import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello world as a text!', () => {
    // Arrange
    render(<Greeting />);
    // Act
  
    // Assert
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });
  
  test('renders Its good to see you as a text!', () => {
    // Arrange
    render(<Greeting />);
    // Act
  
    // Assert
    const helloWorldElement = screen.getByText('Its good to see you!');
    expect(helloWorldElement).toBeInTheDocument();
  });
});

describe('Greeting button component', () => {
  test('renders Good to see you if button was not clicked', () => {
    // Arrange
    render(<Greeting />);
    // Act
  
    // Assert
    const paragraphElement = screen.getByText('Its good to see you!');
    expect(paragraphElement).toBeInTheDocument();
  });
  
  test('renders Changed! if button was clicked', () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
  
    // Assert
    const paragraphElement = screen.getByText('Changed!')
    expect(paragraphElement).toBeInTheDocument();
  });

  test('previous text is removed if button was clicked', () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
  
    // Assert
    const paragraphElement = screen.queryByText('Its good to see you!')
    expect(paragraphElement).toBeNull();
  });
});