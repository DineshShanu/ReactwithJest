import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // Adjust the path as needed

describe('App Component', () => {
  it('renders the initial count and increases on button click', () => {
    render(<App />);
  });
});
