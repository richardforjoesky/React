import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App component', () => {
    test('renders Let us get started as a text!', () => {
      // Arrange
      render(<App />);
      // Act
    
      // Assert
      const getStartedElement = screen.getByText('Let us get started');
      expect(getStartedElement).toBeInTheDocument();
    });
});