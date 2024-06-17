import { Schema, model } from "mongoose";
const pizza = new Schema(
  {
    naam: {
      type: String,
      required: true,
    },
    prijs: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Pizza = model("pizza", pizza);

export default Pizza;
