import React from 'react'
import { Link } from 'react-router'

const Index = React.createClass({
  render () {
    if(this.props.children) {
      return this.props.children;
    }

    return (
      <div>
        <Link to="/lesson-3/what-time-is-it">Lesson 3 - Time</Link>
      </div>
    )
  }
})

export default Index
