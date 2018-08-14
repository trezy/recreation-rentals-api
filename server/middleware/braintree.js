// Module imports
const Braintree = require('braintree')





module.exports = () => async (ctx, next) => {
  ctx.gateway = Braintree.connect({
    ...ctx.config.braintree,
    environment: Braintree.Environment.Sandbox,
  })

  await next()
}
