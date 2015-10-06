import React from 'react'

const WhatTimesDoesXStartEnd = React.createClass({
  render () {
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
  }
})

export default WhatTimesDoesXStartEnd
