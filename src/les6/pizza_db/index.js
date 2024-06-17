import { createConnection } from "mongoose";

import { BestelItem } from "./models/bestel-item.js";
import { Bestelling } from "./models/bestelling.js";
import { Klant } from "./models/klant.js";
import { Pizza } from "./models/pizza.js";

const uri = "mongodb://localhost:27017";
const client = createConnection(uri);

client.on("open", async () => {
  const nieuweKlant = new Klant({
    naam: "Jan Jansen",
    email: "jan.jansen@example.com",
    telefoonnummer: "+31612345678",
    adres: "Straat 1, 1234 AB, Amsterdam",
  });

  const nieuwePizza1 = new Pizza({
    naam: "Margherita",
    beschrijving: "Tomatensaus, mozzarella, basilicum",
    prijs: 8.5,
  });
  const nieuwePizza2 = new Pizza({
    naam: "Hawaii",
    beschrijving: "Ham, ananas, kaas tomatensaus",
    prijs: 10.5,
  });

  await nieuweKlant.save();
  await nieuwePizza1.save();
  await nieuwePizza2.save();
  client.close();
});
