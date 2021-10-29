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
    let result = n;
    let i = n - 9 * n.toString().length;

    while (i <= n) {
        if (n === i + i.toString().split("").reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0) && result > i) {
            result = i;
        }
        i++;
    }

    return result === n ? 0 : result;
}