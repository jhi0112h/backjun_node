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
    console.log(solution(input).join("\n"));

    process.exit();
});

function solution(list) {
    // // Bubble Sort
    // for(let i=0; i<list.length-1; i++) {
    //     for(let j=0; j<list.length - i - 1; j++) {
    //         if(list[j] > list[j+1]) {
    //             let tmp = list[j];
    //             list[j] = list[j+1];
    //             list[j+1] = tmp;
    //         }
    //     }
    // }

    // Insertion Sort
    for (let i = 1; i < list.length; i++) {
        let index = i,
            v = list[i];
        for (let j = i-1; j >= 0; j--) {
            if (list[j] > v) {
                index = j;
                list[j+1] = list[j];
            }
        }

        list[index] = v;
    }

    return list;
}