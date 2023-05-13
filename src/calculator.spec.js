 class Calculator {
    constructor() {
    }
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}


describe('calculator.js testing', () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator()
    })
    it('should add two numbers passing from parameters', () => {
        const result = calculator.add(1, 2);
        expect(result).toBe(3)
    })
    it('should subtract two numbers passing from parameters', () => {
        const result = calculator.subtract(1, 2);
        expect(result).toBe(-1)
    })
    it('should multiply two numbers passing from parameters', () => {
        const result = calculator.multiply(1, 2);
        expect(result).toBe(2)
    })
    it('should  divide two numbers passing from parameters', () => {
        const result = calculator.divide(2, 1);
        expect(result).toBe(2)
    })
});