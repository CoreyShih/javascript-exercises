const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1) && num1 > 0) ||
        !(Number.isInteger(num2) && num2 > 0)) {
            return "ERROR";
        }
    let result = 0;
        for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
            result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
