// Module imports
const PropTypes = require('prop-types')





// Component imports
const BaseRoute = require('../../helpers/BaseRoute')





class CreatePayoutEndpoint extends BaseRoute {
  /***************************************************************************\
    Public methods
  \***************************************************************************/

  async handleRequest (ctx, params) {
    const { stripe } = ctx
    const {
      amount,
      destinationAccountID,
      destinationBankAccountID,
    } = params

    await stripe.transfers.create({
      amount,
      currency: 'usd',
      destination: destinationAccountID,
    })

    stripe.payouts.create({
      amount,
      currency: 'usd',
      destination: destinationBankAccountID,
    }, {
      stripe_account: destinationAccountID,
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
      destinationAccountID: PropTypes.string.isRequired,
      destinationBankAccountID: PropTypes.string.isRequired,
    }
  }

  get url () {
    return '/:destinationAccountID/:destinationBankAccountID'
  }
}





module.exports = CreatePayoutEndpoint
