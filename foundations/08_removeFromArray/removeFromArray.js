const removeFromArray = function(arr, ...elementsToDelete) {

    // Go through all given elements
    for (const element of elementsToDelete)
    {
        // Go through given array and search for all instances of current element
        for (let i = 0; i < arr.length; i++)
        {   
            // Element found, delete it from the array
            if (arr[i] === element)
            {
                arr.splice(i, 1);

                // Adjust i because of deleted element
                i--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
