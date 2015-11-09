export function getRandomNumber(lower, upper) {
  var range = upper - lower + 1
  var rando = Math.floor(Math.random() * range)
  return rando + lower
}

export function pickRandomItem(arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
}
