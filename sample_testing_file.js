// import {sum, substract} from './math';
const { sum, substract } = require('./math')

let result = sum(5, 5);
let expected = 10;
if (result != expected) {
    throw new Error(`${result} is not equal to the ${expected}`)
}


result = substract(15, 5);
expect(result).toBe(0);
expect(result).toBeTruthy();

function expect(actual) {
    return {
        toBe(expected) {
            if (actual != expected) {
                throw new Error(`${actual} is not equal to the ${expected}`)
            }
        },
        toBeTruthy() {
            if (!!!actual) {
                throw new Error(`${actual} is not to be truthy`)
            }
        }
    }
}
