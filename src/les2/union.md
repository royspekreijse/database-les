## Gebruik van _UNION_

- UNION combineert de resultaten van twee of meer SELECT-opdrachten in één resultaatset. <!-- .element: class="fragment" -->
- De resultaten van elke SELECT-opdracht moeten dezelfde kolommen hebben. <!-- .element: class="fragment" -->
- Standaard worden dubbele rijen verwijderd. <!-- .element: class="fragment" -->

---

## Syntax

```sql
SELECT *Kolom*
  FROM *Tabel1*
UNION *ALL*
SELECT *Kolom*
  FROM *Tabel2*
```

---

## Voorbeeld tabellen

Tabel `Studenten`

| Id  | Voornaam | Achternaam |
| --- | :------: | ---------: |
| 1   |  Stacey  |       Moon |
| 2   |   Jane   |      Smith |
| 3   |   Ben    |     Wilcox |

---

## Tweede voorbeeld tabel

Tabel `Onderwijzers`

| Id  | Voornaam |
| --- | :------: |
| 1   |   Bas    |
| 2   |   Jane   |
| 3   |   Roy    |

---

## Voorbeeld UNION

```sql
SELECT "Student" AS Type, VoorNaam
FROM Studenten
UNION ALL
SELECT "Onderwijzer" AS Type, Voornaam
FROM Onderwijzers;
```

---

## Resultaat

| Type        | Voornaam |
| ----------- | :------: |
| Student     |  Stacey  |
| Student     |   Jane   |
| Student     |   Ben    |
| Onderwijzer |   Bas    |
| Onderwijzer |   Jane   |
| Onderwijzer |   Roy    |

---

## Opdracht 1:

> Geef alle unieke `Cities` weer van de `Customers` en `Suppliers` tabellen
