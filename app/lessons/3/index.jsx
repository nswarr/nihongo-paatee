import React, { PropTypes } from 'react'
import LessonIndex from '../../components/lesson-index.jsx'

const Index = React.createClass({
  render () {
    return (
      <LessonIndex>
        <lesson name="What time is it?" component={require('./what-time-is-it.jsx')} />
        <lesson name="Start/End Open/Close" component={require('./when-does-x-start-end.jsx')} />
      </LessonIndex>
    )
  }
})

export default Index
