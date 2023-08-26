const express = require("express");
const router = express.Router();

router.post('/create-payment', (req, res) => {
    try {
        
    }
    catch(err) {
        res.status(500).json({
            err: err
        })
    }
})

module.exports = router;
