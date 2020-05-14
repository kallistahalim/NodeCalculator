var input = process.argv;
console.log(input)

var operator = input[2];
var num1 = input[3];
var num2 = input[4];

if(operator === "add") {
    console.log(parseFloat(num1) + parseFloat(num2));
} else if(operator === "minus") {
    console.log(parseFloat(num1) - parseFloat(num2));
} else if(operator === "multiply") {
    console.log(parseFloat(num1) * parseFloat(num2));
} else if(operator === "divide") {
    console.log(parseFloat(num1) / parseFloat(num2));
} else if(operator === "remainder") {
    console.log(parseFloat(num1) % parseFloat(num2));
} else if(operator === "exp") {
    console.log(parseFloat(num1) ^ parseFloat(num2));
} else {
    console.log("operator not found");
}