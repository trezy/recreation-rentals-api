// Module imports
const PropTypes = require('prop-types')





// Component imports
const BankAccountShape = require('../../shapes/bankAccount')
const BaseRoute = require('../../helpers/BaseRoute')
const CreditCardShape = require('../../shapes/creditCard')





class CreateTransactionEndpoint extends BaseRoute {
  /***************************************************************************\
    Public methods
  \***************************************************************************/

  async handleRequest (ctx, params) {
    const { stripe } = ctx
    const {
      amount,
      customerID,
      fee,
      merchantAccountID,
      source,
    } = params

    const chargeInfo = {
      amount,
      currency: 'usd',
      customer: customerID,
      destination: {
        account: merchantAccountID,
        amount: amount - fee,
      },
      metadata: {
        paid: false,
        readyToPay: false,
      },
    }

    if (source) {
      chargeInfo.source = source
    }

    ctx.data = await stripe.charges.create(chargeInfo)
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
      merchantAccountID: PropTypes.string.isRequired,
      source: PropTypes.string,
    }
  }
}





module.exports = CreateTransactionEndpoint
