// Write code below this line

var sum = 0;

function addThree() {
    sum = sum + 3;
    console.log("addThree: " + sum);
}

function addFive() {
    sum = sum + 5;
    console.log("addFive: " + sum);
    
}
addThree();
addFive();
// Write code above this line
module.exports = {
    addThree,
    addFive
}