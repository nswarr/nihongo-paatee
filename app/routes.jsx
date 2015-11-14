/*eslint-disable no-unused-vars */
import React from 'react'
import { Router } from 'react-router'
import MainLayout from './main-layout.jsx'
import createHashHistory from 'history/lib/createHashHistory'

const history = createHashHistory({queryKey: false})

const rootRoute = {
  path: '/',
  component: MainLayout,
  childRoutes: [
    require('./lessons/3/routes.jsx'),
    require('./lessons/6/routes.jsx'), {
      path: 'lesson-7',
      getComponent: function(location, cb) {
        require.ensure([], (require) => {
          cb(null, require(`./lessons/7/index.jsx`))
        })
      }
    }
  ]
}

React.render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('main')
)
