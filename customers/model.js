const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    stripeId: {
      type: String,
      required: [true, "Stripe id cannot be null"],
    },
    name: {
      type: String,
      required: [true, "customer name cannot be blank"],
    },
    email: {
      type: String,
      required: [true, "Customer email cannot be blank"],
    },
    phone: {
      type: String,
      required: [true, "Customer phone cannot be blank"],
    },
    description: {
      type: String,
      required: [true, "Customer description cannot be null"],
    },
    address: {
      line1: {
        type: String,
        required: [true, "line1 cannot be null"],
      },
      line2: {
        type: String,
      },
      city: {
        type: String,
        required: [true, "city cannot be null"],
      },
      state: {
        type: String,
        required: [true, "state cannot be null"],
      },
      postal_code: {
        type: Number,
        required: [true, "postal_code cannot be null"],
      },
      country: {
        type: String,
        required: [true, "country cannot be null"],
      },
    },
    cardName: {
      type: String,
    },
    cardNumber: {
      type: Number,
    },
    expiryDate: {
      type: String,
    },
    cvc: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);