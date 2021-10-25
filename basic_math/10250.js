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
    while (i < count) {
        console.log(main(input[i][0], input[i][1], input[i][2]));
        i++;
    }

    process.exit();
});

function main(th, tw, x) {
    let h = x % th || th,
        w = Math.ceil(x / th);

    if (w < 10) {
        w = `0${w}`;
    }

    return `${h}${w}`;
}