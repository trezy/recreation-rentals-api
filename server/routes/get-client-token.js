// Component imports
const BaseRoute = require('../helpers/BaseRoute')
const notImplemented = require('../helpers/notImplemented')





class GetClientTokenEndpoint extends BaseRoute {
  /***************************************************************************\
    Public methods
  \***************************************************************************/

  constructor () {
    super()

    this.handleRequest = notImplemented
  }




  /***************************************************************************\
    Getters
  \***************************************************************************/

  get defaultProps () {
    return {}
  }

  get propTypes () {
    return {}
  }

  get url () {
    return '/auth/client-token'
  }
}





module.exports = GetClientTokenEndpoint
