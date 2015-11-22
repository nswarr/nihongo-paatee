export default Index

import React, { PropTypes } from 'react'
import LessonIndex from '../../components/lesson-index.jsx'

const Index = React.createClass({
  render () {

    let practice = [
      { name: 'Going places', component: require('./going-places.jsx') }
    ];

    return (
      <LessonIndex lessons={practice} />
    )
  }
})

export default Index
