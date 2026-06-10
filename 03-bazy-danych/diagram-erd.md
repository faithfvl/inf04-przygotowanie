# Diagram ERD – sklep internetowy

Diagram związków encji dla przykładowej bazy danych. GitHub renderuje go automatycznie.

```mermaid
erDiagram
    KLIENCI ||--o{ ZAMOWIENIA : "sklada"
    ZAMOWIENIA ||--|{ POZYCJE_ZAMOWIENIA : "zawiera"
    PRODUKTY ||--o{ POZYCJE_ZAMOWIENIA : "wystepuje w"

    KLIENCI {
        int id PK
        string imie
        string nazwisko
        string email
    }
    ZAMOWIENIA {
        int id PK
        int klient_id FK
        date data_zamowienia
    }
    PRODUKTY {
        int id PK
        string nazwa
        decimal cena
        int stan_magazynowy
    }
    POZYCJE_ZAMOWIENIA {
        int id PK
        int zamowienie_id FK
        int produkt_id FK
        int ilosc
    }
```

Wskazówka: na egzaminie warto umieć narysować taki diagram i zamienić go na polecenia `CREATE TABLE`.
