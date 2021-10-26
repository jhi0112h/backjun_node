const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    console.log(main(parseInt(line)));
    rl.close();
}).on("close", function () {
    process.exit();
});

function main(input) {
    let count = Math.floor(input / 5);
    let answer = 5000;
    for (let i=count; i >= 0; i--) {
        answer = Math.min(answer, solution(input, i));
    }
    return answer === 5000 ? -1 : answer;
}

function solution(t, n) {
    if ((t - n*5) % 3 === 0) {
        return n + (t - n*5) / 3;
    } else {
        return 5000;
    }
}