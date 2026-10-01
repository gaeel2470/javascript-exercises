const repeatString = function(string, num) {

    // Invalid value for num, stop here
    if (num < 0) return "ERROR";

    // If given string is empty return it
    // No need to use a loop in this case
    if (string === "") return "";

    // Start with an empty string
    let result = "";

    // Concatenate given string to result "num" times
    for (let i = 0; i < num; i++)
    {
        result += string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
