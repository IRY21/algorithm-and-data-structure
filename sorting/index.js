const bubbleSort = require('./bubble/bubble-sort');
const selectionSort = require('./selection/selection-sort');

const length = Number(process.argv[2]);
const arr = [];

for(let i = length; i > 0; i--) {
    arr[length - i] = i;
}

//console.log('Before', arr);
selectionSort(arr);
//console.log('After', arr);