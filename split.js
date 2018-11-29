const conversion = require('./conversion');

class Split {
  constructor(name, bestTime = '00:00:00.00') {
    this.name = name;
    this.bestTime = bestTime;
    this.currentTime = '00:00:00.00';
    this.difference = 0;
  }

  compare() {
    this.difference = conversion.timeToMs(this.currentTime) - conversion.timeToMs(this.bestTime);
    if (this.difference <= 0) {
      this.bestTime = this.currentTime;
    }
  }

  get bestTime() {
    return conversion.msToTime(this._bestTime);
  }

  set bestTime(val) {
    this._bestTime = conversion.timeToMs(val);
  }

  get currentTime() {
    return conversion.msToTime(this._currentTime);
  }

  set currentTime(val) {
    this._currentTime = conversion.timeToMs(val);
  }

  get isGold() {
    return this.difference <= 0;
  }
}

module.exports = Split;
