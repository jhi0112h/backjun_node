const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    console.log(main(parseInt(line)).reduce((acc, curr) => acc + curr + "\n", ""));
    rl.close();
}).on("close", function () {
    process.exit();
});

function main(n) {
    let star = [],
        part = [];

    if (n === 3) {
        part[0] = "*";
        part[1] = "*";
        part[2] = "*";
    } else {
        part = main(n / 3);
    }

    let start = n / 3,
        end = n * 2 / 3;
    for (let i = 0; i < n; i++) {
        if (start <= i && i < end) {
            star[i] = part[i % (n / 3)] + " ".repeat(n / 3) + part[i % (n / 3)];
        } else {
            star[i] = part[i % (n / 3)].repeat(3);
        }
    }

    return star;
}