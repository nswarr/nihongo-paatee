import React, { PropTypes } from 'react'
import LessonPage from '../../components/lesson-page.jsx'

const Index = React.createClass({
  render () {

    let practice = [
      {name: 'test', component: require('./my-file.jsx')}
    ]

    return (
      <LessonPage lessons={practice} />
    )
  }
})

export default Index
