# SQL om een database te maken

---

## Syntax voor het aanmaken van een database

```sql
CREATE DATABASE school;
```

---

## Syntax verwijder een database

```sql
DROP DATABASE school;
```

---

## Gebruik van een database

```sql
USE school;
```

---

## Hoe maak je een tabel aan

- Defineer de kolommen met een datatype <!-- .element: class="fragment" -->
- Geef 1 van de kolommen een PRIMARY KEY<!-- .element: class="fragment" -->
- Geef een kolom een Standaard Waarde<!-- .element: class="fragment" -->
- Geef een kolom een FOREIGN KEY<!-- .element: class="fragment" -->

---

## Welke datatypes zijn er?

- Dat hangt af van het Database Management System (DBMS)<!-- .element: class="fragment" -->
- Numerieke data types: INT, TINYINT, BIGINT, FLOAT, REAL<!-- .element: class="fragment" -->
- Datum en Tijd data types: DATE, TIME, DATETIME<!-- .element: class="fragment" -->
- Character en String data types: CHAR, VARCHAR, TEXT<!-- .element: class="fragment" -->

---

## Design een table kan met: [Database Design Tool](https://app.quickdatabasediagrams.com/)<!-- .element: class="fragment" -->

---

## Syntax maak een tabel aan

```sql
CREATE TABLE Studenten (
    StudentID INT PRIMARY KEY,
    Voornaam VARCHAR(255),
    Achternaam VARCHAR(255)
);
```

---

## Voorbeeld 2

```sql
CREATE TABLE Student (
    StudentID INT AUTO_INCREMENT NOT NULL ,
    Voornaam VARCHAR(100)  NOT NULL ,
    Achternaam VARCHAR(100) NOT NULL ,
    PRIMARY KEY (
        StudentID
    )
);
```

---

## Syntax verander een tabel

```sql
ALTER TABLE Studenten
  ADD COLUMN Geboortedatum DATE;
```

---

## Breng een link aan tussen twee tabellen

```sql
ALTER TABLE Beoorderling
  FOREIGN KEY(StudentID)
  REFERENCES Student (StudentID);

```

---

## Breng een beperking aan op een kolom

```sql
ALTER TABLE Student
  ADD CONSTRAINT CHK_LEEFTIJD CHECK (LEEFTIJD >12);
```

---

## Opdracht 1

Open: https://35.sslprotected.nl/phpmyadmin/?db=spekreijse_eu_les3_gebruiker_1

- Maak een tabel aan met de naam `Studenten`
- Deze moet de volgende kolommen bevatten inclusief een _PRIMARY KEY_
  - StudentID
  - Voornaam
  - Achternaam
  - Geboortedatum
- Kies zelf de datatypes

---

## Oplossing Opdracht 1

```sql
CREATE TABLE Student (
    StudentID INT AUTO_INCREMENT NOT NULL ,
    Voornaam VARCHAR(100)  NOT NULL ,
    Achternaam VARCHAR(100) NOT NULL ,
    Geboortedatum DATE,
    PRIMARY KEY (
        StudentID
    )
);

```

---

## Opdracht 2

- Maak een tabel met beoordelingen aan
- Deze moet de volgende kolommen bevatten inclusief een _PRIMARY KEY_
  - BeoordelingID
  - StudentID
  - Datum
  - Cijfer
- Zorg ervoor dat deze gelinkt wordt met de vorige tabel Student

---

## Oplossing Opdracht 2

```sql
CREATE TABLE Beoorderling (
    BeoordeelingID INT AUTO_INCREMENT NOT NULL ,
    StudentID INT  NOT NULL ,
    VakID INT  NOT NULL ,
    Cijfer INT  NOT NULL DEFAULT 0,
    PRIMARY KEY (
        BeoordeelingID
    ),
   FOREIGN KEY(StudentID) REFERENCES Student (StudentID)
);

```
