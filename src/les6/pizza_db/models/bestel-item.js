import { Schema, model } from "mongoose";

const bestelitemSchema = new Schema(
  {
    bestelling_id: {
      type: Schema.Types.ObjectId,
      ref: "Bestelling",
      required: true,
    },
    pizza_id: { type: Schema.Types.ObjectId, ref: "Pizza", required: true },
    aantal: { type: Number, required: true },
    prijs: { type: Number, required: true },
  },
  { collection: "bestelitems" },
);

const BestelItem = model("Bestelitem", bestelitemSchema);

export { BestelItem };
