import Ship from "./ship.js";


class Gameboard {
    constructor() {
        this.board = [
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
        ];
        this.locationsHit = [];
    }

    placeShipsMock(ship) {
        // Place a ship on first row to help with testing
        this.board[0][0] = ship;
        this.board[0][1] = ship;
        this.board[0][2] = ship;
    }

    placeShips(ships) {
        ships.forEach(ship => {
            let placed = false;
            while (placed !== true) {
                // Validate ship can be placed without overlapping or going out of bounds
                const x = Math.floor(Math.random() * 7); // Random number between 0 and 6
                const y =  Math.floor(Math.random() * 7)
                const isHorizontal = Math.random() > 0.5; // 50/50 chance of being placed vertically or horizontally
                let canPlace = true; // Assume we can place the ship
                if (this.board[x][y] === "-") { // If position is empty
                    if (isHorizontal) { // Check horizontal placement
                        for (let i = 1; i < ship.length; i++) { // Check all spaces are available for this ship
                            if (this.board[x][y + i] !== "-") {
                                canPlace = false; // Cannot place here
                                break;
                            }
                        }
                    } else { // Check vertical placement
                        for (let i = 1; i < ship.length; i++) { // Check all spaces are available for this ship
                            if (this.board[x + i][y] !== "-") {
                                canPlace = false; // Cannot place here
                                break;
                            }
                        }
                    }
                } else {
                    canPlace = false;
                }
                if (canPlace && isHorizontal) {
                    for (let i = 0; i < ship.length; i++) {
                        this.board[x][y + i] = ship;
                    }
                    placed = true;
                } else if (canPlace && !isHorizontal) {
                    for (let i = 0; i < ship.length; i++) {
                        this.board[x + i][y] = ship;
                    }
                    placed = true;
                }
            }
            
        });
    }

    receiveAttack(x, y) {
        // Check if a ship was hit
        if (this.board[x][y] instanceof Ship) {
            console.log("Hit!");
            this.board[x][y].hit();
        } else {
            console.log("Missed!");
        }

        // Calls updateBoard function
        this.updateBoard(x, y);

    }

    updateBoard(x, y) {
        // If (x, y) is a ship, show ship

        // If (x, y) is empty, show X


    }

}


// module.exports = Gameboard; // CommonJS
export default Gameboard; // ESM