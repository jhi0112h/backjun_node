const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    console.log(solution(parseInt(line)));
    rl.close();
}).on("close", function () {
    process.exit();
});

function solution(n) {
    let count = 1,
        num = 1665;

    while (count < n) {
        if (isNumOfEnd(++num)) count++;
    }

    return num;
}

function isNumOfEnd(n) {
    while (n >= 666) {
        if (n % 1000 === 666) return true;
        n = Math.floor(n / 10);
    }

    return false;
}