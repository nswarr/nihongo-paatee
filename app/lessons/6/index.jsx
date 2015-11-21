export default Index

import React, { PropTypes } from 'react'
import LessonPage from '../../components/lesson-page.jsx'

const Index = React.createClass({
  render () {

    let practice = [
      { name: 'Going places', component: require('./going-places.jsx') }
    ];

    return (
      <LessonPage lessons={practice} />
    )
  }
})

export default Index
