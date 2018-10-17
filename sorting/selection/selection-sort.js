function selectionSort(arr) {
let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        let lowestValueIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            steps++;
            if(arr[j] < arr[lowestValueIndex]) {
                lowestValueIndex = j;
            }         
        }

        if(lowestValueIndex !== i) {
            steps++;
            let temp = arr[i];
            arr[i] = arr[lowestValueIndex];
            arr[lowestValueIndex] = temp;
        }
    }

    console.log(steps);
}

module.exports = selectionSort;