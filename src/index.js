import "./styles.css";
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

let gameboard = new Gameboard();
let ship1 = new Ship("ship1", 3);
let ship2 = new Ship("ship2", 2);
const ships = [ship1, ship2];


gameboard.placeShips(ships);
console.log(gameboard.board);
console.log(gameboard.shipLocations);