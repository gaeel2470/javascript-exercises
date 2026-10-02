const sumAll = function(a, b) {

    // Avoid invalid inputs
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) return "ERROR";
    
    // Get the sum of all integers between a and b inclusive using the sum formula
    // Count of integers * (a + b) / 2
    return (Math.abs(a - b) + 1) * (a + b) / 2;
};

// Do not edit below this line
module.exports = sumAll;
