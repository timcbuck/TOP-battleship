import Ship from "../src/ship.js";
const ship = new Ship(3);

test("Ship gets hit and sinks", () => {
    expect(ship.isSunk()).not.toBeTruthy();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
})