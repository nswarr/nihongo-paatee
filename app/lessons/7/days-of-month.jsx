import React from 'react'
import { DaysOfMonth } from '../../vocab/dates.js'
import { pickRandomItem, getRandomNumber } from '../../lib/rando'
import Word from '../../components/word.jsx'


const DaysOfTheMonth = React.createClass({
  getInitialState() {
    return { isFirstTen: false }
  },
  again() {
    this.setState({});
  },
  toggleFirstTen() {
    this.setState({isFirstTen: !this.state.isFirstTen});
  },
  render () {
    var dayOfMonth= pickRandomItem(DaysOfMonth);

    if(this.state.isFirstTen) {
      dayOfMonth = DaysOfMonth[getRandomNumber(0,9)];
    }

    return (
      <div>
        <h2 className="lesson-title">Name the days of the month</h2>
        <label>
            <input type="checkbox" value={this.state.isFirstTen} onChange={this.toggleFirstTen} /> First 10 days only
        </label>
        <div className="box-section">
          <Word word={dayOfMonth} />
        </div>
        <br />
        <button className="btn" onClick={this.again}>もいちど</button>
      </div>
    )
  }
})

export default DaysOfTheMonth
