# Ściąga SQL

## Pobieranie danych
```sql
SELECT kolumna1, kolumna2 FROM tabela;
SELECT * FROM tabela WHERE warunek;
SELECT * FROM tabela ORDER BY kolumna DESC;
```

## Złączenia (JOIN)
- `INNER JOIN` – tylko pasujące rekordy z obu tabel
- `LEFT JOIN` – wszystkie z lewej tabeli + pasujące z prawej
- `RIGHT JOIN` – wszystkie z prawej tabeli + pasujące z lewej

## Funkcje agregujące
`COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()` – często łączone z `GROUP BY`.

```sql
SELECT klient_id, COUNT(*) AS liczba
FROM zamowienia
GROUP BY klient_id;
```

## Modyfikacja danych
```sql
INSERT INTO tabela (kol1, kol2) VALUES (war1, war2);
UPDATE tabela SET kol1 = wartosc WHERE warunek;
DELETE FROM tabela WHERE warunek;
```
