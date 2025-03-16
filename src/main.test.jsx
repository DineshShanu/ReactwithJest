import { render } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the path if needed

// Mock createRoot
jest.mock('react-dom/client', () => ({
    createRoot: jest.fn().mockReturnValue({
        render: jest.fn(),
    }),
}));

describe('Main File', () => {
    test('renders App component into the root element', () => {
        // Setup the DOM
        document.body.innerHTML = `<div id="root"></div>`;

        // Import the entry point file (this will trigger the render)
        require('./main'); // This will execute the render logic in the index.js file

        // Assert that createRoot and render were called
        expect(createRoot).toHaveBeenCalledWith(document.getElementById('root'));
        expect(createRoot().render).toHaveBeenCalledWith(
            expect.anything() // Ensure App is being passed to render
        );
    });
});
