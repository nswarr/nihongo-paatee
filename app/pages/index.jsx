import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Index = React.createClass({
  render () {
    return (
      <div>
        <Link to="/chapter-1">Chapter 1</Link>
        <Link to="/chapter-2">Chapter 2</Link>
      </div>
    )
  }
})

export default Index
