// Write code below this line

function convertToInt(str) {

    return parseInt(str, 16);
}
console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));
// Write code above this line

module.exports = convertToInt;