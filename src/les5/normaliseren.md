# Normaalvormen

- Regels die worden gebruikt om een database te normaliseren.
- Zorgt ervoor dat de database efficiënter en betrouwbaarder wordt.

---

<section data-auto-animate>

## Eerste Normaalvorm (1NF)

Een tabel voldoet aan de Eerste Normaalvorm (1NF) als deze aan de volgende criteria voldoet:

- **Atomiciteit**:

<p class="fragment fade-down"> Alle kolommen bevatten ondeelbare (atomaire) waarden. Elk veld bevat slechts één waarde. </p>
</section>
<section data-auto-animate>

## Eerste Normaalvorm (1NF)

Een tabel voldoet aan de Eerste Normaalvorm (1NF) als deze aan de volgende criteria voldoet:

- **Uniciteit**:

<p class="fragment fade-down"> Elke kolom moet unieke waarden bevatten.</p>
</section>
<section data-auto-animate>

## Eerste Normaalvorm (1NF)

Een tabel voldoet aan de Eerste Normaalvorm (1NF) als deze aan de volgende criteria voldoet:

- **Geen Herhalende Groepen**:

<p class="fragment fade-down">Er mogen geen herhalende groepen zijn. Elke set gerelateerde gegevens moet in een eigen tabel worden opgeslagen.</p>
</section>

---

### Stappen om 1NF te Bereiken

**Zorg voor Atomiciteit**:

- &shy; <!-- .element: class="fragment" --> Splits kolommen die meerdere waarden bevatten op in afzonderlijke kolommen of rijen.
  - &shy; <!-- .element: class="fragment" --> Als je een kolom hebt die meerdere toppings opslaat, moet je deze opsplitsen in individuele kolommen.

---

### Stappen om 1NF te Bereiken

**Verwijder Herhalende Groepen**:

- Als een tabel kolommen bevat die zich herhalen voor hetzelfde entiteit, splits deze dan op in verschillende rijen of gerelateerde tabellen.
- Voorbeeld: Als je een tabel hebt met `Pizza1`, `Pizza2`, etc., splits deze dan op in aparte rijen in een gerelateerde tabel.

---

### Stappen om 1NF te Bereiken

Zorg ervoor dat elke kolom unieke waarden bevat en geen combinatie van meerdere waarden is.

---

### Voorbeeld

Stel je hebt de volgende niet-genormaliseerde tabel:

<div class="fragment" style=" transform: scale(0.7);transform-origin: top;">

| ID  | KlantNaam | Pizzas                       | Toppings                       |
| --- | --------- | ---------------------------- | ------------------------------ |
| 1   | Alice     | Margherita, Pepperoni        | Tomaat, Kaas; Pepperoni, Kaas  |
| 2   | Bob       | Quattro Stagioni             | Ham, Champignons, Kaas         |
| 3   | Charlie   | Margherita, Quattro Formaggi | Tomaat, Kaas; Kaas, Gorgonzola |

</div>

---

### Deze tabel voldoet niet aan 1NF omdat

- &shy;<!-- .element: class="fragment" --> de kolom `Pizzas` meerdere waarden bevat.
- &shy;<!-- .element: class="fragment" --> de kolom `Toppings` meerdere waarden bevat.

---

### Om deze tabel om te zetten naar 1NF, kun je het volgende doen

- &shy;<!-- .element: class="fragment" --> Splits de kolommen `Pizzas` en `Toppings` op zodat elke pizza en topping in een aparte rij wordt opgeslagen:

---

### Voorbeeld

<div class="fragment" style=" transform: scale(0.5); transform-origin: 25% 0%;">

| ID  | KlantNaam | Pizza            | Topping     |
| --- | --------- | ---------------- | ----------- |
| 1   | Alice     | Margherita       | Tomaat      |
| 1   | Alice     | Margherita       | Kaas        |
| 1   | Alice     | Pepperoni        | Pepperoni   |
| 1   | Alice     | Pepperoni        | Kaas        |
| 2   | Bob       | Quattro Stagioni | Ham         |
| 2   | Bob       | Quattro Stagioni | Champignons |
| 2   | Bob       | Quattro Stagioni | Kaas        |
| 3   | Charlie   | Margherita       | Tomaat      |
| 3   | Charlie   | Margherita       | Kaas        |
| 3   | Charlie   | Quattro Formaggi | Kaas        |
| 3   | Charlie   | Quattro Formaggi | Gorgonzola  |

