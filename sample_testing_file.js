function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}


let result = sum(5, 5);
let expected = 10;
if (result != expected) {
    throw new Error(`${result} is not equal to the ${expected}`)
}


result = substract(5, 5);
expected = 0;
if (result != expected) {
    throw new Error(`${result} is not equal to the ${expected}`)
}