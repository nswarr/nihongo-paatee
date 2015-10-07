import React from 'react'
import { tensMap, minutesMap, hoursMap } from './data/time-maps'
import { getRandomNumber } from '../../lib/rando'

const WhatTimeIsIt = React.createClass({
  getInitialState(){
    return {
      minutes: null,
      hours: null,
      answer: null
    }
  },
  componentDidMount() {
    this.generateRandomTime()
  },
  render () {
    const me = this.state

    let buttons = []

    if(me.answer){
      buttons.push(<button className="btn" onClick={this.generateRandomTime}>もいちど</button>)
    } else {
      buttons.push(<button className="btn" onClick={this.showAnswer}>Show Answer</button>)
    }

    if(me.hours){
      var time = `${me.hours}:`
      if(me.minutes < 10) {
        time += `0`
      }
      time += `${me.minutes}`
    }

    if(me.answer) {
      var answer = (
        <div className="row">
          <div className="col-md-6">
            {me.answer}
          </div>
        </div>
      )
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <h3>いま　なんじ　ですか。</h3>
            Say the time below
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 digital-clock">
            {time}
          </div>
        </div>
        {answer}
        <div className="row">
          <div className="col-md-9">
            {buttons}
          </div>
        </div>
      </div>
    )
  },
  showAnswer() {
    let timeText = [hoursMap[this.state.hours]]

    if(this.state.minutes < 11) {
      timeText.push(minutesMap[this.state.minutes])
    } else {
      timeText.push(tensMap[this.state.minutes - (this.state.minutes % 10)])
      timeText.push(minutesMap[this.state.minutes % 10])
    }

    this.setState({
      answer: timeText.join(' ')
    })
  },
  generateRandomTime() {
    this.setState({
      hours: getRandomNumber(1, 12),
      minutes: getRandomNumber(1, 59),
      answer: null
    })
  }
})

export default WhatTimeIsIt
