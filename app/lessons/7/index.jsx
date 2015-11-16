import React, { PropTypes } from 'react'
import LessonPage from '../../components/lesson-page.jsx'

const Index = React.createClass({
  render () {

    let practice = [
      {name: 'When is event?', component: require('./when-is-event.jsx')}
    ]

    return (
      <LessonPage lessons={practice} />
    )
  }
})

export default Index
