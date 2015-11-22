export default Index

import React, { PropTypes } from 'react'
import LessonIndex from '../../components/lesson-index.jsx'

const Index = React.createClass({
  render () {
    return (
      <LessonIndex>
        <lesson name="Going places" component={require('./going-places.jsx')} />
      </LessonIndex>
    )
  }
})

export default Index
