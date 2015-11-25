export function getRandomNumber(lower, upper) {
  var range = upper - lower + 1
  var rando = Math.floor(Math.random() * range)
  return rando + lower
}

export function coinFlip() {
  return getRandomNumber(0,1) == 0
}

export function pickRandomItem(arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
}
