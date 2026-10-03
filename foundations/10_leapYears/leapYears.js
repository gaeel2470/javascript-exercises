const leapYears = function(year) {

    // A leap year is both divisible by 4 and not divisible by 100 or just divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true;

    return false;
};

// Do not edit below this line
module.exports = leapYears;
