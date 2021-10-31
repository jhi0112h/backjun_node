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
        input.push(line.split(' ').map(v => parseInt(v)));
    }

    if (input.length === count) {
        rl.close();
    }
}).on("close", function () {
    let i = 0;
    console.log(main(input));

    process.exit();
});

function main(array) {
    return array.map((v) =>
        array.reduce((acc, curr) => (v[0] < curr[0] && v[1] < curr[1]) ? acc + 1 : acc, 1)
    ).join(' ');
}