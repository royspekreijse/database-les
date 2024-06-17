import express from "express";
import cors from "cors";
import connectToDatabase from "./database/connect.js";
import pizzaRoutes from "./routes/pizza-routes.js";

const app = express();
const PORT = 1337;

await connectToDatabase();
app.use(cors());
app.use(express.json());

app.use("/api/pizza", pizzaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
