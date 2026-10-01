const repeatString = function(string, num) {

    if (num < 0) return "ERROR";

    // If the given string is an empty string return it
    // No need to use the for loop in this case
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
