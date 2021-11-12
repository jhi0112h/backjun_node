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
    console.log(countingSort(input).join("\n"));

    process.exit();
});

function countingSort(list) {
    let count = Array(list.length+1).fill(0),
        result = [];
        
    for (let i = 0; i < list.length; i++) {
        count[list[i]]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i-1];
    }

    for (let i = 0; i < list.length; i++) {
        result[count[list[i]] - 1] = list[i];
        count[list[i]]--;
    }

    return result;
}