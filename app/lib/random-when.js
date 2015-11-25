import {pickRandomItem, getRandomNumber, coinFlip} from './rando'
import Word from '../lib/word'
import { DaysOfWeek, DaysOfMonth, Months, Years, When } from '../vocab/dates'

export default function randomWhen() {
  let when

  switch(getRandomNumber(0, 5)) {
    case 0:
      when = pickRandomItem(DaysOfWeek)
      break
    case 1:
      var dayOfMonth = pickRandomItem(DaysOfMonth)
      var month = pickRandomItem(Months)
      when = new Word(month.english + ' ' + dayOfMonth.english, month.nihongo + ' ' + dayOfMonth.nihongo)
      break;
    case 2:
      when = pickRandomItem(Months)
      break;
    case 3:
      when = pickRandomItem(Years)
      break;
    case 4:
      when = pickRandomItem(When)
      break;
    case 5:
      let dayOfWeek = pickRandomItem(DaysOfWeek)
      let nextWeek
      let lastWeek
      DaysOfWeek.forEach((day) => {
        if(day.english == 'next week') {
          nextWeek = day
        }
        if(day.english == 'last week') {
          lastWeek = day
        }
      })

      if(coinFlip()) {
        when = new Word(`${lastWeek.english}, ${dayOfWeek.english}`, `${lastWeek.nihongo}の${dayOfWeek.nihongo}`)
      } else {
        when = new Word(`${nextWeek.english}, ${dayOfWeek.english}`, `${nextWeek.nihongo}の${dayOfWeek.nihongo}`)
      }
  }

  return when
}
