import sum from '../sum';

describe("testing for sum funcation", () => {
    it("this funcation will call the sum method and return the expeted result", () => {
        const a = 10;
        const b = 20;
        const output = 30;
        expect(sum(a, b)).toBe(output);
    });
});