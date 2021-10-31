const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let m = n = 0
let board = [];
rl.on("line", function (line) {
    if (m === 0) {
        [m, n] = line.split(' ').map(v => parseInt(v))
    } else {
        board.push(line.split(''));
    }

    if (board.length === m) {
        rl.close();
    }
}).on("close", function () {
    let i = 0;
    console.log(solution(m, n, board));

    process.exit();
});

function solution(m, n, board) {
    let result = 1250,
        unit = ['B', 'W'],
        size = 8;

    // board 자르기
    for (let y = 0; y <= m - size; y++) {
        for (let x = 0; x <= n - size; x++) {
            const cutted_board = board.map(v => v.slice(x, x + size)).slice(y, y + size);
            
            // board 색 칠하기
            let count = [0, 0];
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    for (let z = 0; z < 2; z++) {
                        if (cutted_board[i][j] !== unit[(i + j + z) % 2]) {
                            count[z % 2]++;
                        }
                    }
                }
            }
            
            const min = Math.min(count[0], count[1]);
            result = result > min ? min : result;
        }
    }

    return result;
}