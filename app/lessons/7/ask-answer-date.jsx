import React from 'react'
import { DaysOfWeek, DaysOfMonth, Months, Years, When } from '../../vocab/dates'
import { Events } from '../../vocab/events'
import { People } from '../../vocab/people'
import { pickRandomItem, getRandomNumber } from '../../lib/rando'
import VocabWord from '../../components/vocab-word.jsx'
import Word from '../../lib/word'


const WhenIsEvent = React.createClass({
  again() {
    this.setState({})
  },

  render () {
    let event = pickRandomItem(Events)
    let when
    let questionWord

    switch(getRandomNumber(0, 4)) {
      case 0:
        when = pickRandomItem(DaysOfWeek)
        questionWord = new Word('what day of the week', 'なんようび')
        break
      case 1:
        var dayOfMonth = pickRandomItem(DaysOfMonth)
        var month = pickRandomItem(Months)
        when = new Word(month.english + ' ' + dayOfMonth.english, month.nihongo + ' ' + dayOfMonth.nihongo)
        questionWord = new Word('what day of the month', 'なんにち')
        break
      case 2:
        when = pickRandomItem(Months)
        questionWord = new Word('what month', 'なんがつ')
        break
      case 3:
        when = pickRandomItem(Years)
        questionWord = new Word('what year', 'なんえん')
        break
      case 4:
        when = pickRandomItem(When)
        questionWord = new Word('when?', 'いつ')
        break
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
