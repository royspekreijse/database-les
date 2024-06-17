// Now you can use Mongoose models as usual
import Pizza from "./model/pizza.js"; // Replace with your model path

// Example of using the Pizza model
export async function createPizza(naam, prijs) {
  try {
    const newPizza = new Pizza({
      naam,
      prijs,
    });
    const savedPizza = await newPizza.save();
    console.log("Pizza created successfully", { savedPizza });
    return savedPizza;
  } catch (err) {
    console.error("Error creating user:", err);
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
    console.error("Error creating user:", err);
  }
}
