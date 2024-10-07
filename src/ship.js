class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.sunk = false;
        this.timesHit = 0;
    }

    hit() {
        this.timesHit += 1;
    }

    isSunk() {
        return this.timesHit === this.length;
    }

}


// module.exports = Ship; // CommonJS
export default Ship;