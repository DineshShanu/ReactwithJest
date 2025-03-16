// Hello.test.tsx
import React from 'react';
import { render, screen } from "@testing-library/react"; // Ensure this import is correct
import Hello from '../Hello';
import "@testing-library/jest-dom"; // This allows the custom matcher `toBeInTheDocument`

describe('Hello Component', () => {
  it('renders Hello, World! text', () => {
    render(<Hello />);
    const helloText = screen.getByText(/hello, world!/i); // Case-insensitive match
    expect(helloText).toBeInTheDocument(); // Custom matcher to check if it's in the DOM
  });
});