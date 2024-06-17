import Pizza from "./model/pizza.js"; 

export async function createPizza(naam, prijs) {
  try {
    const newPizza = new Pizza({
      naam,
      prijs,
    });
    const savedPizza = await newPizza.save();
    return savedPizza;
  } catch (err) {
    console.error("Error creating pizza:", err);
  }
}

export async function getPizzas() {
  try {
    const pizzas = await Pizza.find(
      {},
      { naam: true, prijs: true, _id: false },
    ).exec();
    return pizzas;
  } catch (err) {
    console.error("Error getting pizzas:", err);
  }
}
