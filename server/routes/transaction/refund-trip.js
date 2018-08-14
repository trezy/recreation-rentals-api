// Component imports
const BaseRoute = require('../../helpers/BaseRoute')
const notImplemented = require('../../helpers/notImplemented')





class RefundTripEndpoint extends BaseRoute {
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

  get method () {
    return 'put'
  }

  get propTypes () {
    return {}
  }

  get url () {
    return '/:tripID/refund'
  }
}





module.exports = RefundTripEndpoint
