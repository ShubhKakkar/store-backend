const customerViewModel = {};

customerViewModel.create = (customerData) => {
    const customerCreateViewModel = {};

    customerCreateViewModel.name =  customerData.name;
    customerCreateViewModel.email =  customerData.email;
    customerCreateViewModel.phone = customerData.phone;
    customerCreateViewModel.description=  customerData.description;

    return customerCreateViewModel;
}

module.exports = customerViewModel;