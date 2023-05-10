// import {sum, substract} from './math';
const { sum, substract } = require('./math')

// let result = sum(5, 5);
// expect(result).toBe(10);
// expect(result).toBeTruthy();
// if (result != expected) {
//     throw new Error(`${result} is not equal to the ${expected}`)
// }

// function sumTest() {
//     const result = sum(5, 5);
//     expect(result).toBe(10);
//     expect(result).toBeTruthy();
// }

test('sum', () => {
    const result = sum(5, 5);
    expect(result).toBe(10);
    expect(result).toBeTruthy();
});

// function subtractTest() {
//     const result = substract(15, 5);
//     expect(result).toBe(0);
//     expect(result).toBeTruthy();
// }
test('subtract', () => {
    const result = substract(15, 5);
    expect(result).toBe(0);
    expect(result).toBeTruthy();
});

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

// Because of this approach if one test fails the another test can't able to run
function test(title, callBack) {
    try {
        callBack();
        console.log('Success:', title);
    } catch (e) {
        console.log('Error:', title);
        console.error(e)
    }
}