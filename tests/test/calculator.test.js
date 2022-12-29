import calculator from '../calculator';

describe("Test calculator", () => {
    it("Test add", () => {
        expect(calculator.add(2, 3)).toBe(5);
    });
    
    it("Test subtract", () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });
    
    it("Test divide", () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });
    
    it("Test multiply", () => {
        expect(calculator.multiply(5, 3)).toBe(15);
    });
});