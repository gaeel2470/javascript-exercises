const convertToCelsius = function(fahrenheit) {

    // Transform fahrenheit to celsius using the formula
    const celsius = (fahrenheit - 32) * (5/9);

    // Round to one decimal point
    return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {

    // Transform celsius to fahrenheit using the formula
    const fahrenheit = (celsius * (9/5)) + 32;

    // Round to one decimal place
    return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
