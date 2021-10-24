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
    let i = 0
    sum = 0;

    while (sum < input) {
        sum += ++i;
    }

    if(i%2) {
        return `${sum - input + 1}/${i - (sum - input)}`;
    } else {
        return `${i - (sum - input)}/${sum - input + 1}`;
    }
}