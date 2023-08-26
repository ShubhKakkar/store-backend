const customerDbHelpers = {};
const stripe = require("stripe")(process.env.Secret_Key);
const Customer = require("./model");

customerDbHelpers.createCustomer = async (customerViewModel) => {
  try {
    const customerExists = await Customer.findOne({
      email: customerViewModel.email,
    });

    if (customerExists) {
      return customerExists;
    }

    const customerDetails = await stripe.customers.create(customerViewModel);

    const newCustomer = new Customer(customerViewModel);
    newCustomer.stripeId = customerDetails?.id;
    const savedCustomer = await newCustomer.save();

    return savedCustomer;
  } catch (err) {
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
