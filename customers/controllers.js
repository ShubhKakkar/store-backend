const customerViewModel = require("./viewModel");
const customerDbHelpers = require("./dbHelpers");

const customerControllers = {};

customerControllers.createCustomer = async({ body }) => {
  if (
    !body.name ||
    !body.email ||
    !body.phone ||
    !body.description ||
    !body.address ||
    !body.address.line1 ||
    !body.address.city ||
    !body.address.state ||
    !body.address.postal_code ||
    !body.address.country
  ) {
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