</div>

---

### Nu voldoet de tabel aan 1NF omdat

- &shy;<!-- .element: class="fragment" --> Elke kolom bevat alleen atomaire waarden.
- &shy;<!-- .element: class="fragment" --> Er zijn geen herhalende groepen.
- &shy; <!-- .element: class="fragment" --> Elke waarde in de kolom `Pizzas` en `Topping` is uniek per rij.

---

## Tweede Normaalvorm (2NF)

---

### Definitie van Tweede Normaalvorm (2NF)

Een tabel voldoet aan de Tweede Normaalvorm (2NF) als deze aan de volgende criteria voldoet:

- &shy; <!-- .element: class="fragment" --> **Voldoet aan 1NF**: De tabel moet in de Eerste Normaalvorm zijn.
- &shy; <!-- .element: class="fragment" --> **Volledige Functionele Afhankelijkheid**: Elke niet-sleutelkolom moet volledig functioneel afhankelijk zijn van de gehele primaire sleutel, niet slechts een deel ervan.

---

### Stappen om 2NF te Bereiken

- &shy;<!-- .element: class="fragment" --> **Identificeer Primaire Sleutel**
  - &shy;<!-- .element: class="fragment" --> Bepaal de primaire sleutel van de tabel.
- &shy;<!-- .element: class="fragment" --> Bepaal of de niet-sleutelkolommen volledig afhankelijk zijn van de primaire sleutel.
  - &shy;<!-- .element: class="fragment" --> Verplaats kolommen die slechts gedeeltelijk afhankelijk zijn van een deel van de samengestelde sleutel naar een aparte tabel.

---

### Voorbeeld

Stel je hebt de volgende tabel in 1NF:

<div class="fragment" style=" transform: scale(0.4);transform-origin: 40% 0%;">

| BestellingID | KlantID | KlantNaam | PizzaID | PizzaNaam        | Topping     |
| ------------ | ------- | --------- | ------- | ---------------- | ----------- |
| 1            | 1       | Alice     | 101     | Margherita       | Tomaat      |
| 1            | 1       | Alice     | 101     | Margherita       | Kaas        |
| 1            | 1       | Alice     | 102     | Pepperoni        | Pepperoni   |
| 1            | 1       | Alice     | 102     | Pepperoni        | Kaas        |
| 2            | 2       | Bob       | 103     | Quattro Stagioni | Ham         |
| 2            | 2       | Bob       | 103     | Quattro Stagioni | Champignons |
| 2            | 2       | Bob       | 103     | Quattro Stagioni | Kaas        |
| 3            | 3       | Charlie   | 101     | Margherita       | Tomaat      |
| 3            | 3       | Charlie   | 101     | Margherita       | Kaas        |
| 3            | 3       | Charlie   | 104     | Quattro Formaggi | Kaas        |
| 3            | 3       | Charlie   | 104     | Quattro Formaggi | Gorgonzola  |

</div>

---

### Deze tabel voldoet niet aan 2NF omdat

- `KlantNaam` afhankelijk is van `KlantID` en `PizzaNaam` afhankelijk is van `PizzaID`.

---

### Om deze tabel om te zetten naar 2NF, kun je het volgende doen

**KlantenTabel**:

<div class="fragment" style=" transform: scale(1); transform-origin: top;">

| KlantID | KlantNaam |
| ------- | --------- |
| 1       | Alice     |
| 2       | Bob       |
| 3       | Charlie   |

</div>

---

**Pizza's Tabel**:

<div class="fragment" style=" transform: scale(1); transform-origin: top;">

| PizzaID | PizzaNaam        |
| ------- | ---------------- |
| 101     | Margherita       |
| 102     | Pepperoni        |
| 103     | Quattro Stagioni |
| 104     | Quattro Formaggi |

 </div>

---

**Bestellingen Tabel**:

<div class="fragment" style=" transform: scale(1); transform-origin: top;">

| BestellingID | KlantID |
| ------------ | ------- |
| 1            | 1       |
| 2            | 2       |
| 3            | 3       |

</div>

---

**BestellingPizzaToppingsTabel**:

<div class="fragment" style=" transform: scale(0.7); transform-origin: top;">

