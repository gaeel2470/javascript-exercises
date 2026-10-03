const convertToCelsius = function() {
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
