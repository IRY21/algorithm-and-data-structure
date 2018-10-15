function hasDuplicateValue(arr) {
    let steps = 0;

    const existingNumbers = [];

    for(let i = 0; i < arr.length; i++) {
        steps++;
        if(existingNumbers[arr[i]] === void 0) {
            existingNumbers[arr[i]] = 1;
        } else {
            console.log(steps);
            return true;
        }
    }

    console.log(steps);
    return false;
}

module.exports = hasDuplicateValue;