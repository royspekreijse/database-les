# Structured Query Language (SQL)

## Basis keywords en syntax van SQL

---

## SQL Query Execution order

![SQL Execution order](/images/img_sql_execution_order.png)

---

## Weergeven van de data

```sql
SELECT (DISTINCT) *Kolommen*
FROM *Tabel*
```

---

## Voorbeeld selecteren

```SQL
SELECT Id, Voornaam, Achternaam FROM Studenten;
```

## output

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |
| 2   |   Jane   |      Smith |
| 3   |   Ben    |     Wilcox |

---

## Voorbeeld selecteren 2

```SQL
SELECT * FROM Studenten;
```

## output

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |
| 2   |   Jane   |      Smith |
| 3   |   Ben    |     Wilcox |

---

## Voorbeeld selecteren 3

```SQL
SELECT DISTINCT Voornaam FROM Studenten;
```

## Voorbeeld data

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |
| 2   |   Jane   |      Smith |
| 3   |   Ben    |     Wilcox |
| 4   |  Stacey  |      Shine |

---

## Voorbeeld selecteren 3

```SQL
SELECT DISTINCT Voornaam FROM Studenten;
```

## output

| Voornaam |
| :------: |
|  Stacey  |
|   Jane   |
|   Ben    |

---

## Filteren

```sql
SELECT *Kolommen*
FROM *Tabel*
WHERE *Voorwaarde*
```

---

## Voorbeeld van filteren

```SQL
SELECT Id, Voornaam, Achternaam
FROM Studenten
WHERE Id = 1;
```

## output

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |

---

## Voorbeeld filteren 2

```SQL
SELECT *
FROM Studenten
WHERE Id > 1;
```

## output

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 2   |   Jane   |      Smith |
| 3   |   Ben    |     Wilcox |

---

## Voorbeeld filteren 3

```SQL
SELECT *
FROM Studenten
WHERE Achternaam LIKE '%o%';
```

## output

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |
| 3   |   Ben    |     Wilcox |

---

## Voorbeeld sorteren

```SQL
SELECT Id, Voornaam, Achternaam
FROM Studenten
ORDER BY Voornaam;
```

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 3   |   Ben    |     Wilcox |
| 2   |   Jane   |      Smith |
| 1   |  Stacey  |       Moon |

---

## Voorbeeld sorteren 2

```SQL
SELECT Id, Voornaam, Achternaam
FROM Studenten
ORDER BY Voornaam DESC;
```

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |
| 2   |   Jane   |      Smith |
| 3   |   Ben    |     Wilcox |

---

## GROUP BY

De data wordt gegroepeerd op basis van een kolom
Voorbeeld data

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |
| 2   |   Jane   |      Smith |
| 3   |   Ben    |     Wilcox |
| 4   |  Stacey  |      Shine |

---

## GROUP BY

```SQL
SELECT Voornaam, COUNT(Id) AS Aantal
FROM Studenten
GROUP BY Voornaam;
HAVING COUNT(Id) > 1;
```

| Voornaam | Aantal |
| :------: | -----: |
|  Stacey  |      2 |

---

# Probeer het zelf:

Je kan de volgende link gebruiken:
[Link W3Schools SQL playground](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all)

---

## Opdracht 1:

> Geef alle klanten weer die in Spanje wonen

---

## Opdracht 2:

> Geef alle unieke namen van Employees weer gesorteert op voornaam

\*er zijn 2 manieren om dit te doen

---

## Opdracht 3:

> Geef het aantal Orders per CustomerID weer. Gesorteerd op aantal van hoog naar laag
> Voorwaarde is dat je alleen de klanten weergeeft waar de klant meer dan 2 orders heeft geplaatst.
