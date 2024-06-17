import { Schema, model } from "mongoose";

const bestellingSchema = new Schema(
  {
    klant_id: { type: Schema.Types.ObjectId, ref: "Klant", required: true },
    besteldatum: { type: Date, required: true },
    totaal_prijs: { type: Number, required: true },
    status: { type: String, required: true },
  },
  { collection: "bestellingen" },
);

const Bestelling = model("Bestelling", bestellingSchema);

export { Bestelling };
