// Module imports
const PropTypes = require('prop-types')





// Component imports
const BaseRoute = require('../../helpers/BaseRoute')





class UpdatePayoutEndpoint extends BaseRoute {
  /***************************************************************************\
    Public methods
  \***************************************************************************/

  async handleRequest (ctx, params) {
    console.log(params)
    // const { stripe } = ctx
    // const {
    //   amount,
    //   destinationAccountID,
    //   destinationBankAccountID,
    // } = params

    // await stripe.transfers.create({
    //   amount,
    //   currency: 'usd',
    //   destination: destinationAccountID,
    // })

    // stripe.payouts.create({
    //   amount,
    //   currency: 'usd',
    //   destination: destinationBankAccountID,
    // }, {
    //   stripe_account: destinationAccountID,
    // })
  }




  /***************************************************************************\
    Getters
  \***************************************************************************/

  get method () {
    return 'post'
  }

  get url () {
    return '/update'
  }
}





module.exports = UpdatePayoutEndpoint
