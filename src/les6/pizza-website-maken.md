# Pizza website maken

---

## Benodigdheden

- Installeer [NodeJS](https://nodejs.org/en/download/package-manager)
- Installeer [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)
- Op Windows maak gebruik van [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install)

---

## Stappen

- Open een terminal en maak een nieuwe folder aan voor je project
- `mkdir pizza-website`
- Ga naar de pizza-website folder `cd pizza-website`

---

## Server maken

- maak een folder voor de server `mkdir server`
- Ga naar de server folder `cd server`
- `npm init -y`

---

## Installeer Server dependencies

- We gebruiken Express voor het maken van API's en routes
  We gebruiken Mongoose om te communiceren met de MongoDB database
  We gebruiken Cors om cross-origin resource sharing mogelijk te maken

  - `npm install express cors mongoose`

- We gebruiken Nodemon om de server automatisch te herstarten bij veranderingen
  - `npm install --save-dev nodemon`

## Maak een start script

- Maak een `mkdir src`
- Maak een bestand index `touch src/index.js`

## Voeg scripts toe aan package.json
In  `scripts: {}`
Voeg de volgende scripts toe
```JSON
    "start": "node src/index",
    "dev": "nodemon src/index"
```

Voeg ook het volgende toe: 
```JSON
  "type": "module",
```
---

## Start de database
- Start MongoDB
  - `mongod`
---
## Start de server
- Ga naar de server folder
  - `cd ../server`
  - `npm run dev`


---
## Script voor de server
```javascript
import express from "express";
import cors from "cors";
// import routes from "./routes/routes.js";
// import connectToDatabase from "./database/connect.js";

const app = express();
const PORT = 1337;

// await connectToDatabase();
app.use(cors());
app.use(express.json());

//app.use("/api/pizza", routes);

app.get("/api/pizzas", (request, response) => {
  return response.json({
    message: `Pizza Margherita`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

```
----

## Open de browser en ga naar 
- [http://localhost:1337/api/pizzas](http://localhost:1337/api/pizzas)

--- 

## Connectie met de database

- Maak een folder voor de database `mkdir database`
- Maak een bestand connect.js `touch database/connect.js`

Vul deze met de volgende code:
```javascript
import mongoose from "mongoose";

let connection = null;

const connectToDatabase = async () => {
  if (connection) {
    return connection;
  }

  try {
    const mongoUri = "mongodb://localhost:27017/pizza";

    connection = await mongoose.connect(mongoUri);

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to the database.");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`Mongoose connection error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected from the database.");
    });

    return connection;
  } catch (err) {
    console.error(`Failed to connect to the database: ${err}`);
    throw err;
  }
};

export default connectToDatabase;
```
----
## Voeg een model toe aan de database
- Maak een folder voor de models `mkdir models`
- Maak een bestand pizza.js `touch models/pizza.js`

Vul de pizza met de volgende code:
```javascript
import { Schema, model } from "mongoose";
const pizza = new Schema(
  {
    naam: {
      type: String,
      required: true,
    },
    prijs: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Pizza = model("pizza", pizza);

export default Pizza;
```
---
## Maak een route voor de pizza's api

- Maak een folder voor de routes `mkdir routes`
- Maak een bestand pizzas.js `touch routes/pizzas.js`
- Maak een bestand `routes/controllers/pizza.js`
- Voeg de volgende code toe aan `routes/routes.js`
```javascript
import express from "express";

import { getAllPizzas, createNewPizza } from "./controllers/pizza.js";

const router = express.Router();

router.get("/", getAllPizzas);
router.post("/", createNewPizza);

export default router;
```

- Voeg de volgende code toe aan `routes/controllers/pizza.js`
```javascript


- Voeg de volgende code toe aan `database/pizza.js`
```javascript
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
```


## Maak de client

- ga naar je pizza-website folder
  - `cd ..` als je nog op de `server` folder zit
- maak een folder voor de client `mkdir client`
- ga naar de client folder `cd client`
- maak een React app
- `npx create-next-app .`
  - No to `Typescript`
  - No to `Customize the default import alias`

--- 
## Start de client
- ga naar de client folder
  - `cd ../client`
  - `npm start`

- ga naar [http://localhost:3000](http://localhost:3000)
---

## Vervang de inhoud in `src/app/page.js` 

```javascript
'use client';
import { useState,useEffect } from "react";

export default function Home() {
  const [response, setResponse] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    setResponse("Loading...");
    const response = await fetch("http://localhost:1337/api/pizza", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ naam: event.target.naam_veld.value }),
    });
    setResponse(await response.text());
  }

  async function onShow() {
    const response = await fetch("http://localhost:1337/api/pizza", {
      method: "GET",
    });
    setResponse(await response.text());
  }

  useEffect(() => {
    onShow(); // On page load show all pizzas
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="naam_veld" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zoek een pizza</label>
            <input type="text" id="naam_veld" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zoek naar een pizza" required />
          </div>
          <hr class="my-5 border-gray-300 dark:border-gray-600" />
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Opslaan</button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center">
        Resultaten:
        {response}
      </div>
    </main>
  );
}```


