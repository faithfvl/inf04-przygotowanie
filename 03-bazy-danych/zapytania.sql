-- Przykładowe zapytania SQL

-- 1. Wszyscy klienci posortowani po nazwisku
SELECT imie, nazwisko, email
FROM klienci
ORDER BY nazwisko;

-- 2. Produkty droższe niż 100 zł
SELECT nazwa, cena
FROM produkty
WHERE cena > 100;

-- 3. Zamówienia wraz z danymi klienta (złączenie tabel)
SELECT z.id, k.imie, k.nazwisko, z.data_zamowienia
FROM zamowienia z
JOIN klienci k ON z.klient_id = k.id;

-- 4. Liczba zamówień każdego klienta (grupowanie)
SELECT k.nazwisko, COUNT(z.id) AS liczba_zamowien
FROM klienci k
LEFT JOIN zamowienia z ON k.id = z.klient_id
GROUP BY k.id, k.nazwisko;

-- 5. Łączna wartość produktów na magazynie
SELECT SUM(cena * stan_magazynowy) AS wartosc_magazynu
FROM produkty;
