const express = require('express');
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require('cors');
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

app.listen('8080', () => {
    console.log('Server listening at port 8080');
})