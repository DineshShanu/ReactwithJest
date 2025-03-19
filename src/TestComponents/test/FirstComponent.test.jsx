import { render, screen } from '@testing-library/react';
import FirstComponent from '../FirstComponent';
import "@testing-library/jest-dom";

describe("This test case will check for First React app case", () => {
    it("Test First React app case", () => {
        render(<FirstComponent />);
        const text = screen.getByText(/First React App/i);
        expect(text).toBeInTheDocument();
        const title = screen.getByTitle('Moto Phone');
        expect(title).toBeInTheDocument();
    });
});

describe("This test case will chec for Input field", () => {
    it("Testing Input box", () => {
        render(<FirstComponent />);
        const checkInput = screen.getByRole("textbox");
        expect(checkInput).toBeInTheDocument();
        const checkInputPlaceHolder = screen.getByPlaceholderText("Enter user name");
        expect(checkInputPlaceHolder).toBeInTheDocument();
        expect(checkInput).toHaveAttribute("name", "username");
        expect(checkInput).toHaveAttribute("id","userId");
        expect(checkInput).toHaveAttribute("type","text");
    });
});
