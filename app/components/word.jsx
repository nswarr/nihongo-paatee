import React, { PropTypes } from 'react'

const Word = React.createClass({

  getInitialState() {
    return { showNihongo: false }
  },

  toggleNihongo() {
    this.setState({showNihongo: !this.state.showNihongo});
  },

  render () {

    return (
      <span onClick={this.toggleNihongo}>{this.state.showNihongo ? this.props.nihongo : this.props.english}</span>
    )
  }
})

export default Word
