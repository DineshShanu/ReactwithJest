import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // Adjust the path as needed

describe('App Component', () => {
  it('renders the initial count and increases on button click', () => {
    render(<App />);

    // Check if the initial count is rendered as 0
    const countElement = screen.getByText(/Count: 0/i);
    expect(countElement).toBeInTheDocument();

    // Get the button and simulate a click event
    const button = screen.getByText(/Increase Count/i);
    fireEvent.click(button);

    // After the click, the count should increase to 1
    const updatedCountElement = screen.getByText(/Count: 1/i);
    expect(updatedCountElement).toBeInTheDocument();
  });
});
