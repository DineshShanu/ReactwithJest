import { render, screen } from '@testing-library/react';
import MyHome from '../MyHome';
import "@testing-library/jest-dom"; // This allows the custom matcher `toBeInTheDocument`

describe('MyHome Component', () => {
  it('renders the correct greeting', () => {
    // Render the MyHome component
    render(<MyHome />);

    // Check if the text 'Hello How are you.' is rendered on the screen
    const greetingElement = screen.getByText(/Hello How are you./i);

    // Assert that the greeting is in the document
    expect(greetingElement).toBeInTheDocument();
  });
});
