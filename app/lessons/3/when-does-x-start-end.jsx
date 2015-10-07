import React from 'react'
import { getRandomNumber } from '../../lib/rando'
import { events, places } from './data/vocab'

const WhatTimesDoesXStartEnd = React.createClass({
  generateTimesAndPlace() {


    let usePlace = getRandomNumber(0,1) == 1
    let instructions

    if(usePlace) {
      switch(getRandomNumber(1,3)){
        case 1:
          instructions = 'opens'
          break
        case 2:
          instructions = 'closes'
        case 3:
          instructions = 'opens and closes'
      }

      return {
        placeOrEvent: places[getRandomNumber(0, places.length - 1)],
        start: getRandomNumber(5,8),
        end: getRandomNumber(9,12),
        instructions: instructions
      }

    } else {
      switch(getRandomNumber(1,3)){
        case 1:
          instructions = 'starts'
          break
        case 2:
          instructions = 'ends'
        case 3:
          instructions = 'starts and ends'
      }

      return {
        placeOrEvent: events[getRandomNumber(0, events.length - 1)],
        start: getRandomNumber(1,2),
        end: getRandomNumber(3,4),
        instructions: instructions
      }
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
    let imagePath = `img/lessons/3/${me.placeOrEvent.image}`

    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <h3>Ask when {me.instructions} and then answer</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            {me.start}:00 - {me.end}:00 <br />
            <button className="btn" onClick={this.again}>もいちど</button>
          </div>
          <div className="col-md-6">
            <img src={imagePath} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">

          </div>
        </div>
      </div>
    )
  }
})

export default WhatTimesDoesXStartEnd
