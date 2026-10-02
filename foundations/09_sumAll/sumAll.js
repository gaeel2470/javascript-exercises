const sumAll = function(a, b) {

    // Avoid invalid inputs
    if (typeof a !== "number" || typeof b !== "number" || 
        a < 0 || b < 0 || a !== Math.floor(a) || b !== Math.floor(b)) return "ERROR";

    let arr = [a, b].sort((a, b) => a - b);
    let result = 0;
    for (arr[0]; arr[0] <= arr[1]; arr[0]++)
    {
        result += arr[0];
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
