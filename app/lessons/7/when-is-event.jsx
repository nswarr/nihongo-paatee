import React from 'react'
import { DaysOfWeek, DaysOfMonth, Months, Years, When } from '../../vocab/dates'
import { Events } from '../../vocab/events'
import { pickRandomItem, getRandomNumber } from '../../lib/rando'
import Word from '../../lib/word'
import VocabWord from '../../components/vocab-word.jsx'


const WhenIsEvent = React.createClass({
  again() {
    this.setState({})
  },

  render () {
    let event = pickRandomItem(Events)
    let when;

    switch(getRandomNumber(0, 4)) {
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
    }


    return (
      <div>
        <h2 className="practice-title">State when the event occurs</h2>
        <div className="row">
          <div className="vocab-box">
            <h4>Event</h4>
            <VocabWord word={event} />
          </div>
          <div className="vocab-box">
            <h4>When</h4>
            <VocabWord word={when} />
          </div>
        </div>

        <button className="btn" onClick={this.again}>もいちど</button>
      </div>
    )
  }
})

export default WhenIsEvent
