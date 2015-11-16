import React from 'react'

const VocabWord = React.createClass({
  getInitialState() {
    return { showNihongo: false }
  },
  toggleNihongo() {
    this.setState({showNihongo: !this.state.showNihongo});
  },
  componentWillReceiveProps() {
    this.setState({showNihongo: false});
  },
  render () {
    let word = this.props.word;

    return (
      <span
        className="vocab-word"
        title="Click to see translation"
        onClick={this.toggleNihongo}>{this.state.showNihongo ? word.nihongo : word.english}
      </span>
    )
  }
})

export default VocabWord
