import React, { PropTypes } from 'react'

const Word = React.createClass({

  getInitialState() {
    return { showNihongo: false }
  },

  toggleNihongo() {
    this.setState({showNihongo: !this.state.showNihongo});
  },

  render () {
    let word = this.props.word;

    return (
      <span onClick={this.toggleNihongo}>{this.state.showNihongo ? word.nihongo : word.english}</span>
    )
  }
})

export default Word
