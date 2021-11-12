const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let input = [];
rl.on("line", function (line) {
    if (count === 0) {
        count = parseInt(line);
    } else {
        input.push(parseInt(line));
    }

    if (input.length === count) {
        rl.close();
    }
}).on("close", function () {
    let i = 0;
    //console.log(mergeSort(input).join("\n"));
    console.log(quickSort(input).join("\n"));

    process.exit();
});

function mergeSort(list) {
    let len = list.length,
        mid = Math.ceil(len / 2);

    if (len === 1) return list;

    return merge(mergeSort(list.slice(0, mid)), mergeSort(list.slice(mid)));
}

function merge(left, right) {
    let result = [];
    while (left.length !== 0 && right.length !== 0) {
        left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
    }

    if (left.length === 0) result.push(...right);
    if (right.length === 0) result.push(...left);
    return result;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= right) {
        return;
    }
    const mid = Math.floor((left + right) / 2);
    const pivot = array[mid];
    const partition = divide(array, left, right, pivot);
    quickSort(array, left, partition - 1);
    quickSort(array, partition, right);

    function divide(array, left, right, pivot) {
        while (left <= right) {
            while (array[left] < pivot) {
                left++;
            }
            while (array[right] > pivot) {
                right--;
            }
            
            if (left <= right) {
                let swap = array[left];
                array[left] = array[right];
                array[right] = swap;
                left++;
                right--;
            }
        }
        return left;
    }
    return array;
}