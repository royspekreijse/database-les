# MongoDB shell

- Na installatie van MongoDB kunnen we de MongoDB shell gebruiken om met de database te communiceren. De shell is een JavaScript-interface waarmee we MongoDB-opdrachten kunnen uitvoeren.
- Starten met  `mongosh`

- **Help**
  - `help` - Toont alle beschikbare opdrachten
  - `db.help()` - Toont alle methoden die beschikbaar zijn op het db-object
  - `db.collection.help()` - Toont alle methoden die beschikbaar zijn op het collection-object


---

- **Databases**
  - `show dbs` - Toont alle databases
  - `use <database>` - Schakelt over naar een database of creeert een nieuwe database
  - `db` - Toont de huidige database
  - `db.dropDatabase()` - Verwijdert de huidige database

--- 

## Documenten

  - `db.pizzas.insertOne({naam: 'margherita', ingredienten: ['tomaat', 'mozzarella', 'basillicum', 'zout', olijfolie']})` - Voegt een document toe aan de huidige collectie
  - `db.pizzas.countDocuments()` - Telt het aantal documenten in de huidige collectie
  - `db.pizzas.find({})` - Toont alle documenten in de huidige collectie

----

## insertMany

(10000 documenten toevoegen)
```js
db.pizzas.insertMany(
  Array.from({ length: 10000 }).map((_, index) => ({
    naam: [
      "Margherita",
      "Hawai",
      "Calzone",
      "Salami",
      "BBQ Chicken",
      "Zwarte Truffel",
      "Caprese",
      "Four Cheese",
      "Pepperoni",
      "Broccoli",
      "Doner",
    ][index % 9],
    korst: ["dun", "dik", "normaal", "extra dun"][index % 4],
    gewicht: (index % 18) + 1,
    soort: [
      "Calzone",
      "Steenoven",
      "Magnetron",
      "Gasoven",
      "Diepvries",
      "Gezond",
      "Vegetarisch",
    ][index % 7],
    index: index,
  }))
);
```

---

## Query's

### Zoeken naar pizza's met soort 'Calzone'
```js
db.pizzas.find({soort: 'Calzone'})
```

### Zoeken naar pizza's met een gewicht van 5
```js
db.pizzas.count({gewicht: { $gt:5 }})
```

### Zoeken naar pizza's met een gewicht van 5 en soort 'Calzone'
```js
db.pizzas.count({gewicht: { $gt:5 }, soort: 'Calzone'})
```

### Zoeken met meer complexe queries
```js
db.pizzas.find({ $and : [{ gewicht: { $gte: 5 } }, { gewicht: { $lte: 6}}]})
```


## Selecteer de juiste gegevens

```js
db.pizzas.find({}, { gewicht: 1, soort: 1, _id: 0 })
```

## Update
```js
db.pizzas.updateOne({ soort: 'Calzone'}, { $set: { bedenker: 'Bram' }})
```

## UpdateMany
```js
db.pizzas.updateMany({ soort: 'Calzone'}, { $mul: { gewicht: 100 }})
```

## Upsert
```js
db.pizzas.updateOne({ naam: 'Gemaakt voor de les', soort: 'Calzone', gewicht: 300} ,{ $set: { naam: 'Gemaakt voor de les', soort: 'Calzone', gewicht: 300 }}, { upsert: true })
```

## Delete
```js
db.pizzas.deleteMany({ naam: 'Hawai'})
```

## Indexen


`COLLSCAN` betekent dat MongoDB alle documenten in de collectie moet doorzoeken om de juiste documenten te vinden. Dit is traag en inefficiënt.

```js
db.pizzas.find({ soort: 'Calzone'}).explain()
```


## createIndex
```js
db.pizzas.createIndex ({ soort: 1})
```


