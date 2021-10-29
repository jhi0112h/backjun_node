const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    let count = hanoi(parseInt(line), 1, 2, 3);
    console.log(count);
    console.log(log.map((element) => element.join(" ")).join("\n"));
    rl.close();
}).on("close", function () {
    process.exit();
});

let log = [];
function hanoi(n, prev, other, next) {
    if (n === 1) {
        log.push([prev, next]);
        return 1;
    } else {
        return hanoi(n - 1, prev, next, other) + hanoi(1, prev, other, next) + hanoi(n - 1, other, prev, next);
    }
}