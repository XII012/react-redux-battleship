const defaultBoard = [[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false],]

function generateGameBoard() {
    for (let i=0;i<defaultBoard.length;i++) {
        for (let j=0;j<defaultBoard.length;j++) {
            defaultBoard[i][j] = {
                board: "board2",
                ship: undefined,
                hit: false,
            };
        }
    }
    return defaultBoard;
}


function generateRandomShip(state, num, id) {
    let checkRepeat = false;
    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);
    let direction = Math.random();

    // Vertical
    if (direction >= 0.5) {
        if (x + num >= 9) {
            return false;
        } else {
            for (let i=0;i<num;i++) {
                if (state[x+i][y].ship) {
                    checkRepeat = true;
                }
            }
        }
    
        if (!checkRepeat) {
            for (let i=0;i<num;i++) {
                state[x+i][y].ship = id;
            }
            return true;
        }
    }

    // Horizontal
    if (direction < 0.5) {
        if (y + num >= 9) {
            return false;
        } else {
            for (let i=0;i<num;i++) {
                if (state[x][y+i].ship) {
                    checkRepeat = true;
                }
            }
        }
    
        if (!checkRepeat) {
            for (let i=0;i<num;i++) {
                state[x][y+i].ship = id;
            }
            return true;
        }
    }

    return false;
}

function startRandomGame(state) {
    let ships =[2, 3, 3, 4, 5,];
    for (let i=0;i<ships.length;i++) {
        let generateSucc = false;
        while(!generateSucc) {
            generateSucc = generateRandomShip(state, ships[i], i);
        }
    }

    return [...state];
}

export default function board2Reducer(state, action) {
    // debugger;
    
    if (state === undefined) {
        return startRandomGame(generateGameBoard());

    }


    // if (action.type === 'START_RANDOM') {
    //     let ships =[2, 3, 3, 4, 5,];
    //     for (let i=0;i<ships.length;i++) {
    //         let generateSucc = false;
    //         while(!generateSucc) {
    //             generateSucc = generateRandomShip(state, ships[i], i);
    //         }
    //     }
    //     return [...state];
    // }

    if (action.type === 'boardClick' && action.board === "board2" && action.playing === "board1") {
        if (!state[action.x][action.y].hit) {
            state[action.x][action.y].hit = true;
        }
        // check winning condition

        return [...state];
    }

    if (action.type === 'RESET') {
        return startRandomGame(generateGameBoard());
    }
    return state;
}
