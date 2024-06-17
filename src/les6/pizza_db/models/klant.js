import { Schema, model } from "mongoose";

const klantSchema = new Schema(
  {
    naam: { type: String, required: true },
    email: { type: String, required: true },
    telefoonnummer: { type: String, required: true },
    adres: { type: String, required: true },
  },
  { collection: "klanten" },
);

const Klant = model("Klant", klantSchema);

export { Klant };
