const leapYears = function(year) {

    // Years divisible by 4 but no by 100 or divisible by 400 are leap years
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true;

    return false;
};

// Do not edit below this line
module.exports = leapYears;
