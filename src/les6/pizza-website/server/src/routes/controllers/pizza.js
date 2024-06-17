import { createPizza, getPizzas } from "../../database/create-pizza.js";

export const getAllPizzas = async (_req, res) => {
  try {
    const pizzas = await getPizzas();
    console.log("pizzas", pizzas);
    res.status(200).json(pizzas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNewPizza = async (req, res) => {
  const { body } = req;
  console.log("newPost received", body);
  try {
    const { naam, prijs } = body;
    const pizza = await createPizza(naam, prijs);
    res.status(201).json({
      message: `Pizza ${pizza.naam} toegevoegd aan het menu`,
    });
    return;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
