## Weten jullie het volgende nog?

- Wat is een Database Management System?<!-- .element: class="fragment" -->
- Wat is SQL?<!-- .element: class="fragment" -->

---

<section data-auto-animate>
  <h2>Voorbeeld van GROUP BY</h2>
  <pre data-id="code">
    <code data-trim data-noescape data-line-numbers="1-4|4">
SELECT ProductID, SUM(Quantity) As SomVanAantal
FROM OrderDetails
GROUP BY ProductID
WHERE SUM(Quantity) > 100
  </code>
</pre>
</section>
<section data-auto-animate>
    <h2>Voorbeeld van GROUP BY</h2>
    <pre data-id="code">
      <code data-trim data-noescape data-line-numbers="4">
SELECT ProductID, SUM(Quantity) As SomVanAantal
FROM OrderDetails
GROUP BY ProductID
HAVING SUM(Quantity) > 100
    </code>
  </pre>
</section>
<section>
    <h2>Reden hiervoor:</h2>
    <image src="/images/img_sql_execution_order.png" alt="SQL Execution order" />
</section>
