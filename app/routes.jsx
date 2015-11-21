/*eslint-disable no-unused-vars */
import React from 'react'
import { Router } from 'react-router'
import MainLayout from './main-layout.jsx'
import createHashHistory from 'history/lib/createHashHistory'

const history = createHashHistory({queryKey: false})

const rootRoute = {
  path: '/',
  component: MainLayout,
  childRoutes: [{
      path: 'lesson-3',
      getComponent: function(location, cb) {
        require.ensure([], (require) => {
          cb(null, require(`./lessons/3/index.jsx`))
        })
      }
    },{
      path: 'lesson-6',
      getComponent: function(location, cb) {
        require.ensure([], (require) => {
          cb(null, require(`./lessons/6/index.jsx`))
        })
      }
    }, {
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
