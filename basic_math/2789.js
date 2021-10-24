const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function (line) {
    input = line.split(' ').map(v => parseInt(v));
    console.log(main(input[0], input[1], input[2]));
    rl.close();
}).on("close", function () {
    process.exit();
});;

function main(a, b, c) {
    const netProfit = c - b;
    
    if(netProfit <= 0) {
        return -1;
    } else {
        return Math.floor(a / netProfit) + 1
    }
}