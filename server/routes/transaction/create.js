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
    const {
      amount,
      customerID,
      destinationAccountID,
      fee,
    } = params

    ctx.data = await stripe.charges.create({
      amount,
      capture: false,
      currency: 'usd',
      customer: customerID,
      destination: {
        amount: amount - fee,
        account: destinationAccountID,
      },
    })
  }




  /***************************************************************************\
    Getters
  \***************************************************************************/

  get method () {
    return 'post'
  }

  get propTypes () {
    return {
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      fee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      customerID: PropTypes.string.isRequired,
      destinationAccountID: PropTypes.string.isRequired,
    }
  }
}





module.exports = CreateTransactionEndpoint
