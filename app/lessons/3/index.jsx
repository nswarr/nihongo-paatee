  import React from 'react'
import { Link } from 'react-router'

const Index = React.createClass({
  render () {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 practice-menu">
            <h4>Practice</h4>
            <Link to="/lesson-3/what-time-is-it">What time is it?</Link>
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
