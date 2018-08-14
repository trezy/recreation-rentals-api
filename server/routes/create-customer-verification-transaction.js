// Component imports
const BaseRoute = require('../helpers/BaseRoute')
const notImplemented = require('../helpers/notImplemented')





class CreateCustomerVerificationEndpoint extends BaseRoute {
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
    return 'post'
  }

  get propTypes () {
    return {}
  }

  get url () {
    return '/verify/:customerID'
  }
}





module.exports = CreateCustomerVerificationEndpoint
