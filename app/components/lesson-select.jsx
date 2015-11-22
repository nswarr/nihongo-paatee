import React from 'react'
import { History } from 'react-router'

const LessonSelect = React.createClass({
  mixins: [History],
  goToLesson(lessonNumber) {
    return (e) => {
      e.preventDefault()
      this.history.pushState(null, `/lesson-${lessonNumber}`)
    }
  },
  render () {
    return (
      <div ref="dropdown" className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
          Choose a lesson
        </button>
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item" onClick={this.goToLesson(3)}>Lesson 3</a>
          <a href="#" className="dropdown-item" onClick={this.goToLesson(6)}>Lesson 6</a>
          <a href="#" className="dropdown-item" onClick={this.goToLesson(7)}>Lesson 7</a>
        </div>
      </div>
    )
  }
})

export default LessonSelect
