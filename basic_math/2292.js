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
    let range = 1, block = 1;

    while (block < input) {    
        block += 6 * range;
    
        range++;
    }
    return range;
}