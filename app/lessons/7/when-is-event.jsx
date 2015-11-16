import React from 'react'
import { DaysOfWeek, DaysOfMonth, Months, Years } from '../../vocab/dates.js'
import { Events } from '../../vocab/events.js'
import { pickRandomItem, getRandomNumber } from '../../lib/rando'
import VocabWord from '../../components/vocab-word.jsx'


const WhenIsEvent = React.createClass({
  again() {
    this.setState({});
  },

  render () {
    let event = pickRandomItem(Events);
    var whenText;
    var when;

    switch(getRandomNumber(0, 3)) {
      case 0:
        whenText = "Day of the week"
        when = pickRandomItem(DaysOfWeek)
        break
      case 1:
        whenText = 'Day of the month'
        when = pickRandomItem(DaysOfMonth)
        break;
      case 2:
        whenText = 'Month'
        when = pickRandomItem(Months)
        break;
      case 3:
        whenText = 'Year'
        when = pickRandomItem(Years)
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
            <h4>{whenText}</h4>
            <VocabWord word={when} />
          </div>
        </div>

        <button className="btn" onClick={this.again}>もいちど</button>
      </div>
    )
  }
})

export default WhenIsEvent
