import React from 'react'
import { getRandomNumber } from '../../lib/rando'
import { places } from './data/vocab'

const WhatTimesDoesXStartEnd = React.createClass({
  generateTimesAndPlace() {
    return {
      place: places[getRandomNumber(0, places.length - 1)],
      open: getRandomNumber(5,8),
      close: getRandomNumber(9,12)
    }
  },
  again() {
    this.setState(this.generateTimesAndPlace())
  },
  getInitialState() {
    return this.generateTimesAndPlace()
  },
  render () {
    let me = this.state
    let imagePath = `img/lessons/3/${me.place.image}`

    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <h3>{me.place.name}は なんじ から なんじ まで ですか。</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            open: {me.open}:00<br />
            close: {me.close}:00
          </div>
          <div className="col-md-6">
            <img src={imagePath} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <button className="btn" onClick={this.again}>もいちど</button>
          </div>
        </div>
      </div>
    )
  }
})

export default WhatTimesDoesXStartEnd
