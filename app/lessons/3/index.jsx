import React, { PropTypes } from 'react'
import LessonIndex from '../../components/lesson-index.jsx'

const Index = React.createClass({
  render () {

    let practice = [
      { name: 'What time is it?', component: require('./what-time-is-it.jsx') },
      { name: 'Start/End Open/Close', component: require('./when-does-x-start-end.jsx') }
    ];

    return (
      <LessonIndex lessons={practice} />
    )
  }
})

export default Index
