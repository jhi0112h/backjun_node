const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let input = [][];
rl.on("line", function (line) {
    if (input.length < 1) {
        count = parseInt(line);
    } else {
        let i = 0;
        while (i < input.length) {
            input = line.split(' ').map(v => parseInt(v));
        }
        rl.close();
    }
}).on("close", function () {
    let i = 0;
    while (i < input.length) {
        console.log(main(input[i][0], input[i][1], input[i][2]));
    }

    process.exit();
});

function main(a, b, c) {
    let h = Math.ceil(c/a),
        w = c%a;

    return `${h}${w}`;
}