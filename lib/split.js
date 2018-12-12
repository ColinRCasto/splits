const conversion = require('./conversion');

const Split = (name, bestTime = '00:00:00.00') => {

  const obj = {
    name,
    bestTime,
    currentTime: '00:00:00.00',
    difference: 0,
    get bestTime() {
      return conversion.msToTime(this._bestTime);
    },
    set bestTime(val) {
      this._bestTime = conversion.timeToMs(val);
    },
    get currentTime() {
      return conversion.msToTime(this._currentTime);
    },
    set currentTime(val) {
      this._currentTime = conversion.timeToMs(val);
    },
    get isGold() {
      return this.difference <= 0;
    },
    compare() {
      this.difference = conversion.timeToMs(this.currentTime) - conversion.timeToMs(this.bestTime);
      console.log(this.difference);
      if (this.difference <= 0) {
        this.bestTime = this.currentTime;
      }
    },
  };

  return obj;
};

module.exports = Split;
