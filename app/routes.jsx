/*eslint-disable no-unused-vars */
import React from 'react'
import { Router } from 'react-router'
import MainLayout from './main-layout.jsx'
import { createHistory, useBasename } from 'history'

const history = useBasename(createHistory)({
  basename: '/public'
})

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: MainLayout,
    childRoutes: [
      route('chapter-1'),
      route('chapter-2'),
    ]
  } ]
}

function route(fileName) {
  return {
    path: fileName,
    getComponent(location, cb) {
      require.ensure([], (require) => {
        cb(null, require(`./pages/${fileName}.jsx`))
      })
    }
  }
}

React.render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('main')
)
