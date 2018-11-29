const msToTime = (num) => {
  let m = num;
  let negMult = 1;
  if (num < 0) {
    negMult = -1;
    m = num*negMult;
  }
  const milliseconds = parseInt(m%1000);
  let seconds = parseInt((m/1000)%60);
  let minutes = parseInt((m/(1000*60))%60);
  let hours = parseInt((m/(1000*60*60))%24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return `${negMult === -1?'-':''}${hours}:${minutes}:${seconds}.${milliseconds}`;
}

const timeToMs = (t) => {
  const digitsArray = t.split(/\:|\./);
  let ms = digitsArray[3];
  let seconds = digitsArray[2];
  let minutes = digitsArray[1];
  let hours = digitsArray[0];
  let secondsC = seconds * 1000;
  let minutesC = (minutes * 1000 * 60);
  let hoursC  = (hours * 1000 * 60 * 60);
  let final = parseInt(ms,10) + parseInt(secondsC,10) + parseInt(minutesC,10) + parseInt(hoursC,10);
  return final;
}


module.exports = {
  msToTime,
  timeToMs,
}
