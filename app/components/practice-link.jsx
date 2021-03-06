import React from 'react'
import { History } from 'react-router'

const Practice = React.createClass({
  mixins: [History],
  goToLesson(e) {
    this.history.pushState(null, `/lesson-${event.target.value}`)
  },
  render () {
    return (
      <select onChange={this.goToLesson}>
        <option value="">Choose a lesson</option>
        <option value="3">Lesson 3</option>
        <option value="6">Lesson 6</option>
        <option value="7">Lesson 7</option>
      </select>
    )
  }
})

export default LessonSelect
