  import React from 'react'
import { Link } from 'react-router'

const Index = React.createClass({
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 practice-menu">
            <h4>Practice</h4>
            <Link to="/lesson-3/what-time-is-it">いま　なんじ　ですか</Link>　<br />
            <Link to="/lesson-3/when-does-x-start-end">なんじ から なんじ まで ですか</Link>
          </div>
          <div className="col-md-offset-1 col-md-9">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
})

export default Index
