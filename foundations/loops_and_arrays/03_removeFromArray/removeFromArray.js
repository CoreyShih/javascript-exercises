const removeFromArray = function(arr, ...theArgs) {
    return arr.filter((elem) => !theArgs.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
