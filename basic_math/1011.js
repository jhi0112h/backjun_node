const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let k = 0;
let input = [];
rl.on("line", function (line) {
    if (k === 0) {
        k = parseInt(line);
    } else {
        input.push(line.split(' ').map(v => parseInt(v)));
    }

    if (input.length === k) {
        rl.close();
    }
}).on("close", function () {
    let i = 0;
    while (i < k) {
        console.log(main(input[i][0], input[i][1]));
        i++;
    }

    process.exit();
});

function main(x, y) {
    let dis = y - x,
        k = 1,
        count = 0;
    while (dis > 0) {
        let i = k-2;
        while(i<=k) {
            if(recursionSum(i) > dis) {
                k = i-1;
                break;
            }
            i++;
        }

        dis -= k;
        k++;
        count++;
    }

    return count;
}

let remind = [];
function recursionSum(n) {
    let result = 0;
    if(n === 0) {
        return 0;
    } else if(n === 1) {
        return 1;
    } else if(n < 0) {
        return -1;
    }

    result = (remind[n-1] || recursionSum(n-1)) + n;
    remind[n] = result;
    return result;
}