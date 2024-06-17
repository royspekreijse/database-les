import { createConnection } from "mongoose";

export const mongoDbRemoteClient = createConnection(uri, {
  dbName: "les6",
});

import("./models/pizza");
import("./models/klant");
import("./models/bestelling");
import("./models/bestel-item");
