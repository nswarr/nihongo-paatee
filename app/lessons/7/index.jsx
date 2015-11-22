import React, { PropTypes } from 'react'
import LessonIndex from '../../components/lesson-index.jsx'

const Index = React.createClass({
  render () {

    let practice = [
      { name: 'Days of the week', component: require('./days-of-week.jsx') },
      { name: 'Days of the month', component: require('./days-of-month.jsx') },
      { name: 'State event occurance', component: require('./when-is-event.jsx') },
      { name: 'Ask event occurance', component: require('./ask-answer-date.jsx') }
    ];

    return (
      <LessonIndex lessons={practice} />
    )
  }
})

export default Index
