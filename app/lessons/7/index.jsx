import React, { PropTypes } from 'react'
import LessonIndex from '../../components/lesson-index.jsx'

const Index = React.createClass({
  render () {
    return (
      <LessonIndex>
        <lesson name="Days of the week" component={require('./days-of-week.jsx')} />
        <lesson name="Days of the month" component={require('./days-of-month.jsx')} />
        <lesson name="State event occurance" component={require('./when-is-event.jsx')} />
        <lesson name="Ask event occurance" component={require('./ask-answer-date.jsx')} />
      </LessonIndex>
    )
  }
})

export default Index
