import React from 'react'
import { DaysOfWeek } from '../../vocab/dates.js'
import { pickRandomItem } from '../../lib/rando'
import VocabWord from '../../components/vocab-word.jsx'


const DaysOfTheWeek = React.createClass({
  again() {
    this.setState({});
  },
  toggleFirstTen() {
    this.setState({isFirstTen: !this.state.isFirstTen});
  },
  render () {
    var dayOfWeek = pickRandomItem(DaysOfWeek);

    return (
      <div>
        <h2 className="practice-title">Name the days of the week</h2>
        <div className="row">
          <div className="vocab-box">
            <VocabWord word={dayOfWeek} />
          </div>
        </div>
        <button className="btn" onClick={this.again}>もいちど</button>
      </div>
    )
  }
})

export default DaysOfTheWeek
