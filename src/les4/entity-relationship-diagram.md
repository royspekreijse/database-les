# Entity Relationship Diagrams

**Entity Relationship Diagrams** (ERD) is een manier om de structuur van de database te modelleren

---

## Waarom een ERD?

- Het is een visuele weergave van de database<!-- .element: class="fragment" -->
- Het is een manier om de structuur van de database te modelleren<!-- .element: class="fragment" -->
- Het is een manier om de relaties tussen de tabellen te tonen<!-- .element: class="fragment" -->

---

## Onderdelen van een ERD

- Entity is een object of iets wat waargenomen kan worden<!-- .element: class="fragment" -->
- Attributes zijn de eigenschappen van een entity<!-- .element: class="fragment" -->
- Relationship is een verband tussen twee attributes<!-- .element: class="fragment" -->

---

## Hoe word ziet een erd eruit?

---

<!-- .slide: data-background-color="white" -->

![ERD Voorbeeld](/images/img_erd_schema.png) <!--.fragment .fade-in -->

---

## Hoe wordt een relatie getekend?

- One to One<!-- .element: class="fragment" -->

<div class="fragment">

```plaintext
+------------------+               +-----------------------+
|    Gebruikers    |               |   Gebruikersprofielen |
+------------------+               +-----------------------+
| GebruikerID (PK) | 1           1 | ProfielID (PK)        |
| Naam             |---------------| GebruikerID (FK)      |
| Email            |               | Adres                 |
| Wachtwoord       |               | Telefoon              |
+------------------+               | Geboortedatum         |
                                   +-----------------------+
```

</div>

---

## Hoe worden relaties weergegeven?

- One-to-Many<!-- .element: class="fragment" -->

<div class="fragment">

```plaintext
+-----------------+            +-----------------+
|    Klanten      |            | Bestellingen    |
+-----------------+         ∞  +-----------------+
| KlantID (PK)    | 1       N  | OrderID (PK)    |
| Naam            |------------| KlantID (FK)    |
| Email           |            | BestelDatum     |
| Telefoonnr      |            | TotalAmount     |
+-----------------+            +-----------------+
```

</div>

---

## Hoe worden relaties weergegeven?

- Many-to-Many<!-- .element: class="fragment" -->

<div class="fragment">

```plaintext
+---------------+       +---------------+        +----------+
| Student       |       | StudentCursus |        | Cursus   |
+---------------+       +---------------+        +----------+
| StudentID (PK)| 1   N | StudentID (FK)| N    1 | CursusID |
| Naam          |-------| CursusID (FK) |--------| Naam     |
| Email         |       +---------------+        +----------+
| Telefoonnr    |
+---------------+
```

</div>
