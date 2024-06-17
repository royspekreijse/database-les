const mongoose = require("mongoose");

const bestelling = new mongoose.Schema(
  {
    voornaam: {
      type: String,
      required: true,
    },
    pizzas: {
      type: [
        {
          type: [{ naam: String, toppings: [{ toppingNaam: String }] }],
          required: true,
        },
      ],
    },
  },
  {
    timestamps: true,
  },
);

const Bestelling = mongoose.model("bestelling", bestelling);

export default Bestelling;
