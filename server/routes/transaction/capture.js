// Module imports
const PropTypes = require('prop-types')





// Component imports
const BaseRoute = require('../../helpers/BaseRoute')





class CreateTransactionEndpoint extends BaseRoute {
  /***************************************************************************\
    Public methods
  \***************************************************************************/

  async handleRequest (ctx, params) {
    const { stripe } = ctx
    const { chargeID } = params

    ctx.data = await stripe.charges.capture(chargeID)
  }




  /***************************************************************************\
    Getters
  \***************************************************************************/

  get method () {
    return 'put'
  }

  get propTypes () {
    return {
      chargeID: PropTypes.string.isRequired,
    }
  }

  get url () {
    return '/:chargeID/capture'
  }
}





module.exports = CreateTransactionEndpoint
