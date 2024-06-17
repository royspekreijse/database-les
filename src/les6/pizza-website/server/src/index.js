import express from "express";
import cors from "cors";
import pizzaRoutes from "./routes/routes.js";
import connectToDatabase from "./database/connect.js";

const app = express();
const PORT = 1337;

await connectToDatabase();
app.use(cors());
app.use(express.json());

app.use("/api/pizza", pizzaRoutes);

/*
app.post("/api/pizzas", (request, response) => {
  const { name, price } = request.body;

  return response.json({
    message: `Pizza ${name} with the price of ${price} added to the menu`,
  });
});
*/
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
