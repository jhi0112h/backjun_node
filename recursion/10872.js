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
    if(input <= 1) return 1;
    return main(input-1)*input;
}
