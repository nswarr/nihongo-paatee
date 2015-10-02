export function asyncRoute(path, filePath, childRoutes=[]){
  return {
    path: path,
    getComponent: function(location, cb, childRoutes) {
      require.ensure([], (require) => {
        cb(null, require(`./${filePath}.jsx`))
      })
    }
  }
}
