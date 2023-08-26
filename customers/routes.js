const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.post('/create-customer', (req, res) => {
    try {
        controllers.createCustomer(req).then((response) => {
            res.status(201).json({
                customer: response,
            })
        })
    }
    catch(err) {
        res.status(500).json({
            err: err,
        })
    }
});

router.get("/retrieve-customer/:customer_id", (req, res) => {
  try {
    const customerId = req.params.customer_id;
    controllers.retrieveCustomer(customerId).then((response) => {
      res.status(201).json({
        customer: response,
      });
    });
  } catch (err) {
    res.status(500).json({
      err: err,
    });
  }
});

module.exports = router;
