import React from 'react'
import Index from './pages/index.jsx'

const MainLayout = React.createClass({
  render () {
    return this.props.children || <Index />
  }
})

export default MainLayout
