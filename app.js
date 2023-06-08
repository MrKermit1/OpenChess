const board = document.querySelector("#gameboard");
const player = document.querySelector("#who");
const info = document.querySelector("#std-what");

const width = 8;
const startPieces = [
    tower, horse, bishop, queen, king, bishop, horse, tower,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    tower, horse, bishop, queen, king, bishop, horse, tower
];

function createBoard(){
    startPieces.forEach((piece) => {
        const square = document.createElement('div');
        square.classList.add('square');
    });
}