/*eslint-disable no-unused-vars */
import React from 'react'
import { Router } from 'react-router'
import MainLayout from './main-layout.jsx'
import createHashHistory from 'history/lib/createHashHistory'

const history = createHashHistory({queryKey: false})

const rootRoute = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: MainLayout,
    childRoutes: [
      require('./lessons/3/routes.jsx'),
      require('./lessons/6/routes.jsx')
    ]
  }]
}

React.render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('main')
)
