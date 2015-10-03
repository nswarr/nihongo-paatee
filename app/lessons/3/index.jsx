  import React from 'react'
import { Link } from 'react-router'

const Index = React.createClass({
  render () {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/lesson-3/what-time-is-it">What time is it?</Link>
          </div>
        </div>
        
        {this.props.children}

      </div>
    )
  }
})

export default Index
