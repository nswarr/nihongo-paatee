export function getRandomNumber(lower, upper) {
  var range = upper - lower
  var rando = Math.floor(Math.random() * range)
  return rando + lower;
}
