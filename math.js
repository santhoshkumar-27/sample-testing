// function sum(a, b) {
//     return a + b;
// }
// function substract(a, b) {
//     return a - b;
// }

const sum = (a, b) => a + b;
const substract = (a, b) => a - b;
const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractAsync = (...args) => Promise.resolve(substract(...args));
module.exports = {
    sum,
    substract,
    sumAsync,
    subtractAsync
}