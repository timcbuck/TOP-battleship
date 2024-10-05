class Ship {
    sunk = false;
    timesHit = 0;
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }

    hit() {
        this.timesHit += 1;
    }

    isSunk() {
        return this.timesHit === this.length;
    }

}

module.exports = Ship; // CommonJS export