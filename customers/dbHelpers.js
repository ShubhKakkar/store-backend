const customerDbHelpers = {};
const stripe = require("stripe")(process.env.Secret_Key);

customerDbHelpers.createCustomer = async (customerViewModel) => {
  try {
    const customerDetails = await stripe.customers.create(customerViewModel);
    return customerDetails;
  }
  catch(err) {
    return err;
  }
};

customerDbHelpers.retrieveSingleCustomer = async (customerId) => {
  try {
    const customerDetails = await stripe.customers.retrieve(customerId);
    return customerDetails;
  } catch (err) {
    return err;
  }
};

module.exports = customerDbHelpers;
