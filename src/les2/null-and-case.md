# Vervolg van SQL

## Wat is <!-- .element: class="fragment" --><span style="color: #00FF00">NULL</span><!-- .element: class="fragment" -->

- Geen waarde<!-- .element: class="fragment" -->
- Niet gevuld<!-- .element: class="fragment" -->

---

## voorbeeld data

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |
| 2   |   Jane   |      Smith |
| 3   |   Ben    |     _NULL_ |

---

## Voorbeeld 1 van gebruik NULL

```SQL
SELECT Id, Voornaam, Achternaam
FROM Studenten
WHERE Achternaam IS NULL;
```

## output

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 3   |   Ben    |     _NULL_ |

---

## Voorbeeld 2 van gebruik NULL

```SQL
SELECT Id, Voornaam, Achternaam
FROM Studenten
WHERE Achternaam IS NOT NULL;
```

## output

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |
| 2   |   Jane   |      Smith |

---

## Gebruik van CASE

- Een expressie die evalueerd in uitkomst die een waarde weergeeft<!-- .element: class="fragment" -->
- IF statement met meerdere uitkomsten<!-- .element: class="fragment" -->
- IF of IIF bestaat standaard niet in SQL maar is vaak wel ingebouwd in meeste Database Management Systemen</span><!-- .element: class="fragment" -->

---

## voorbeeld data

| Id  | Voornaam | Cijfer |
| --- | :------: | -----: |
| 1   |  Stacey  |      9 |
| 2   |   Jane   |      6 |
| 3   |   Ben    |      3 |

---

## Voorbeeld van gebruik CASE

```SQL
SELECT Id, Voornaam, CIJFER,
CASE WHEN Cijfer > 6 THEN 'Uitstekend'
WHEN Cijfer = 6 THEN 'Gemiddeld'
ELSE 'Onvoldoende'
END AS Beoordeling
FROM Studenten;
```

## output

| Id  | Voornaam | Beoordeling |
| --- | :------: | ----------: |
| 1   |  Stacey  |  Uitstekend |
| 2   |   Jane   |   Gemiddeld |
| 3   |   Ben    | Onvoldoende |
