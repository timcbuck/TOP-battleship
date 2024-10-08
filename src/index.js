import "./styles.css";
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";


// Create game board script TODO: put this in the gameboard class?
/*
const player1Board = document.getElementById('player-1-board');
for (let i = 0; i < 49; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-space');
    player1Board.appendChild(div);
}
*/

let gameboard = new Gameboard();
let ship1 = new Ship("ship1", 3);
gameboard.placeShipsMock(ship1);
gameboard.drawBoard("player-1-board");