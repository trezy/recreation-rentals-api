module.exports = {
  braintree: {
    merchantAccountId: process.env.BTAPI_BRAINTREE_MERCHANT_ACCOUNT_ID,
    merchantId: process.env.BTAPI_BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BTAPI_BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BTAPI_BRAINTREE_PRIVATE_KEY,
  },
  stripe: {
    key: process.env.BTAPI_STRIPE_KEY,
    secret: process.env.BTAPI_STRIPE_SECRET,
  }
}
