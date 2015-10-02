/*eslint-disable no-unused-vars */
import React from 'react'
import { Router } from 'react-router'
import MainLayout from './main-layout.jsx'
import { createHistory, useBasename } from 'history'

const rootRoute = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: MainLayout,
    childRoutes: [require('./lessons/3/routes.jsx')]
  }]
}

React.render(
  <Router history={createHistory()} routes={rootRoute} />,
  document.getElementById('main')
)
