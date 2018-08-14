require('isomorphic-fetch')

// Module imports
const { readdirSync } = require('fs')
const {
  extname,
  resolve,
} = require('path')
const Router = require('koa-router')





// Component constants
const router = new Router





module.exports = koa => {
  const routesDirPath = resolve(__dirname, 'routes')
  const routesDirContents = readdirSync(routesDirPath)

  /*
   * This section reads all of the items from the `routes` directory and
   * implements them appropriately. If the item is a file, it gets the route
   * info from the file and injects the route. If it's a directory, it gets the
   * index file and mounts it as a subrouter.
   */
  for (const routeFilename of routesDirContents) {
    const routePath = resolve(routesDirPath, routeFilename)

    if (extname(routeFilename) === '.js') {
      const route = new (require(routePath))

      router[route.method.toLowerCase()](route.url, route._handleRequest)
    } else {
      const entityType = routeFilename
      const subroutesDirContents = readdirSync(routePath)
      const subrouter = new Router

      for (const subrouteFilename of subroutesDirContents) {
        const subroutePath = resolve(routePath, subrouteFilename)
        const subroute = new (require(subroutePath))

        subrouter[subroute.method.toLowerCase()](subroute.url, subroute._handleRequest)
      }

      router.use(`/${entityType}`, subrouter.routes(), subrouter.allowedMethods())
    }
  }





  /******************************************************************************\
    Attach the router to the app
  \******************************************************************************/

  koa.use(router.routes())
  koa.use(router.allowedMethods())
}
