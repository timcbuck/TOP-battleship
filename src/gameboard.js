export default class Gameboard {
    board;
    shipLocations = {};

    constructor() {
        // "-" = empty space
        // "O" = hit ship
        // "X" = miss
        // "S" = ship
        this.board = [
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-", "-"],
        ];
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
                    let shipLocation = [];
                    for (let i = 0; i < ship.length; i++) {
                        this.board[x][y + i] = "S"; // TODO: remove this as we don't want to display where the ship is
                        shipLocation.push([x, y + i]);
                    }
                    this.shipLocations[ship.name] = shipLocation;
                    placed = true;
                } else if (canPlace && !isHorizontal) {
                    let shipLocation = [];
                    for (let i = 0; i < ship.length; i++) {
                        this.board[x + i][y] = "S"; // TODO: remove this as we don't want to display where the ship is
                        shipLocation.push([x + i, y]);
                    }
                    this.shipLocations[ship.name] = shipLocation;
                    placed = true;
                }
            }
            
        });
    }

    receiveAttack(x, y) {
        // Check if a ship was hit
        // Sends "isHit" function to the correct ship
        // Or record coordinates of missed shot
        // Calls updateBoard function
    }

    updateBoard(x, y, status) {
        this.board[x][y] = status; // Status = "X" (miss) or "O" (ship hit)
    }

}
