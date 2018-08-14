// Component imports
const BaseRoute = require('../../helpers/BaseRoute')
const notImplemented = require('../../helpers/notImplemented')





class CancelTripEndpoint extends BaseRoute {
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
    return {
      insuranceTransactionId: PropTypes.string.isRequired,
      transactionId: PropTypes.string.isRequired,
    }
  }

  get url () {
    return '/cancel'
  }
}





module.exports = CancelTripEndpoint
