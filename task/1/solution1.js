function hasDuplicateValue(arr) {
    let steps = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            steps++;

            if( i !== j && arr[i] === arr[j]) {
                console.log(steps);
                return true;
            }
        }
    }

    console.log(steps);
    return false;
}

module.exports = hasDuplicateValue;