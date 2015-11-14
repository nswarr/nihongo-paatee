const route = {
  path: 'lesson-6',
  getComponent: function(location, cb) {
    require.ensure([], (require) => {
      cb(null, require(`./index.jsx`))
    })
  },
  childRoutes: [{
    path: 'going-places',
    getComponent: function(location, cb) {
      require.ensure([], (require) => {
        cb(null, require(`./going-places.jsx`))
      })
    }
  }]
}

export default route;
