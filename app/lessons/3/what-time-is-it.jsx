import React from 'react'

function getRandomNumber(lower, upper){
  var range = upper - lower
  var rando = Math.floor(Math.random() * range)
  return rando + lower;
}

function generateRandomTime() {
  var hours = getRandomNumber(1, 13)
  var minutes = getRandomNumber(1, 60)

  if(minutes < 10) {
    minutes = `0${minutes}`
  }

  return `${hours}:${minutes}`
}

var question = new Audio('../audio/lessons/3/what-time-is-it.mp3');

const WhatTimeIsIt = React.createClass({
  getInitialState(){
    return { time: generateRandomTime() }
  },
  render () {
    return (
      <div>
        <h1>What time is it?</h1>
        <p>{this.state.time}</p>
        <button onClick={this.generateTime}>Generate again</button>
      </div>
    )
  },
  generateTime() {
    question.play();
    this.setState({ time: generateRandomTime() })
  }
})

export default WhatTimeIsIt
