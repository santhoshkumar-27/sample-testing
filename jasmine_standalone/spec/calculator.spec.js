// collection of tests or specs is called test suite
// each individual test is called specs  -> to check for the expected result

describe('calculator.js testing', () => {
    it('should add two numbers passing from parameters', () => {
        const calculator = new Calculator()
        expect(calculator.add(1, 3)).toBe(5)
    })
});