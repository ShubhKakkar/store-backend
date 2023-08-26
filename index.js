const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: true, // Allow redirection in preflight requests
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));

// routes
const authRouter = require("./auth/routes");
const productRouter = require("./products/routes");
const customerRouter = require("./customers/routes");
const paymentRouter = require("./payments/routes");
const customerPaymentRouter = require("./customerPayment/routes");
const orderRouter = require("./order/routes");
const customerOrderRouter = require("./customerOrder/routes");

app.get("/", (req, res) => {
  res.status(201).json("Store server");
});

app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/customer', customerRouter);
app.use('/payment', paymentRouter);
app.use('/customerPayment', customerPaymentRouter);
app.use('/order', orderRouter);
app.use('/customerOrder', customerOrderRouter);

app.listen("8080", () => {
  console.log("Server listening at port 8080");
});
