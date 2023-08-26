const customerViewModel = require("./viewModel");
const customerDbHelpers = require("./dbHelpers");

const customerControllers = {};

customerControllers.createCustomer = async({ body }) => {
  if (!body.name || !body.email || !body.phone || !body.description) {
    return "Incomplete information";
  }
  const customerView = customerViewModel.create(body);
  try {
    const customerDetails = await customerDbHelpers.createCustomer(customerView);
    return customerDetails;
  }
  catch(err) {
    return err;
  }
};

customerControllers.retrieveCustomer = async (customerId) => {
  if (!customerId) {
    return "No customer id provided";
  }
  try {
    const customerDetails = await customerDbHelpers.retrieveSingleCustomer(
      customerId
    );
    return customerDetails;
  } catch (err) {
    return err;
  }
};

module.exports = customerControllers;
