import React from 'react'
const audioPath = '../audio/lessons/3/'

var question = new Audio(`${audioPath}what-time-is-it.mp3`);

const WhatTimeIsIt = React.createClass({
  getInitialState(){
    return {
      minutes: null,
      hours: null,
      started: false
    }
  },
  render () {
    const me = this.state
    let buttons = <button className="btn" onClick={this.start}>Start</button>
    if(me.started) {
      buttons = (
        <div>
          <button className="btn" onClick={this.speakTime}>Play time</button>
          <button className="btn" onClick={this.generateTime}>New Time</button>
        </div>
      )
    }


    let time = `${me.hours}:`
    if(me.minutes < 10) {
      time += `0`
    }
    time += `${me.minutes}`

    return (
      <div className="row">
        <div className="col-md-6">
          <h3>What time is it?</h3>
          <p>{time}</p>
          {buttons}
        </div>
      </div>
    )
  },
  speakTime() {
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

    let minutesAudio = []
    if(this.state.minutes < 11) {
      minutesAudio.push(`${audioPath}${minuesMap[this.state.minutes]}`)
    } else {
      minutesAudio.push(`${audioPath}${tensMap[this.state.minutes - (this.state.minutes % 10)]}`)
      minutesAudio.push(`${audioPath}${minuesMap[this.state.minutes % 10]}`)
    }

    let audio = new Audio(`${audioPath}${hoursMap[this.state.hours]}.mp3`)
    let index = 0

    audio.load()
    audio.play()
    audio.addEventListener('ended',function(){
      if(index < minutesAudio.length){
        audio.src = `${minutesAudio[index]}.mp3`
        audio.pause()
        audio.load()
        audio.play()
        index += 1
      }
    })
  },
  start() {
    this.setState({started: true})
    this.generateTime()
  },
  generateTime() {
    question.play()
    this.generateRandomTime()
  },
  generateRandomTime() {
    this.setState({
      hours: this.getRandomNumber(1, 13),
      minutes: this.getRandomNumber(1, 60)
    })
  },
  getRandomNumber(lower, upper) {
    var range = upper - lower
    var rando = Math.floor(Math.random() * range)
    return rando + lower;
  }
})

export default WhatTimeIsIt
