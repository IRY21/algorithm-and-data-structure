function bubbleSort(arr) {
    let lastIndex = arr.length - 1;
    let sorted = false;
    let steps = 0;

    while(!sorted) {
        sorted = true;

        for(let i = 0; i < lastIndex; i++) {
            steps++;
            let current = arr[i];
            let next = arr[i + 1];

            if(current > next) {
                steps++;
                sorted = false;
                arr[i] = next;
                arr[i + 1] = current;
            }
        }

        lastIndex--;
    }
    console.log(steps);
}

module.exports = bubbleSort;