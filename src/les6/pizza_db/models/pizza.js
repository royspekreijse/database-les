import { Schema, model } from "mongoose";

const pizzaSchema = new Schema(
  {
    naam: { type: String, required: true },
    beschrijving: { type: String, required: true },
    prijs: { type: Number, required: true },
  },
  { collection: "pizzas" },
);

const Pizza = model("Pizza", pizzaSchema);

export { Pizza };
