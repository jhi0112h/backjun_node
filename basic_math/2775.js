const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let i = 0;
let count = 0;
let input = [];
rl.on("line", function (line) {
    if (count === 0) {
        count = parseInt(line);
    } else {
        input.push(parseInt(line));
    }

    if (input.length === count * 2) {
        rl.close();
    }
}).on("close", function () {
    input = input.reduce((acc, curr, i) => {
        let index = Math.floor(i / 2);
        acc[index] = acc[index] || [];
        acc[index].push(curr);
        return acc;
    }, []);
    let i = 0;

    while (i < count) {
        console.log(findNumberOfPeople(input[i][0], input[i][1]));
        i++;
    }

    process.exit();
});


function findNumberOfPeople(k, n) {
    if(k === 0) return n;
    if(n === 1) return 1;
    return findNumberOfPeople(k, n-1) + findNumberOfPeople(k-1, n);
}