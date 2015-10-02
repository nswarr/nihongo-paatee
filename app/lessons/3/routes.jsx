//import { asyncRoute } from '../../util'

const route = {
  path: 'lesson-3',
  getComponent: function(location, cb, childRoutes) {
    require.ensure([], (require) => {
      cb(null, require(`./index.jsx`))
    })
  },
  childRoutes: [{
    path: 'what-time-is-it',
    getComponent: function(location, cb, childRoutes) {
      require.ensure([], (require) => {
        cb(null, require(`./what-time-is-it.jsx`))
      })
    }
  }]
}

export default route;
