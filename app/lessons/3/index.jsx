import React from 'react'

const Index = React.createClass({
  render () {
    return this.props.children || <h1>HUZZAH</h1>
  }
})

export default Index
