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
        <h2 className="practice-title">Name the day of the month</h2>
        <div className="row">
          <div className="vocab-box">
            <Word word={dayOfMonth} />
          </div>
        </div>
        <button className="btn" onClick={this.again}>もいちど</button>
        <label>
            <input type="checkbox" value={this.state.isFirstTen} onChange={this.toggleFirstTen} /> First 10 days only
        </label>
      </div>
    )
  }
})

export default DaysOfTheMonth
