import { render, screen } from '@testing-library/react';
import FirstTestComponent from '../../TestComponents/FirstTestComponent';
import "@testing-library/jest-dom";

describe("This test case will check for First React app case", () => {
    it("Test First React app case", () => {
        render(<FirstTestComponent />);
        const firstText = screen.getByText(/First React App/i);
        expect(firstText).toBeInTheDocument();
    });
});
