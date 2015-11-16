import React from 'react'
import { DaysOfWeek, DaysOfMonth, Months, Years } from '../../vocab/dates.js'
import { Events } from '../../vocab/events.js'
import { pickRandomItem, getRandomNumber } from '../../lib/rando'
import VocabWord from '../../components/vocab-word.jsx'
import Word from '../../lib/word'


const WhenIsEvent = React.createClass({
  again() {
    this.setState({});
  },

  render () {
    let event = pickRandomItem(Events);
    let whenText;
    let when;
    let questionWord;

    switch(getRandomNumber(0, 3)) {
      case 0:
        whenText = "Day of the week"
        when = pickRandomItem(DaysOfWeek)
        questionWord = new Word('what day of the week', 'なんようび')
        break
      case 1:
        whenText = 'Day of the month'
        when = pickRandomItem(DaysOfMonth)
        questionWord = new Word('what day of the month', 'なんにち')
        break;
      case 2:
        whenText = 'Month'
        when = pickRandomItem(Months)
        questionWord = new Word('what month', 'なんがつ')
        break;
      case 3:
        whenText = 'Year'
        when = pickRandomItem(Years)
        questionWord = new Word('what year', 'なんえん')
        break;
    }


    return (
      <div>
        <h2 className="practice-title">Ask when the event occurs and answer</h2>
        <div className="row">
          <div className="vocab-box">
            <h4>Event</h4>
            <VocabWord word={event} />
          </div>
          <div className="vocab-box">
            <h4>Question</h4>
            <VocabWord word={questionWord} />
          </div>
        </div>

        <div className="row">
          <div className="vocab-box">
            <h4>Answer</h4>
            <VocabWord word={when} />
          </div>
        </div>

        <button className="btn" onClick={this.again}>もいちど</button>
      </div>
    )
  }
})

export default WhenIsEvent
