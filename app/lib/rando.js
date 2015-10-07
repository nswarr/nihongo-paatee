export function getRandomNumber(lower, upper) {
  var range = upper - lower + 1
  var rando = Math.floor(Math.random() * range)
  return rando + lower
}
