function everyOther(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let even = !(arr[i] % 2);
        if(even) {
            result.push(arr[i]);
        }        
    }

    return result;
}

console.log(everyOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // O(N + (N / 2))      || O(1.5N)       || O(N)


function everyOther(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    return result;
}

console.log(everyOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // O(N / 2)      || O(0.5N)       || O(N)