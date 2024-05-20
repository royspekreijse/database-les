# CRUD operations

- CREATE (INSERT) <!-- .element: class="fragment" -->
- READ (SELECT) <!-- .element: class="fragment" -->
- UPDATE <!-- .element: class="fragment" -->
- DELETE <!-- .element: class="fragment" -->

---

## Gebruik van INSERT

- Hier worden de kolomnamen gebruikt deze zijn optioneel<!-- .element: class="fragment" -->
- Als je deze niet gebruikt moet je wel alle kolommen een waarde geven<!-- .element: class="fragment" -->

---

## Syntax van INSERT

```sql
INSERT INTO tabelnaam (kolom1, kolom2, kolom3, …)
VALUES (waarde1, waarde2, waarde3, …);
```

of

```sql
INSERT INTO tabelnaam
VALUES (waarde1, waarde2, waarde3, …);
```

---

## Voorbeeld van INSERT

```sql
INSERT INTO Studenten (Voornaam, Achternaam)
VALUES
('Jan', 'Jansen'),
('Piet', 'Pietersen'),
('Klaas', 'Klaassen');
```

- Wat gebeurt er met de kolommen die niet gevuld zijn?<!-- .element: class="fragment" -->

---

## Voorbeeld 2 van INSERT

```sql
INSERT INTO Studenten (Voornaam, Achternaam)
VALUES SELECT (Voornaam, Achternaam)
FROM Personen WHERE Type='Student';
```

---

## Gebruik van UPDATE

```sql
UPDATE tabelnaam
SET kolom1 = waarde1, kolom2 = waarde2, …);
WHERE condition;
```

---

## Voorbeeld van UPDATE

```sql
UPDATE Studenten
SET Voornaam = 'Klaas'
WHERE Achternaam = 'Jansen';
```

---

## Gebruik van DELETE

```sql
DELETE FROM tabelnaam
WHERE condition;
```

- WHERE condition is optioneel <!-- .element: class="fragment" -->
- In de WHERE condition gebruik je vaak ID om een record te verwijderen <!-- .element: class="fragment" -->

---

## Voorbeeld van DELETE

```sql
DELETE FROM Studenten
WHERE Achternaam = 'Jansen';
```

---

## Voorbeeld van DELETE

```sql
DELETE FROM Studenten
WHERE Id = 1;
```

---

## Opdracht 1

Open: https://35.sslprotected.nl/phpmyadmin/?db=spekreijse_eu_les3_gebruiker_1

Vul de tabel van de create database opdracht
