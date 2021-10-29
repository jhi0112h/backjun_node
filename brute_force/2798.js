const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let m = 0;
let deck = [];
rl.on("line", function (line) {
    if (n === 0) {
        [n, m] = line.split(' ').map(v => parseInt(v))
    } else {
        deck = line.split(' ').map(v => parseInt(v));
    }

    if (deck.length) {
        rl.close();
    }
}).on("close", function () {
    console.log(solution(n, m, deck));

    process.exit();
});

function solution(n, m, deck) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let z = j + 1; z < n; z++) {
                let sum = deck[i] + deck[j] + deck[z];
                if (result < sum && sum <= m) {
                    result = sum;
                }
            }
        }
    }
    return result;
}