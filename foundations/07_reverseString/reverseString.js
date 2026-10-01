const reverseString = function(str) {

    // Start with an empty string
    let reversed = "";

    // Go through given string starting at the end
    for (let i = str.length - 1; i >= 0; i--)
    {
        // Concatenate current character to reversed
        reversed += str[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
