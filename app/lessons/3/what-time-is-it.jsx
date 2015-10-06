import React from 'react'
const audioPath = '../audio/lessons/3/'

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
      buttons.push(<button className="btn" onClick={this.generateRandomTime}>Mo ichido</button>)
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
            <h3>What time is it?</h3>
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
    const hoursMap = {
      1 : 'ichiji',
      2 : 'niji',
      3 : 'sanji',
      4 : 'yoji',
      5 : 'goji',
      6 : 'rokuji',
      7 : 'shichiji',
      8 : 'hachiji',
      9 : 'kuji',
      10 : 'juuji',
      11 : 'juuichiji',
      12 : 'juuniji'
    }

    const minuesMap = {
      1 : 'ippun',
      2 : 'nifun',
      3 : 'sanpun',
      4 : 'yoppun',
      5 : 'gofun',
      6 : 'roppun',
      7 : 'nanafun',
      8 : 'happun',
      9 : 'kyuufun',
      10 : 'juupun'
    }

    const tensMap = {
      10 : "juu",
      20 : "nijuu",
      30 : "sanjuu",
      40 : "yonjuu",
      50 : "gojuu",
    }

    let timeText = [hoursMap[this.state.hours]]

    if(this.state.minutes < 11) {
      timeText.push(minuesMap[this.state.minutes])
    } else {
      timeText.push(tensMap[this.state.minutes - (this.state.minutes % 10)])
      timeText.push(minuesMap[this.state.minutes % 10])
    }

    this.setState({
      answer: timeText.join(' ')
    })
  },
  generateRandomTime() {
    this.setState({
      hours: this.getRandomNumber(1, 13),
      minutes: this.getRandomNumber(1, 60),
      answer: null
    })
  },
  getRandomNumber(lower, upper) {
    var range = upper - lower
    var rando = Math.floor(Math.random() * range)
    return rando + lower;
  }
})

export default WhatTimeIsIt