| BestellingID | PizzaID | Topping     |
| ------------ | ------- | ----------- |
| 1            | 101     | Tomaat      |
| 1            | 101     | Kaas        |
| 1            | 102     | Pepperoni   |
| 1            | 102     | Kaas        |
| 2            | 103     | Ham         |
| 2            | 103     | Champignons |
| 2            | 103     | Kaas        |
| 3            | 101     | Tomaat      |
| 3            | 101     | Kaas        |
| 3            | 104     | Kaas        |
| 3            | 104     | Gorgonzola  |

</div>

---

## Derde Normaalvorm (3NF)

---

### Definitie van Derde Normaalvorm (3NF)

Een tabel voldoet aan de Derde Normaalvorm (3NF) als deze aan de volgende criteria voldoet:

- &shy;<!-- .element: class="fragment" --> **Voldoet aan 2NF**: De tabel moet in de Tweede Normaalvorm zijn.
- &shy;<!-- .element: class="fragment" --> **Geen Transitieve Afhankelijkheden**: Niet-sleutelkolommen mogen niet afhankelijk zijn van andere niet-sleutelkolommen.

---

### Stappen om 3NF te Bereiken

**Identificeer Transitieve Afhankelijkheden**:

- &shy;<!-- .element: class="fragment" --> Zoek naar kolommen die afhankelijk zijn van andere niet-sleutelkolommen.

---

### Stappen om 3NF te Bereiken

**Verwijder Transitieve Afhankelijkheden**:

- &shy;<!-- .element: class="fragment" --> Verplaats deze kolommen naar een aparte tabel.

---

### Voorbeeld

Stel je hebt de volgende tabel in 2NF:

<div class="fragment" style=" transform: scale(0.8) ; transform-origin: -26% 0%;">

| KlantID | KlantNaam | Adres          | Plaats    | Provincie  | ProvincieKort |
| ------- | --------- | -------------- | --------- | ---------- | ------------- |
| 1       | Alice     | Wallaan 1      | Enschede  | Overijssel | OV            |
| 2       | Bob       | Doplaan 2      | Hengelo   | Overijssel | OV            |
| 3       | Charlie   | Dorpstraat 3 a | Hengelo   | Gelderland | GD            |
| 3       | Astrid    | Hoofdstraat 12 | Groningen | Groningen  | GR            |

</div>

---

Deze tabel voldoet niet aan 3NF omdat `Provincie` afhankelijk is van `ProvincieKort`

Om deze tabel om te zetten naar 3NF, kun je het volgende doen:

---

**KlantenTabel**:

<div class="fragment" style=" transform: scale(0.8); transform-origin: -26% 0%;">

| KlantID | KlantNaam | Adres          | Plaats    | ProvincieKort |
| ------- | --------- | -------------- | --------- | ------------- |
| 1       | Alice     | Wallaan 1      | Enschede  | OV            |
| 2       | Bob       | Doplaan 2      | Hengelo   | OV            |
| 3       | Charlie   | Dorpstraat 3 a | Hengelo   | GD            |
| 3       | Astrid    | Hoofdstraat 12 | Groningen | GR            |

</div>

---

**ProvincieTabel**:

<div class="fragment" style=" transform: scale(1); transform-origin: top;">

| ProvincieKort | ProvincieNaam |
| ------------- | ------------- |
| OV            | Overijssel    |
| GD            | Gelderland    |
| GR            | Groningen     |
| ZH            | Zuid Holand   |

</div>

---

## Nu gaan we het zelf proberen!

- Hier is de informatie:

---

### Informatie over Alice

- **MedewerkerID:** 1
- **Naam:** Alice
- **Afdeling:** HR
- **Afdelingslocatie:** New York
- **Projectnaam:** Project Alpha
- **Projectlocatie:** Boston
- **Projectnaam:** Project Beta
- **Projectlocatie:** San Francisco
- **Vaardigheid:** Excel

---

### Informatie over Bob

- **MedewerkerID:** 2
- **Naam:** Bob
- **Afdeling:** IT
- **Afdelingslocatie:** San Francisco
- **Projectnaam:** Project Beta
- **Projectlocatie:** San Francisco
- **Projectnaam:** Project Delta
- **Projectlocatie:** Boston
- **Vaardigheid:** JavaScript

---

### Informatie over Charlie

- **MedewerkerID:** 3
- **Naam:** Charlie
- **Afdeling:** HR
- **Afdelingslocatie:** New York
- **Projectnaam:** Project Gamma
- **Projectlocatie:** Chicago
- **Projectnaam:** Project Alpha
- **Projectlocatie:** Boston
- **Vaardigheid:** Communicatie
- **Vaardigheid:** Management

---
