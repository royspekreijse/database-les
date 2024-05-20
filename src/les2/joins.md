# Verschillende vormen van JOIN

- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL OUTER JOIN

---

## Syntax

```sql
SELECT *Kolommen*
FROM *Tabel* `JOIN` *Tabel* `ON` *Voorwaarde*;
```

---

<section>
 <h2>Voorbeeld INNER JOIN</h2>

 <!-- .slide: data-background="#ffffff" -->

![Inner Join](/images/img_inner_join.png) <!--.fragment .fade-in -->

</section>
<section>
 <h2>Voorbeeld INNER JOIN</h2>
 <pre>
    <code>
SELECT KlantId, KlantNaam, OrderID
FROM Klanten
INNER JOIN Orders ON Klanten.KlantId = Orders.KlantId;
    </code>
  </pre>
  <table class="fragment fade-in">
      <tr>
        <th>KlantNaam</th>
        <th>OrderID</th>
      </tr>
      <tr>
        <td>Willem de Vries</td>
        <td>10383</td>
      </tr>
      <tr>
        <td>Anna van Buuren</td>
        <td>10355</td>
      </tr>
    </table>
</section>

---

<section>
  <h2>Voorbeeld LEFT JOIN</h2>
  <img src="/images/img_left_join.png" alt="Left Join" style="width: 100%; height: 200px; object-fit:contain">
</section>
 <!-- .slide: data-background="#ffffff" -->
<section>
  <h2>Voorbeeld LEFT JOIN</h2>
  <pre>
    <code>
      SELECT KlantNaam, OrderID
      FROM Klanten
      LEFT JOIN Orders ON Klanten.KlantId = Orders.KlantId;
    </code>
    </pre>
    <table>
      <tr>
        <th>KlantNaam</th>
        <th>OrderID</th>
      </tr>
      <tr>
        <td>Willem de Vries</td>
        <td>10383</td>
      </tr>
      <tr>
        <td>Anna van Buuren</td>
        <td>10355</td>
      </tr>
    <tr>
        <td>Hendrik Jansen</td>
        <td>NULL</td>
      </tr>
    </table>
</section>
 <!-- .slide: data-background="#ffffff" -->

---

<section>
  <h2>Voorbeeld RIGHT JOIN</h2>
  <img src="/images/img_right_join.png" alt="Right Join" style="width: 100%; height: 200px; object-fit:contain">
</section>
 <!-- .slide: data-background="#ffffff" -->
<section>
  <h2>Voorbeeld RIGHT JOIN</h2>
  <div class="r-stack">
    <pre class="fragment fade-in-then-out"">
      <code>
SELECT KlantNaam, OrderID
FROM Orders
RIGHT JOIN Klanten ON Orders.KlantId = Klanten.KlantId;
      </code>
    </pre>
    <table class="fragment fade-in">
      <tr>
        <th>KlantNaam</th>
        <th>OrderID</th>
      </tr>
      <tr>
        <td>Willem de Vries</td>
        <td>10383</td>
      </tr>
      <tr>
        <td>Anna van Buuren</td>
        <td>10355</td>
      </tr>
    <tr>
        <td>Hendrik Jansen</td>
        <td>NULL</td>
      </tr>
    </table>
  </div>
</section>
<!-- .slide: data-background="#ffffff" -->

---

<section>
  <h2>Voorbeeld FULL OUTER JOIN</h2>
  <img src="/images/img_full_outer_join.png" alt="Right Join" style="width: 100%; height: 200px; object-fit:contain">
</section>
<!-- .slide: data-background="#ffffff" -->
<section>
  <h2>Voorbeeld FULL OUTER JOIN</h2>
  <pre>
    <code>
      SELECT KlantNaam, OrderID
      FROM Klanten
      FULL OUTER JOIN Orders
        ON Klanten.KlantId = Orders.KlantId
    </code>
    </pre>

</section>
 <section>
  <h2>Voorbeeld FULL OUTER JOIN</h2>
  <table>
    <tr>
      <th>KlantNaam</th>
      <th>OrderID</th>
    </tr>
    <tr>
      <td>NULL</td>
      <td>10308</td>
    </tr>
    <tr>
      <td>NULL</td>
      <td>10365</td>
    </tr>
    <tr>
      <td>Willem de Vries</td>
      <td>10383</td>
    </tr>
    <tr>
      <td>Anna van Buuren</td>
      <td>10355</td>
    </tr>
   <tr>
      <td>Hendrik Jansen</td>
      <td>NULL</td>
    </tr>
  </table>
 </section>
<!-- .slide: data-background="#ffffff" -->

---

<section data-markdown>

## Opdracht 1

Maak gebruik van de `Orders` en `Shippers` tabellen

- Toon alle Kolommen van beide tabellen en zorg dat ze gekoppeld zijn op `ShipperID`

</section>
<section>

## Oplossing opdracht 1

```sql
SELECT Orders.*, Shippers.*
FROM Orders
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID;
```

</section>

---

<section data-markdown>

## Opdracht 2:

Maak gebruik van de `Customers` en `Orders` tabellen

- A: Toon de namen van klanten die geen orders hebben geplaatst
- B: Maak een Query die het volgende weergeeft: `CustomerName`, `NumberOfOrders`,
laat hierbij ook de klanten zien die nog geen orders hebben geplaatst
</section>
<section data-markdown>

## Oplossing opdracht 2A:

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID=Orders.CustomerID
WHERE Orders.CustomerID IS NULL
```

</section>
<section data-markdown>

## Oplossing opdracht 2B:

```sql
SELECT Customers.CustomerName,
  COUNT(Orders.OrderID) AS NumerOfOrders
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID=Orders.CustomerID
GROUP BY Customers.CustomerName
ORDER BY Customers.CustomerName;
```

</section>

---

<section data-markdown>

## Opdracht 2C:

- Maak een Query die het volgende weergeeft:
  CustomerName, OrderHoeveelheid,

  - Geef de tekst 'Geen' weer als de klant geen orders heeft geplaatst
  - Geef de tekst 'Weinig' weer als de klant 1 of 2 orders heeft geplaatst
  - Geef de tekst 'Veel' weer als de klant meer dan 2 orders heeft geplaatst

  (Oplossing volgt)
  </section>
