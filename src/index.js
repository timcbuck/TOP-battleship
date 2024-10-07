import "./styles.css";
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

let gameboard = new Gameboard();
let ship1 = new Ship("ship1", 3);
let ship2 = new Ship("ship2", 2);
const ships = [ship1, ship2];


gameboard.placeShipsMock(ship1);
console.log(gameboard.board);
gameboard.receiveAttack(0, 1);
gameboard.receiveAttack(4, 2);
let ship = gameboard.board[0][0];
console.log(ship);
console.log(ship.timesHit);